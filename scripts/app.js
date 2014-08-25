
(function () {

    // store a reference to the application object that will be created
    // later on so that we can use it if need be
    var app,
        el = new Everlive('KIpTqrQhHSzEMBf1');

    // create an object to store the models for each view
    window.APP = {
      models: {
        login: {
          username: '',
          password: '',
          result: 'all good',
          login: function() {
            var that = this;
            var username = this.get('username').trim();
            var password = this.get('password').trim();

            el.Users.login(username, password,
              function(data) {
                that.set('result', data);
              },
              function(data) {
                that.set('result', data.message);
              }
            );
          }
        },
        chat: {
          title: 'Chat',
          firebase: new kendo.data.DataSource({
            type: 'firebase',
            transport: {
              firebase: {
                url: 'https://kendochat.firebaseio.com/logs'
              }
            },
            schema: {
              model: {
                id: 'id'
              }
            },
            autoSync: true
          }),
          message: 'No',
          send: function() {
            var ds = this.get('firebase');
            ds.add({ message: this.get('message') });
          }
        },
        contacts: {
          title: 'Contacts',
          ds: new kendo.data.DataSource({
            data: [{ id: 1, name: 'Bob' }, { id: 2, name: 'Mary' }, { id: 3, name: 'John' }]
          }),
          alert: function(e) {
            alert(e.data.name);
          }
        }
      }
    };

    // this function is called by Cordova when the application is loaded by the device
    document.addEventListener('deviceready', function () {  
      
      // hide the splash screen as soon as the app is ready. otherwise
      // Cordova will wait 5 very long seconds to do it for you.
      navigator.splashscreen.hide();

      app = new kendo.mobile.Application(document.body, {
        
        // comment out the following line to get a UI which matches the look
        // and feel of the operating system
        skin: 'flat',

        // the application needs to know which view to load first
        initial: 'views/login.html'
      });

    }, false);


}());