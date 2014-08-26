(function(app) {

  app.models.login = {

    username: '',
    password: '',
    result: 'all good',
    login: function() {
      var that = this;
      var username = this.get('username').trim();
      var password = this.get('password').trim();

      app.everlive.Users.login(username, password,
        function(data) {
          that.set('result', data);
        },
        function(data) {
          that.set('result', data.message);
        }
      );
    }

  };

}(window.APP));