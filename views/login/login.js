(function(app) {

  app.models.login = {

    username: '',
    password: '',
    result: 'OK',
    login: function() {
      var that = this;
      var username = this.get('username').trim();
      var password = this.get('password').trim();

      app.everlive.Users.login(username, password,
        function (data) {
          app.everlive.Users.currentUser().then(function (data) {
            app.currentUser = data.result;
          });
          app.instance.navigate('views/chat/chat.html');
        },
        function (data) {
          that.set('result', data.message);
        }
      );
    }

  };

}(window.APP));