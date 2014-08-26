(function(app) {

  app.models.register = {
    email: '',
    password: '',
    message: '',
    register: function() {
      var that = this,
          email = this.get('email'),
          password = this.get('password');
      app.everlive.Users.register(email, password, { email: email },
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