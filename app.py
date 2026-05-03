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

@app.route("/courses/<slug>")
def course(slug):
    valid = {"ielts-general", "ielts-academic", "speaking", "mock-tests"}
    if slug not in valid:
        return render_template("home.html", lang="en"), 404
    lang = request.args.get("lang", "en")
    return render_template("course.html", lang=lang, slug=slug)

if __name__ == "__main__":
    app.run()