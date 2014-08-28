window.APP = window.APP || {};

window.APP.contacts = (function(app, $) {
  'use strict';

  if (app.currentUser.Id == -1) {
    app.instance.navigate('views/login/login.html');
  }

  var show = function (e) {
    // TODO: show implementation

    console.log(app.users);
  };

  app.models.contacts = {
    title: 'Contacts',
    users: app.users
  };

  return {
    show: show
  };

}(window.APP, window.jQuery));