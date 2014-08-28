window.APP = window.APP || {};

window.APP.chat = (function(app, $) {
  'use strict';

  console.log(app.currentUser);

  if (app.currentUser.Id == -1) {
    app.instance.navigate('views/login/login.html');
  }

  var show = function (e) {
    $('#chatLog').data('kendoMobileListView').refresh();
  };

  app.models.chat = {
    title: 'Chat',
    firebase: new kendo.data.DataSource({
      type: 'firebase',
      transport: {
        firebase: {
          url: 'https://kendochat.firebaseio.com/logs'
        }
      },
      schema: {
        model: {
          id: 'id',
          fields: {
            'userId': { type: 'string' },
            'message': { type: 'string' }
          }
        }
      },
      autoSync: true
    }),
    send: function() {
      app.everlive.Users.currentUser()
      .then(function (data) {
        var msg = {};
        msg.userId = app.currentUser.Id;
        msg.message = $('#messageTextBox').val();
        app.models.chat.firebase.add(msg);
        $('#messageTextBox').val('');
      });
    }
  };

  return {
    show: show
  };

}(window.APP, window.jQuery));