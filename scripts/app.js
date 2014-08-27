
(function () {

    // create an object to store the models for each view
    window.APP = {
      everlive: new Everlive('KIpTqrQhHSzEMBf1'),
      currentUser: undefined,
      models: {}
    };

    // this function is called by Cordova when the application is loaded by the device
    document.addEventListener('deviceready', function () {  
      
      // hide the splash screen as soon as the app is ready. otherwise
      // Cordova will wait 5 very long seconds to do it for you.
      navigator.splashscreen.hide();

      window.APP.instance = new kendo.mobile.Application(document.body, {
        
        // comment out the following line to get a UI which matches the look
        // and feel of the operating system
        skin: 'flat',

        // the application needs to know which view to load first
        initial: 'views/login/login.html'
      });

    }, false);


}());