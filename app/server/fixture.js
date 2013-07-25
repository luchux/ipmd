if (Debts.find({}).count() === 0 && Meteor.users.find({}).count() > 1){
    now = new Date();
    user1 = Meteor.users.find({}).fetch()[0];
    user2 = Meteor.users.find({}).fetch()[1];

    Debts.insert({'debtor':user1._id, 'creditor':user2._id, 'amount':345, 'date':now, 'state':'waiting', 'tags': ['beer','pingpong','dinner']});
    Debts.insert({'debtor':user1._id, 'creditor':user2._id, 'amount':40, 'date':now, 'state':'waiting', 'tags': ['trolas', 'beer'] });
}

if (Groups.find({}).count() === 0 && Meteor.users.find({}).count() > 2){
    user1 = Meteor.users.find({}).fetch()[0];
    user2 = Meteor.users.find({}).fetch()[1];
    myself = Meteor.users.find({}).fetch()[2];

    Groups.insert({name: 'lopibe', userId: myself._id, listUsers:[user1, user2] });

    Groups.insert({ name: 'family', userId: user1._id, listUsers: [myself] });
}