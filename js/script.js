$(document).ready(function() {
 //
 // add your jQuery code here

$("button").addClass("makeRed");
//removes class makeRed, adds class makeBorder on mouseenter
	$("button").mouseenter(function(){
		$(this).removeClass("makeRed").addClass("makeBorder");
	});

	$("button").mouseleave(function(){
		$("button").removeClass("makeBorder").addClass("makeRed");
	});



});