App.onLaunch = function(options) {
  var javascriptFiles = [
    `${options.BASEURL}js/resourceloader.js`,
    `${options.BASEURL}js/presenter.js`
  ];

  evaluateScripts(javascriptFiles, function(success) {
    if (success) {
      // resourceLoader = new ResourceLoader(options.BASEURL);

      // var index = resourceLoader.loadResource(`${options.BASEURL}templates/bingehub-proto.xml.js`,
      // function(resource) {
      //     var doc = Presenter.makeDocument(resource);
      //     doc.addEventListener("select", Presenter.load.bind(Presenter));
      //     navigationDocument.pushDocument(doc);
      // });
      var alert = createAlert("Hey this worked", "Congrats on loading!");
      navigationDocument.presentModal(alert);
    } else {
      /*
      Be sure to handle error cases in your code. You should present a readable, and friendly
      error message to the user in an alert dialog.

      See alertDialog.xml.js template for details.
      */
      var alert = createAlert("Evaluate Scripts Error", "There was an error attempting to evaluate the external JavaScript files.\n\n Please check your network connection and try again later.");
      navigationDocument.presentModal(alert);

      throw ("Playback Example: unable to evaluate scripts.");
    }
  });
}

/**
 * This convenience function returns an alert template, which can be used to present errors to the user.
 */
var createAlert = function(title, description) {

  var alertString = `<?xml version="1.0" encoding="UTF-8" ?>
      <document>
        <alertTemplate>
          <title>${title}</title>
          <description>${description}</description>
        </alertTemplate>
      </document>`

  var parser = new DOMParser();
  var alertDoc = parser.parseFromString(alertString, "application/xml");

  return alertDoc
}
