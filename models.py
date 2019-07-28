from google.appengine.ext import ndb
class Round(ndb.Model):
    name = ndb.StringProperty()
    level = ndb.StringProperty()
    color = ndb.StringProperty()
    score = ndb.StringProperty()
    time_date = ndb.DateTimeProperty()
