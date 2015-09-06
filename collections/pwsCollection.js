var PwsCollection = Backbone.Collection.extend({
	model: PwsModel,
	sampleContent: function(){
		this.add(new PwsModel({name: "City"}));
		this.add(new PwsModel({name: "Subdivision"}));
		this.add(new PwsModel({name: "Town"}));
		this.add(new PwsModel({name: "Trailer Park"}));
	}
});
