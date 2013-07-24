Template.myCredits.helpers({
   credits: function (user){
    if (typeof user.userId === 'undefined')
     return Debts.find({ creditor: Meteor.userId() });
    return Debts.find({ creditor: Meteor.userId(), debtor:user });
   }
});