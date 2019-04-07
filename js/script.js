$(document).ready(function(){
	$(".fries-order").hide();

	$(".btn-add").click(function(){
		$(".fries-order").show();
	});

	$(".btn-remove").click(function(){
		$(".fries-order").hide();
	});
})