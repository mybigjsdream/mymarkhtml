if (Meteor.isClient) {
    Session.setDefault('text', '');

    Template.output.helpers({
        counter: function () {
            return marked(Session.get('text'));
        }
    });

    Template.input.events({
        'input textarea': function(e, t) {
            e.preventDefault();
            Session.set('text', t.$('[name=textarea]').val());
            var $textarea = $(e.target).find('[name=textarea]');
            console.log(t.$('[name=textarea]'));
            console.log($(e.target).find('[name=textarea]').context.scrollHeight);
            console.log($(e.target).find('[name=textarea]').context.clientHeight);
            if ($textarea.context.scrollHeight > $textarea.context.clientHeight) {
                t.$('[name=textarea]').height($(e.target).find('[name=textarea]').context.scrollHeight);
            }
        },
    });

}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
