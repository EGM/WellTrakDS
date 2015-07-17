/**
* EGM - Utility functions in JavaScript
* Author E.G.Mono
*/
function EGM() {

		/**
		* dateToSqlDateString(Date)
		* Returns date as String in SQL "yyyy-MM-dd" format
		*/
	 this.dateToSqlDateString = function(date) {
		var day = ("0" + date.getDate()).slice(-2);
		var month = ("0" + (date.getMonth() + 1)).slice(-2);
		var sqlDate = date.getFullYear()+"-"+(month)+"-"+(day) ;
		return sqlDate;
	}

}
