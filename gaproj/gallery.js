$(document).ready(function(){
	var imgsWide = ["bacon", "brunch", "chai", "cocoa", "pinecones", "yarn", "cupcakes", "nuts", "photobooth"];
	var picAdder = function(pic){
		$("<img>").attr("src", "img/" + pic + ".jpg").attr("title", pic).attr("alt", pic + " picture").appendTo(".gallery");
	}
	imgsWide.forEach(picAdder);
	$(".contact").on("click", function(){
	alert("This is just an example layout and I have no idea if Sarah Hallacher is even a real person.");
	})
	$("#bloglink").on("click", function(){
		 $(".gallery").fadeOut(1500).addClass("inactive");
		 	$(".blog").hide().removeClass("inactive").fadeIn(1500);
		 })
	$("#homelink").on("click", function(){
		 $(".blog").fadeOut(1500).addClass("inactive");
		 $(".gallery").hide().removeClass("inactive").fadeIn(1500);
	})
});