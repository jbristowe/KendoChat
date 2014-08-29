window.APP = window.APP || {};

window.APP.login = (function(app, $, kendo) {
  'use strict';

  var show = function (e) {
//    $('#username').val('');
//    $('#password').val('');
    app.helper.logout();
  }

  app.models.login = {
    username: 'john@bristowe.com',
    password: '123',
    login: function () {
      var that = this;
      var username = this.get('username').trim();
      var password = this.get('password').trim();

      app.everlive.Users.login(username, password,
        function (data) {
          app.everlive.Users.currentUser().then(function (data) {
            app.currentUser = data.result;
            app.everlive.Users.get().then(function (data) {
              for (var i = 0; i < data.result.length; i++) {
                if (data.result[i].Picture === undefined) {
                  data.result[i].PictureUrl = '';
                } else {
                  data.result[i].PictureUrl = APP.helper.resolveProfilePictureUrl(data.result[i].Picture);
                }
              }
              app.users = new kendo.data.ObservableArray(data.result);
              console.log(app.users);
            });
            app.instance.navigate('views/chat/chat.html');
          });
        },
        function (data) {
          // TODO: save token?
        }
      );
    }
  };

  return {
    show: show
  };

}(window.APP, window.jQuery, window.kendo));