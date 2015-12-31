if (Meteor.isClient) {
    Session.setDefault('text', '');

    Template.output.helpers({
        counter: function () {
            return marked(Session.get('text'));
        }
    });

    Template.input.events({
        'keyup .textarea': function(e, t) {
            //Session.set('text', t.$('[name=textarea]').val());
            //console.log(t.$('[name=textarea]'));
            var $textarea = $(e.target).find('[name=textarea]');
            console.log($textarea);
            Session.set('text', $textarea.context.innerText);
        },
    });

}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
