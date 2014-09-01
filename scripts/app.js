window.APP = (function (win) {
  'use strict';

  document.addEventListener('deviceready', function () {  
    navigator.splashscreen.hide();
    win.APP.instance = new kendo.mobile.Application(document.body, {
      skin: 'flat',
      initial: 'views/login/login.html'
    });
  }, false);

  var el = new Everlive('jxlpND69mEYBcOt7');
  var emptyGuid = '00000000-0000-0000-0000-000000000000';
  var firebaseRef = 'https://kendochat.firebaseio.com/';
  var usersOnlineRef = 'user-names-online';

  var AppHelper = {
    resolveProfilePictureUrl: function (id) {
      if (id && id !== emptyGuid) {
        return el.Files.getDownloadUrl(id);
      } else {
        // TODO: return an alternative
      }
    },
    getUserById: function (id) {
      var result = $.grep(win.APP.users, function (e) { return e.Id == id; });
      if (result.length === 0) return { Id: -1, PictureUrl: '' };
      return result[0];
    },
    logout: function () {
      win.APP.currentUser = { Id: -1 };
      win.APP.users = new kendo.data.ObservableArray([{Id: -1, DisplayName: 'Bob Smith', Picture: '00000000-0000-0000-0000-000000000000', PictureUrl: '', Email: 'foo@bar.com'}]);
      return el.Users.logout();
    }
  };

  return {
    currentUser: { Id: -1 },
    emptyGuid: emptyGuid,
    firebaseRef: firebaseRef,
    usersOnlineRef: usersOnlineRef,
    helper: AppHelper,
    models: {},
    everlive: el,
    users: new kendo.data.ObservableArray([{Id: -1, DisplayName: 'Bob Smith', Picture: '00000000-0000-0000-0000-000000000000', PictureUrl: '', Email: 'foo@bar.com'}]),
  };

}(window));