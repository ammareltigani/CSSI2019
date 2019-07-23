import webapp2
import jinja2
import os

jinja_env = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)

class GridHandler(webapp2.RequestHandler):
    def get(self):
        grid = jinja_env.get_template("templates/SquareUp.html")
        self.response.write(grid.render())

app = webapp2.WSGIApplication([
    ('/', GridHandler),

    ],
    debug=True)
