Template.myDebts.helpers({
   debts: function (user){
    if (typeof user.userId === 'undefined')
      return Debts.find({ debtor: Meteor.userId() });
    return Debts.find({ debtor: Meteor.userId(), creditor: user });
   }
});