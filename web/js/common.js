$('body').mousewheel(function(event, delta) {
    var dir = delta > 0 ? 'Up' : 'Down';
    if (dir == 'Up') {
        if($(window).scrollTop() < 260){
			$("header").css("top","30px");
        	$("header ul.nav > li > a").css("color","#666");
        	$("header .container .navbar").css("background","white");
        	$("header .container").removeClass("commonWidth");
        }
    } else {
        if($(window).scrollTop() > 160){
			$("header").css("top","0");
			$("header .container").addClass("commonWidth");
        	$("header .container .navbar").css("background","white");
        	
        }
    }		
});