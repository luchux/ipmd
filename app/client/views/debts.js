/*** Template myDebts ***/

Template.myDebts.helpers({
   debts: function (user){
    if (typeof user.userId === 'undefined')
      return Debts.find({ debtor: Meteor.userId() });
    return Debts.find({ debtor: Meteor.userId(), creditor: user });
   }
});

/*** Template myCredits ***/

Template.myCredits.helpers({
    credits: function() {
        return Debts.find({ 'creditor': Meteor.userId()});
    }
});

/*** Template mainDebts ***/

Template.mainDebts.helpers({
    totalDebts: function() {
        return Debts.find({ debtor: Meteor.userId(), status:'waiting' }).count()
    },

    totalCredits: function() {
        return Debts.find({ debtor: Meteor.userId(), status:'waiting' }).count()
    }
});
