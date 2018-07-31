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

$('.animated').appear(function() {
	var element = $(this),
	animation = element.data('animation'),
	animationDelay = element.data('animation-delay');
	if ( animationDelay ) {

		setTimeout(function(){
			element.addClass( animation + " visible");
		}, animationDelay);

	} else {
		element.addClass( animation + " visible");
	}
	// console.log(element)
});