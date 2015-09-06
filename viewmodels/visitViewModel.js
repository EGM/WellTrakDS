$(document).ready(function(){
	/**
	* VisitViewModel Object
	*/
	function VisitViewModel(){
		var self = this;
		self.visitWellId = ko.observable(1);
		self.visitDate =   ko.observable(moment().format('YYYY-MM-DD'));
		self.flowMeter1 =  ko.observable(0);
		self.flowDaily1 =  ko.computed(function(){
			//TODO: function stub
			return self.flowMeter1()*1000; 
		});
		self.flowMeter2 =  ko.observable(0);
		self.flowDaily2 =  ko.computed(function(){
			//TODO: function stub
			return self.flowMeter2()*1000; 
		}, this);
		self.flowDailyTotal =  ko.computed(function(){
			return self.flowDaily1() + self.flowDaily2(); 
		});
		self.qualityCl =   ko.observable(0.0);
		self.qualityPh =   ko.observable(7.0);
		
		self.newName = ko.observable("update me");
	}
	
	ko.applyBindings(VisitViewModel());
	
	/**
	* User Interface Actions
	*/
	$('#visitWellAdd').click(function(){
		//TODO: Function stub
		var txt = this.text;
		console.log(txt + ".click()");
		console.log("Name length " + $('#newWellName').val().length);
//		toast(txt, 'short');
		if($('#newWellName').val().length < 1) {
			$('#addOk').prop("disabled", "disabled");
		}
	});

	$('.visit-footer').click(function(){
		//TODO: Function stub
		var txt = this.text;
		app.ShowPopup(txt);
		switch(txt) {
			case 'Save':
				//Do something...
				break;
			case 'Previous':
				var thisDay = $('#visitDate').val();
				var prevDay = moment(thisDay, "YYYY-MM-DD")
					.add(-1, 'day').format('YYYY-MM-DD');
				$('#visitDate').val(prevDay);
				$('#visitDate').trigger('change');
				break;
			case 'Next':
				var thisDay = $('#visitDate').val();
				var nextDay = moment(thisDay, "YYYY-MM-DD")
					.add(1, 'day').format('YYYY-MM-DD');
				$('#visitDate').val(nextDay);
				$('#visitDate').trigger('change');
				break;
			case 'Delete':
				//Handled by href and delete* functions below.
				break;
			default:
				break;
		}
	});

	$('#deleteOk').click(function(){
		//TODO: Function stub
		var txt = this.text;
		toast(txt, 'short');
	});

	$('#deleteCancel').click(function(){
		//TODO: Function stub
		var txt = this.text;
		toast(txt, 'short');
	});

	$('#toggleMenuRight').click(function(){
		const DATE = 4;
		var visitModel = new VisitModel();
		var visit;
		var well = $('#visitWellId').val();
		var strDate = $('#visitDate').val();
		var strYrMo = strDate.slice(0,8);
		var len = moment(strDate, 'YYYY-MM-DD').endOf('month').date();
		var foo = $('#ListVisitsViewUL').listview().empty();
		var bar = '<li data-role="list-divider"><h1>'
			+ moment(strDate, 'YYYY-MM-DD').format('MMMM, YYYY') 
			+ '</h1></li>';
		foo.append(bar);
		for (i = 1; i <= len; i++) {
			try {
				visit = visitModel.getItemByDate(well, strYrMo+(('0'+i).slice(-2)));
				bar  = '<li><a href="#VisitView" data-rel="close">'
					+ '  <div class="ui-grid-b-pnl">'
					+ '    <div class="ui-block-a">'
					+ '      <label>FM1:</label></div>'
					+ '    <div class="ui-block-b">'
					+ '      <input readonly="readonly"'
					+ '        value="' + visit.meter1 + '"/></div>'
					+ '    <div class="ui-block-a">'
					+ '      <label>FM2:</label></div>'
					+ '    <div class="ui-block-b">'
					+ '      <input readonly="readonly"'
					+ '        value="' + ((visit.meter2==undefined) ? '' : visit.meter2) + '"/></div>'
					+ '    <div class="ui-block-c">'
					+ '      <p class="month-day holo-blue-bright"> '
					+          ("0" + i).slice(-2) + ' </p></div>'
					+ '    <div class="ui-block-a">'
					+ '      <label>FLW:</label></div>'
					+ '    <div class="ui-block-b">'
					+ '      <input readonly="readonly"/></div>'
					+ '  </div>'
					+ '</a></li>';
				foo.append(bar).listview('refresh');
			} catch(e) {
				bar  = '<li><a href="#VisitView" data-rel="close">'
					+ '  <div class="ui-grid-b-pnl">'
					+ '    <div class="ui-block-a">'
					+ '      <label>FM1:</label></div>'
					+ '    <div class="ui-block-b">'
					+ '      <input readonly="readonly"/></div>'
					+ '    <div class="ui-block-a">'
					+ '      <label>FM2:</label></div>'
					+ '    <div class="ui-block-b">'
					+ '      <input readonly="readonly"/></div>'
					+ '    <div class="ui-block-c">'
					+ '      <p class="month-day holo-blue-bright"> ' + ("0" + i).slice(-2) + ' </p></div>'
					+ '    <div class="ui-block-a">'
					+ '      <label>FLW:</label></div>'
					+ '    <div class="ui-block-b">'
					+ '      <input readonly="readonly"/></div>'
					+ '  </div>'
					+ '</a></li>';
				foo.append(bar).listview('refresh');
			}
//			foo.append(bar).listview('refresh');
		}
		$('.ui-grid-b-pnl').click(function() {
			$('#ListVisitsView').panel('close');
			$('#visitDate').val(moment(strDate, 'YYYY-MM-DD')
				.date($(this).children().eq(DATE).text())
				.format('YYYY-MM-DD'));
			$('#visitDate').trigger('change');
			window.scrollTo(0,0);
		});
	});
	
	$('#newName').on('keydown', function(event) {
		console.log("Key pressed " + event.which);
		if($('#newName').val().length < 1) {
			$('#addOk').prop("disabled", "disabled");
			console.log("Disabled Ok");
		} else {
			$('#addOk').removeProp("disabled");
			console.log("Enabled Ok");
		}
		if(event.which == "13") {
			$('#AddWellView').attr('tabindex',-1).focus();
			if($('#newWellName').val().length > 0) {
				$('#addOk').click();
			} else {
				$('#addCancel').click();
			}
		}
	});
	
	$('#visitDate').bind('change', function() {
		var visitView = new VisitViewModel();
		var visitModel = new VisitModel();
		var visit;
		var well = $('#visitWellId').val();
		try {
			visit = visitModel.getItemByDate(well, $('#visitDate').val());
			$('#flowMeter1').val(visit.meter1);
			$('#flowMeter2').val(visit.meter2);
		} catch (e) {
			console.log(e.message);
			$('#flowMeter1').val('');
		}
	});
	
//	$(document).on('swipeleft', function(){
//		$('#toggleMenuRight').click();
//	});
	
	
	
});
