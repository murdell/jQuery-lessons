$(document).ready(function() { //this is the start of the (document).ready part - do not delete or alter


var newrow = [["Broccoli","Bulgaria","12","70","Veg"], ["Orange","Morocco","15","50","Fruit"]];
var newrow2 = 	["Orange","Morocco","15","50","Fruit"];
var newrow3 = ["Tangerine","Cyprus","12","25","Fruit"];


for (i = 0; i < newrow[i].length; i++) {	
	for (j = 0; j < 1; j++) {
		console.log("I am a th - "+newrow[i][j]);
	}	
	

	
		for (j = 1; j < newrow.length; j++) {
			console.log("I am a td - "+newrow[i][j]);
		}
}

)};		

//this code is not complete and dies not run, but it is a starter for 10