$(document).ready(function(){
		$("button").on("click", function(e){
			e.preventDefault();
		window.location = $(this).attr("data");
		});

});



