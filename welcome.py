import webapp2
import jinja2
import os

jinja_env = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)

class WelcomeHandler(webapp2.RequestHandler):
    def get(self):
        username = self.request.get('username')
        level = self.request.get('level')
        template_var = {
        "name": username,
        "level": level
        }
        start_template=jinja_env.get_template("templates/welcome.html")
        self.response.write(start_template.render(template_var))

class GameHandler(webapp2.RequestHandler):
    def post(self):
        username = self.request.get('username')
        level = self.request.get('level')
        color = self.request.get("color")
        template_var = {
            "name": username,
            "level": level,
            "color":  color,
        }
        game_template=jinja_env.get_template("templates/SquareUp.html")
        self.response.write(game_template.render(template_var))

class HowtoplayHandler(webapp2.RequestHandler):
    def get(self):
        start_template=jinja_env.get_template("templates/howtoplay.html")
        self.response.write(start_template.render())

class LeaderboardHandler(webapp2.RequestHandler):
    def get(self):
        lead_template=jinja_env.get_template("templates/leaderboard.html")
        self.response.write(lead_template.render())

app = webapp2.WSGIApplication([
    ('/', WelcomeHandler),
    ('/game', GameHandler),
    ('/howtoplay', HowtoplayHandler),
    ('/leaderboard', LeaderboardHandler),
    ],
    debug=True)
