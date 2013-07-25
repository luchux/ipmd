Meteor.publish("myDebts", function(){
    return Debts.find({'debtor':this.userId});
})

Meteor.publish("myCredits", function(){
    return Debts.find({'creditor':this.userId});
})

// in server.js
Meteor.publish("users", function () {
  return Meteor.users.find({}, {fields: {emails: 1, profile: 1}});
});

Meteor.publish("groups", function () {
  return Groups.find({userId: this.userId});
});

