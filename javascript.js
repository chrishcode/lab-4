$(document).ready(function(){
	$("#hem").mouseenter(function(){
		$("#dropdown-panel").slideDown(300);
		$("#dropdown-panel").empty();
		$("#dropdown-panel").append("<h1>HEM</h1>");
		$("#dropdown-panel").css("background-color", "#D8514F");
	});
	
	$("#omoss").mouseenter(function(){
		$("#dropdown-panel").slideDown(300);
		$("#dropdown-panel").empty();
		$("#dropdown-panel").append("<h1>OM OSS</h1>");
		$("#dropdown-panel").css("background-color", "#4F7FD8");
	});
	
	$("#kontakt").mouseenter(function(){
		$("#dropdown-panel").slideDown(300);
		$("#dropdown-panel").empty();
		$("#dropdown-panel").append("<h1>KONTAKT</h1>");
		$("#dropdown-panel").css("background-color", "#4FD8AD");
	});
	
	$("#bilder").mouseenter(function(){
		$("#dropdown-panel").slideDown(300);
		$("#dropdown-panel").empty();
		$("#dropdown-panel").append("<h1>BILDER</h1>");
		$("#dropdown-panel").css("background-color", "#C14FD8");
	});
	
	$("#dropdown-panel").mouseleave(function(){
		$("#dropdown-panel").slideUp(300);
	});
	
	$("#start").fadeIn(3000);
	
	$(window).scroll(function() {
		if($(this).scrollTop() > 400) {
			$("#p1").fadeIn(1000);
		}
		
		if($(this).scrollTop() > 700) {
			$("#p2").fadeIn(1000);
		}
		
		if($(this).scrollTop() > 1150) {
			$("#p3").fadeIn(1000);
		}
		
	});
});