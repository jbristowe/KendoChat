(function(app) {

  app.models.register = {
    email: '',
    password: '',
    message: '',
    displayName: '',
    register: function() {

      var that = this,
          email = this.get('email'),
          password = this.get('password'),
          displayName = this.get('displayName');

      app.everlive.Users.register(email, password, { Email: email, DisplayName: displayName },
        function() {
          app.instance.navigate('views/chat/chat.html');
        },
        function(error) {
          that.set('message', error.message);
        }
      );
    }
  };

}(window.APP));