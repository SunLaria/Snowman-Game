# Snowman - Game

An Friendly Alternative To Hangman Game.

Features:
- Exertnal API Word Definition
- Wrong Guess Animation
- Friendly Sound Effects for Game Start, Button Press, Win, Lose Scenerio.
- Can Be Played On Desktop and Mobile


## How To Play

- You Have 12 Guesses, Snowman Builds Up Every Wrong Guess With A Nice Animation.
- After 12 Guesses, You've Lost And You Can Try Again.


## ScreenShots
![](https://i.imgur.com/OKY5WLn.png)


## How to Setup:
Docker:
```
docker run -p 5000:5000 docker.io/randomg1/snowman-game:2
```


Locally:
```
git clone https://github.com/SunLaria/Snowman-Game.git
cd Snowman-Game
python -m pip install -r requirements.txt
flask run
```


## How To Run:
Navigate to http://localhost:5000/ or http://127.0.0.1:5000/


## Additional Information

- This Game Is Written in JS, HTML, CSS with the use of External Free API and Axios.
- Python Flask Build For Docker Integration.
