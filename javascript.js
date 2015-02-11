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
		$("#dropdown-panel").append("<h1>BILDER</h1><img src='http://animalia-life.com/data_images/cat/cat2.jpg'>");
		$("#dropdown-panel").css("background-color", "#C14FD8");
	});
	
	$("#dropdown-panel").mouseleave(function(){
		$("#dropdown-panel").slideUp(300);
	});
});