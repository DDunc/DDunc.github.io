$(document).ready(function(){
		$("#fontchanger").on("click", function(e){
			e.preventDefault();
			$("body").toggleClass("font1");
			$("body").toggleClass("font2");
		});
		$(".mainbut").on("click", function(e){
			e.preventDefault();
			window.location = $(this).attr("data");
		});
});



