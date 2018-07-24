function mouseWheel(){
	$('body').mousewheel(function(event, delta) {
	    var dir = delta > 0 ? 'Up' : 'Down';
	    if (dir == 'Up') {
	        if($(window).scrollTop() < 260){
				$("header").css("top","30px");
	        	$("header .container").removeClass("commonWidth");
	        }
	    } else {
	        if($(window).scrollTop() > 160){
				$("header").css("top","0");
				$("header .container").addClass("commonWidth");     	
	        }
	    }		
	});
}

if(/Android|webOS|iPhone|iPod/i.test(navigator.userAgent)){
	$("header .container").addClass("mobileSty");
}else{
	mouseWheel();
}
