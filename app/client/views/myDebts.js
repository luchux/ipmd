Template.myDebts.helpers({
   debts: function (){
     return Debts.find({debtor: Meteor.userId()});
   }
});