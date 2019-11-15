$(document).ready(function() {

    $("tr:odd").addClass("odd"); 
    $("tr:even").addClass("even"); 

    $("th").click(function(){
        //a bit like initialising values get rid of classes set by jQuery
        $("td").removeClass("selected").removeClass("not-selected");
        $(this).siblings().addClass("selected");     
        $("td:not(.selected)").addClass("not-selected");
     

    });
});