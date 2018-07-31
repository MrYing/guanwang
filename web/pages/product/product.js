//function hover(element) {
////	console.log(element.getAttribute("src").replace("img/default/",""))
//	var src = element.getAttribute("src").replace("img/default/","");
////	console.log(src)
//  element.setAttribute('src', 'img/hover/'+src);
//}
//function unhover(element) {
//	var src = element.getAttribute("src").replace("img/hover/","");
//	console.log(src)
//  element.setAttribute('src', 'img/default/'+src);
//}

$(".imgs img").each(function(key,v){
	$(this).mouseenter(function(){
		var src = $(this).attr("src").replace("img/default/","");
		// console.log(src)
		$(this).attr("src","img/hover/"+src);
	})
	$(this).mouseleave(function(){	
		var src = $(this).attr("src").replace("img/hover/","");
		$(this).attr("src","img/default/"+src);
	})
})
$(".imgs2 img").each(function(key,v){
	$(this).mouseenter(function(){
		var src = $(this).attr("src").replace("img/","");
		$(this).attr("src","img/hover/"+src);
	})
	$(this).mouseleave(function(){	
		var src = $(this).attr("src").replace("img/hover/","");
		$(this).attr("src","img/"+src);
	})
})
