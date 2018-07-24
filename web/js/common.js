function mouseWheel(){
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
}
//mouseWheel();
console.log( /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent));

if(/Android|webOS|iPhone|iPod/i.test(navigator.userAgent)){
	
//	$('body').bind('touchmove', function(e) { 
//	    e.preventdefault();               //禁用默认滚动行为，需要自己实现滚动
//	    alert($(this).scrollTop()); // 计算你的屏幕高度
//	    if($(this).scrollTop() < 260){
//			$("header").css("top","30px");
//      	$("header ul.nav > li > a").css("color","#666");
//      	$("header .container .navbar").css("background","white");
//      	$("header .container").removeClass("commonWidth");
//      }else{
//      	$("header").css("top","0");
//			$("header .container").addClass("commonWidth");
//      	$("header .container .navbar").css("background","white");
//      }
//	});
	window.addEventListener('onscroll', function() {
	    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
	    alert(scrollTop);
	})
}else{
	mouseWheel();
}
