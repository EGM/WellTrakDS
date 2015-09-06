$(document).ready(function() {
	i18n.init(function(err, t) {
		$("body").i18n();
	});
	var pwss = new PwsCollection();
	console.log('Pre fetch='+pwss.size());
	app.ShowPopup('Pre fetch='+pwss.size());
	pwss.fetch({ 
    url: "../pwsData.json", 
    success: function() {
          console.log("JSON file load was successful", pwss);
      },
    error: function(){
       console.log('There was some error in loading and processing the JSON file');
    }
  });
	console.log('Post fetch='+pwss.size());
	app.ShowPopup('Post fetch='+pwss.size());
});
