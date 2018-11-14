$(document).ready(function() { //this is the start of the (document).ready part - do not delete or alter


var newrow = [
	["Broccoli","Bulgaria","12","70","Veg"],
	["Orange","Morocco","15","50","Fruit"],
	["Tangerine","Cyprus","12","25","Fruit"]
];
var i;
var j =0 ;
var table = $('#food_list');
var head;
var col;

for (i = 0; i < newrow.length; i++) {
	
	for (j = 0; j < newrow[i].length; j++) {
    	if (j==0) {

    	    head=(newrow[i][0]); 
    	    table.append(head+ " - "+ [i] + [j]); 
    	}
		else {
			for (j = 1; j < newrow[i].length; j++) {
		    col=(newrow[i][j]); 
			$("table").append(col+ " - ", [i] + [j]);  
			}
		}
    }
}
	
	
}); //this is the end of the (document).ready part - do not delete or alter
