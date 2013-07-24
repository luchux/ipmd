//This helper represent debitors (my debitors, those people that owe me money, I am the creditor in the relationship)
Template.mainPeeps.helpers({
    debtors: function () {
        arr = Array()
        Debts.find({ 'creditor': Meteor.userId() }).map( function(debt) { arr.push(debt.debtor); } );

        return Meteor.users.find({ _id : { $in: arr } });
    },

    //This helper represent creditors (my creditors, those that I owe money to, I am the debtor in the relationship.)
    creditors: function () {
        arr = Array()
        Debts.find({ 'debtor': Meteor.userId() }).map( function(debt) { arr.push(debt.creditor); } );

        return Meteor.users.find({ _id : { $in: arr } });
    },
});

Template.mainPeeps.events({
    'click .debtor-creditor': function (evt, template) {
        console.log("click on");
        console.log(this);
        Session.set("debts",true);
        Session.set("peeps",false);
        Session.set("person",this._id)
    }
});