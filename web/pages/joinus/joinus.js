$("#accordion>.panel>.panel-heading").each(function(k,v){
//	console.log($(this))
	var that = $(this);
	
	$(this).click(function(){

		if($(this).siblings().hasClass("in")){
			$(this).find("img").attr("src","img/展开.png");
			$(this).parent(".panel").siblings().children(".panel-heading").find("img").attr("src","img/展开.png");
			$(this).removeClass("bg");
			$(this).find("span").css("color","#666");
			$(this).parent(".panel").siblings().children(".panel-heading").find("span").css("color","#666");
			
		}else{
			$(this).find("span").css("color","#fff");
			$(this).addClass("bg");
			$(this).parent(".panel").siblings().children(".panel-heading").find("span").css("color","#666");
			$(this).parent().siblings(".panel").children(".panel-heading").removeClass("bg")	
			$(this).find("img").attr("src","img/收起.png");
			$(this).parent(".panel").siblings().children(".panel-heading").find("img").attr("src","img/展开.png");		
		}	
		var id = $(this).find("a").attr("href");
		$(id).collapse('toggle');		
		$(this).parent(".panel").siblings().children(".collapse").removeClass("in");	
	})	
})


//$(".apply").click(function(){
//	console.log(222)
//	alert("请以具体的招聘职位名称（如：Java开发工程师）为主题，将简历投递至 rose@ofaai.com邮箱中！")
//})
