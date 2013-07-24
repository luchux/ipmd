Session.set("groups",true);

//MONKEY ROUTER
Template.router.helpers({
    peeps: function() {
        return Session.get("peeps");
    },
    groups: function () {
        return Session.get("groups");
    },
    debts: function () {
        return Session.get("debts");
    }
});