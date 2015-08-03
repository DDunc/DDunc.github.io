$(document).ready(function(){
	var imgsWide = ["bacon", "brunch", "chai", "cocoa", "pinecones", "yarn", "cupcakes", "nuts", "photobooth"];
	var picAdder = function(pic){
		$("<img>").attr("src", "img/" + pic + ".jpg").attr("title", pic).attr("alt", pic + " picture").addClass("galleryimg").appendTo(".gallery");
	}
	imgsWide.forEach(picAdder);
	$("img.blogimg1").clone().addClass("navimg").appendTo("nav");
	$(".latestblog1").clone().text("Latest Post: " + $(".latestblog1").text()).addClass("lasttitle").appendTo("nav");

	$("#bloglink").on("click", function(){
		 $(".gallery").fadeOut(1500)
		 	$(".blog").hide().removeClass("inactive").fadeIn(1500);
		 })
	$("#homelink").on("click", function(){
		 $(".blog").fadeOut(1500).addClass("inactive");
		 $(".gallery").hide().removeClass("inactive").fadeIn(1500);
	})
})