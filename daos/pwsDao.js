function PwsDao() {
	var self = this;
	
	//Create or open a database.   
	var db = db || app.OpenDatabase( "WellTrakData" );   

	//Create a table (if it does not exist already).   
	db.ExecuteSql( "CREATE TABLE IF NOT EXISTS pws_table " +   
		"(id INTEGER PRIMARY KEY," +
		" name TEXT NOT NULL UNIQUE)" );  

    //Add pwsModel (with error handler).   
	self.add = function( pwsModel ) {
    	db.ExecuteSql( "INSERT INTO pws_table (name)" +    
        	" VALUES (?)", [pwsModel.get("name")], null, OnError );   
	};
	
	//Remove pwsModel (by name).
	self.remove = function( name ) {
		db.ExecuteSql( "DELETE FROM pws_table WHERE name = " + name );   
	};
	
	//Get all pws names.
	self.getAll = function() {
		pwsCollection = new PwsCollection();
		
		//Get all the table rows.   
    db.ExecuteSql( "select * from test_table;", [], OnResult ); 
		pwsCollection.add(new PwsModel({name: "City"}));
	};
	
}


    

//Called when user touches our 'Delete' button.   
function btnDelete_OnTouch()   
{       
   //Delete this database.   
   db.Delete();   

   //Get all the table rows.   
   DisplayAllRows();  
}   

//function to display all records  
function DisplayAllRows()  
{  
    txt.SetText("");   
       
     
}  

//Callback to show query results in debug.   
function OnResult( results )    
{   
    var s = "";   
    var len = results.rows.length;   
    for(var i = 0; i < len; i++ )    
    {   
        var item = results.rows.item(i)   
        s += item.id + ", " + item.data + ", " + item.data_num + "\n";    
    }   
    txt.SetText( s );   
}   

//Callback to show errors.   
function OnError( msg )    
{   
    app.Alert( "Error: " + msg );   
    console.log( "Error: " + msg );   
}   


