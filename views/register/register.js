(function(app, $) {
  'use strict';

  app.models.register = {
    email: '',
    password: '',
    message: '',
    displayName: '',
    valid: true,
    failure: false,
    register: function() {
      this.set('valid', $('#register').data('kendoValidator').validate());

      var valid = this.get('valid');
      if (valid) {
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
            that.set('failure', true);
          }
        );
      }
    }
  };

}(window.APP, window.jQuery));