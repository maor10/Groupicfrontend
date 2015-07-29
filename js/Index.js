$(document).ready(function() {
	$(".img-responsive").click(function() {
		$(this).parent().parent().attr("class", "resize");
		$(this).animate({
			width : "600px",
			height : "500px"
		}, 2000);
		$(".blackout").css({
			width : "100%",
			height : "100%",
			background : "black"
		});
		$(".blackout").animate({
			opacity : "0.7"
		}, 500);
	});
});	
