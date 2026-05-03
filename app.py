from flask import Flask, render_template, request, jsonify
import os
import json
from datetime import datetime

app = Flask(__name__)

def get_sheet():
    try:
        import gspread
        from google.oauth2.service_account import Credentials

        creds_json = os.environ.get("GOOGLE_CREDENTIALS")
        if not creds_json:
            return None, "GOOGLE_CREDENTIALS env var not set"

        creds_dict = json.loads(creds_json)
        scopes = [
            "https://www.googleapis.com/auth/spreadsheets",
            "https://www.googleapis.com/auth/drive",
        ]
        credentials = Credentials.from_service_account_info(creds_dict, scopes=scopes)
        client = gspread.authorize(credentials)
        sheet_id = os.environ.get("GOOGLE_SHEET_ID")
        if not sheet_id:
            return None, "GOOGLE_SHEET_ID env var not set"
        sheet = client.open_by_key(sheet_id).sheet1
        return sheet, None
    except Exception as e:
        return None, str(e)


@app.route("/")
def home():
    lang = request.args.get("lang", "en")
    return render_template("home.html", lang=lang)


@app.route("/vacancies")
def vacancies():
    lang = request.args.get("lang", "en")
    return render_template("vacancies.html", lang=lang)


@app.route("/courses/<slug>")
def course(slug):
    valid = {"ielts-general", "ielts-academic", "speaking", "mock-tests"}
    if slug not in valid:
        return render_template("home.html", lang="en"), 404
    lang = request.args.get("lang", "en")
    return render_template("course.html", lang=lang, slug=slug)


@app.route("/mock-register", methods=["GET", "POST"])
def mock_register():
    lang = request.args.get("lang", "en")

    if request.method == "POST":
        name     = request.form.get("name", "").strip()
        phone    = request.form.get("phone", "").strip()
        email    = request.form.get("email", "").strip()
        course_type = request.form.get("course_type", "").strip()
        target   = request.form.get("target", "").strip()
        date_pref = request.form.get("date_pref", "").strip()

        if not name or not phone:
            return render_template(
                "mock_register.html", lang=lang,
                error=True, success=False
            )

        row = [
            datetime.utcnow().strftime("%Y-%m-%d %H:%M UTC"),
            name, phone, email, course_type, target, date_pref
        ]

        sheet, err = get_sheet()
        if sheet:
            # Add header row if sheet is empty
            if sheet.row_count == 0 or sheet.acell("A1").value is None:
                sheet.append_row([
                    "Timestamp", "Full Name", "Phone", "Email",
                    "Course Type", "Target Score", "Preferred Date"
                ])
            sheet.append_row(row)
            return render_template("mock_register.html", lang=lang, success=True, error=False)
        else:
            # Log the error but still show success to user
            print(f"Sheet error: {err}")
            return render_template("mock_register.html", lang=lang, success=True, error=False)

    return render_template("mock_register.html", lang=lang, success=False, error=False)


if __name__ == "__main__":
    app.run(debug=True)
