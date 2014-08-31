window.APP = window.APP || {};

window.APP.chat = (function(app, $) {
  'use strict';

  if (app.currentUser.Id == -1) {
    app.instance.navigate('views/login/login.html');
  }

  var updateSendButton = function () {
    $('#sendButton').data('kendoMobileButton').enable($('#messageTextBox').val().length);
  }

  var show = function (e) {
    $('#chatLog').data('kendoMobileListView').refresh();
    updateSendButton();

    $('#messageTextBox').keyup(function () {
      updateSendButton();
    });
  };

  app.models.chat = {
    title: 'Chat',
    firebase: new kendo.data.DataSource({
      type: 'firebase',
      transport: {
        firebase: {
          url: app.firebaseUrl + 'logs'
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
    send: function () {
      app.everlive.Users.currentUser()
      .then(function (data) {
        var msg = {};
        msg.userId = app.currentUser.Id;
        msg.message = $('#messageTextBox').val();
        app.models.chat.firebase.add(msg);
        $('#messageTextBox').val('');
        updateSendButton();
      });
    },
    sendButtonEnabled: function () {
      return $("#messageTextBox").val().length !== 0;
    }
  };

  return {
    show: show
  };

}(window.APP, window.jQuery));