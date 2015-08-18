$(document).ready(function(){
	console.log("hello, this thing on?");
	$(".navbar-brand").on("click", function(){
		$("#video-bg").fadeOut(1000);
		$(".jumbotron").fadeIn(1500);
		$(".row").fadeIn(1750);
		$("footer").fadeIn(1750);
		$("hr").fadeIn(1750);
		$("#video-bg").get(0).pause();
		//document.getElementById('video-bg').pause();
				//$("#video-bg").remove();
	})
	$(".jumboplay").on("click", function(){
		$(".jumbotron").fadeOut(1000);
		$(".row").fadeOut(1000);
		$("footer").fadeOut(1000);
		$("hr").fadeOut(1000);
		$("nav").fadeOut(1000);
		$("<video autoplay loop id='video-bg' src='img/reel.mp4' type='video/mp4'>").appendTo("body").fadeIn(1000);
		$("nav").fadeIn(5000);
	})
})