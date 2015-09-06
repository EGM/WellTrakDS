$(document).ready(function() {
	var NOT_FOUND = "Item Not Found";
	
	QUnit.test( "Moment.js", function( assert ) {
		assert.equal(
			moment("2015-07-18", "YYYY-MM-DD").format("YYYYMMDD"), 
			"20150718",
			"Input date as SQL date format.");
		assert.equal(
			moment("20150718", "YYYYMMDD").format("YYYY-MM-DD"), 
			"2015-07-18",
			"Output date as SQL date format.");
		assert.equal(
			moment("20150718", "YYYYMMDD").add(1, "days").format("YYYY-MM-DD"), 
			"2015-07-19",
			"Add one day from date.");
		assert.equal(
			moment("20150718", "YYYYMMDD").add(-1, "days").format("YYYY-MM-DD"), 
			"2015-07-17",
			"Subtract one day from date.");
		assert.equal(
			moment("201507"+18, "YYYYMMDD").format("YYYY-MM-DD"),
			"2015-07-18",
			"Assembled date.");
		assert.equal(
			moment("20150718", "YYYYMMDD").format("YYYY-MM-DD").slice(0,8),
			"2015-07-",
			"Sliced date.");
	});
	
	QUnit.test( "VisitsModel (Mock)", function( assert ) {
		visits = new VisitModel();
		assert.equal(
			visits.version, 
			1.0, 
			"Version");
		assert.equal(
			visits.data.length, 
			40, 
			"Length");
		assert.equal(
			visits.getAll().length, 
			40, 
			"getAll()");
		assert.equal(
			visits.countAll(), 
			40, 
			"countAll()");
		assert.equal(
			visits.data[1].date, 
			"2015-07-02", 
			"[item].date");
		assert.equal(
			visits.getAll()[1].date, 
			"2015-07-02", 
			"getAll()[item].date");
		assert.equal(
			visits.getItem(1).date, 
			"2015-07-02", 
			"getItem(item).date");
		assert.equal(
			visits.count(1),
			26,
			"count()");
		assert.equal(
			visits.getItemByDate(
			1,"2015-07-02").meter1, 
			11224.10,
			"getItemByDate().meter1");
		assert.throws(
			function(){visits.getItemByDate(
			1,"2015-07-31");}, 
			undefined,
			"getItemByDate() (not found error)");
		assert.equal(
			visits.getItemsBetweenDates(
			1, "2015-07-01", "2015-07-04")[1].date, 
			"2015-07-02", 
			"getItemsBetweenDates()[].date");
		assert.equal(
			visits.getItemsBetweenDates(
			1, "2015-07-01", "2015-07-04").length,
			4,
			"getItemsBetweenDates().length");
	});
	
		
	QUnit.test( "WellsModel (Mock)", function( assert ) {
		wells = new WellsModel();
		assert.equal( //1
			wells.version, 
			1.0, 
			"Version");
		assert.equal( //2
			wells.data.length, 
			5, 
			"Length");
		assert.equal( //3
			wells.getAll().length, 
			5, 
			"getAll()");
		assert.equal( //4
			wells.getItemById(3).name,
			"AOC",
			"getItemById()");
		assert.throws( //5
			function(){wells.getItemById(8);},
			Error(NOT_FOUND),
			"getItemById() (not found error)");
		assert.equal( //6
			wells.getItemByName("AOC").id,
			3,
			"getItemByName()");
		assert.throws( //7
			function(){wells.getItemByName("Not Found");},
			Error(NOT_FOUND),
			"getItemByName() (not found error)");
		assert.equal( //8
			wells.getNames(),
			"Chad's Well,Country Villa,AOC,Lake Gibson,Gibsonia",
			"getNames()");
	});
});
