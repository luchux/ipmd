Template.groups.helpers({

});

//MONKEY ROUTER
Template.groups.events({
   'click .thumb': function(evt, tmpl){
        Session.set("groups",false);
        Session.set("peeps",true);
   }
});