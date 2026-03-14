from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def home():
    lang = request.args.get("lang", "en")
    return render_template("home.html", lang=lang)

@app.route("/vacancies")
def vacancies():
    lang = request.args.get("lang", "en")
    return render_template("vacancies.html", lang=lang)

if __name__ == "__main__":
    app.run()