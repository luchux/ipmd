Template.myCredits.helpers({
   credits: function (){
     return Debts.find({creditor: Meteor.userId()});
   }
});