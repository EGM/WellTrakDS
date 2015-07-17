$(document).ready(function(){
	
	var egm = new EGM();
	
	/* BEGIN: Page widget initializations */
	//Initialize date to today's date
	$("#visit-date").val(egm.dateToSqlDateString(new Date()));
	//Initialize well list
	$("#visit-well").selectmenu();
	/* END: Page widget initializations */
	
	/* BEGIN: Create data for testing */
	$("#visit-well").append(new Option('Foo', '1'));
	$("#visit-well").append(new Option('Bar', '2'));
	//refresh and force rebuild 
	$("#visit-well").selectmenu('refresh', true);
	/* END: Create data for testing */
	
	/* BEGIN: Page widget event handlers */
	//Changed to different well
	$("#visit-well").change(function(){
		var opt=$("#visit-well option:selected");
		if(opt.val()==0){
			//Create new well
			var newWell = prompt("Name of new well?");
			if(newWell!=null){
				var wellList = $("#visit-well");
				var options = wellList.prop('options');
				console.log(options.length);
				wellList.append(new Option(newWell, options.length-1, true, true));
				wellList.selectmenu('refresh', true);
				alert("Creating new well "+newWell);
				wellList.change();
			} else {
				alert("Cancelled");
			}
		} else if(opt.val()>=1){
			//Move to well visit(s)
			alert("Well=["+opt.val()+"] "+opt.text());
		}
	});
	
	//Changed to different date
	$("#visit-date").change(function(){
		if($(this).val()==""){
			$("#visit-date").val(egm.dateToSqlDateString(new Date()));
		}
		alert("Changed to "+$(this).val());
	});
	
	//Footer navbar buttons
	//Save
	$("#index-save").click(function(){
		alert("Saving visit.");
	});
	
	//Delete
	$("#index-delete").click(function(){
		if(confirm("Are you sure you want to delete?") == true){
			alert("Deleted visit.");
		} else {
			alert("Canceled.");
		}
	});
	
	//Move to first visit
	$("#index-first").click(function(){
		alert("Moving to first.");
	});
		
	//Move to previous visit
	$("#index-previous").click(function(){
		alert("Moving to previous.");
	});

	//Move to next visit
	$("#index-next").click(function(){
		alert("Moving to next.");
	});

	//Move to last visit
	$("#index-last").click(function(){
		alert("Moving to last.");
	});
	/* END: Page widget event handlers */

});
