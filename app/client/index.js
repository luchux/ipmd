// in client.js
Meteor.subscribe("users");

Meteor.subscribe("myDebts");
Meteor.subscribe("myCredits");

Template.body.helpers({
    userId: function(){
        return Meteor.userId();
    }
});