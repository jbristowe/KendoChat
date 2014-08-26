(function(app) {

  app.models.chat = {
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
  };

}(window.APP));