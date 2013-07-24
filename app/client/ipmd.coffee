root = global ? window

Template.groups.name = ->
	'culo'

Template.login.events
	'click' : (e) ->
		# template data, if any, is available in 'this'
		if typeof console isnt 'undefined'
			console.log "You pressed the button", @, e

# if Meteor.isServer
# 	Meteor.startup( () ->
# 		# code to run on server at startup
# 	)