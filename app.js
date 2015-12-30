if (Meteor.isClient) {
    Session.setDefault('text', '');

    Template.output.helpers({
        counter: function () {
            return marked(Session.get('text'));
        }
    });

    //var textarea_handle = function(e){
    //    console.log('ssss');
    //e.preventDefault();
    //Session.set('text', t.$('[name=textarea]').val());
    //var text =  $(e.target).find('[class=textarea]').val();
    //console.log(text);
    //Session.set('text', text);
    //};

    Template.input.events({
        'input textarea': function(e, t) {
            e.preventDefault();
            Session.set('text', t.$('[name=textarea]').val());
            //console.log($(e.target).find('[name=textarea]'));
            console.log(t.$('[name=textarea]'));
            //console.log($(e.target).find('[name=textarea]').val());
            console.log($(e.target).find('[name=textarea]').context.scrollHeight);
            t.$('[name=textarea]').height(100);
            //$(e.target).find('[name=textarea]').height(100);
            var tt = $(e.target).find('[name=hahah]').val();
            //console.log($ttt.val('hahasds'));
            //tt = 'dengjing';
        },
    });

}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
