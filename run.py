#
# <( 'v' )> Work in Progress <( 'v' )>
#
# Fread
# Learn to Read
#
# A web application that teaches literacy to the youth.
#
# <( 'v' )> Work in Progress <( 'v' )>
#

import config

import webapp2
import jinja2







class Home(webapp2.RequestHandler):

	def get(self):



		template = config.JINJA_ENVIRONMENT.get_template('templates/home.html')
		return self.response.write(template.render())

class About(webapp2.RequestHandler):

	def get(self):



		template = config.JINJA_ENVIRONMENT.get_template('templates/about.html')
		return self.response.write(template.render())

class Games(webapp2.RequestHandler):

	def get(self):

		template = config.JINJA_ENVIRONMENT.get_template('templates/games.html')
		return self.response.write(template.render())

class PortfolioPiece(webapp2.RequestHandler):

	def get(self, param):
		template = config.JINJA_ENVIRONMENT.get_template('templates/games/%s.html' % param)
		return self.response.write(template.render())


#
# Run the application
#

application = webapp2.WSGIApplication([

	('/', Home),
	('/about', About),
	('/games', Games),
	webapp2.Route(r'/games/<param>', handler=PortfolioPiece)

])
