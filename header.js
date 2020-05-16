$(function(){
	
	$(window).scroll(function(){
		var winTop= $(window).scrollTop();
		if(winTop > 230){
			$("body").addClass("selec2");
		}else{
			$("body").removeClass("selec2");
		}
		
	});
	
});