window.APP = window.APP || {};

window.APP.users = (function (win) {
  'use strict';

  var usersOnline = function () {
    return new kendo.data.DataSource({
      autoSync: true,
      schema: {
        model: {
          id: 'id',
          fields: {
            'name': { type: 'string' }
          }
        }
      },
      transport: {
        firebase: {
          url: app.firebaseRef + app.usersOnlineRef;
        }
      },
      type: 'firebase'
    })
  };

  return {
    usersOnline: usersOnline;
  };

}(window));