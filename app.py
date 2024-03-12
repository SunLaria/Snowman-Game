from flask import Flask,render_template
from whitenoise import WhiteNoise

app=Flask(__name__)
app.wsgi_app = WhiteNoise(app.wsgi_app, root="static/", prefix='static/')

@app.route('/')
def home():
    return render_template('Snowman.html')
