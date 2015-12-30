if (Meteor.isClient) {
    Session.setDefault('text', '');

    Template.output.helpers({
        counter: function () {
            return marked(Session.get('text'));
        }
    });

    Template.input.events({
        'keydown textarea': function(e, t) {
            Session.set('text', t.$('[name=textarea]').val());
            var $textarea = $(e.target).find('[name=textarea]');
            if ($textarea.context.scrollHeight > $textarea.context.clientHeight) {
                t.$('[name=textarea]').height($textarea.context.scrollHeight);
            }
            if (e.keyCode == 8) {
                console.log('!!');
            }
        },
    });

}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
