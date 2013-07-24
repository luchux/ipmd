if (Debts.find({}).count() === 0 && Meteor.users.find({}).count() > 1){
    now = new Date();
    user1 = Meteor.users.find({}).fetch()[0];
    user2 = Meteor.users.find({}).fetch()[1];

    Debts.insert({'debtor':user1._id, 'creditor':user2._id, 'amount':345, 'date':now, 'state':'waiting'});
    Debts.insert({'debtor':user1._id, 'creditor':user2._id, 'amount':40, 'date':now, 'state':'waiting'});
}

