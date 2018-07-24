$("#accordion>.panel>.panel-heading").each(function(k,v){
//	console.log($(this))
	var that = $(this);
	
	$(this).click(function(){
//		if($(this))
		$(this).parent().siblings(".panel").children(".panel-heading").removeClass("bg")
		
		console.log($(this).parent(".panel").siblings().children(""))
		$(this).addClass("bg");
//		console.log($(this).find("img").attr("src"))
		if($(this).find("img").attr("src") == "img/收起.png"){
			$(this).find("img").attr("src","img/展开.png")
		}else{
			$(this).find("img").attr("src","img/收起.png")
		}
		

	
		var id = $(this).find("a").attr("href");
		$(id).collapse('toggle');
		console.log(222)

	})
})


	$(".apply").click(function(){
		console.log(222)
		alert("请以具体的招聘职位名称（如：Java开发工程师）为主题，将简历投递至 rose@ofaai.com邮箱中！")
		
//		alert('<p style="font-size: 16px;color: #FF5F5F;margin-left: 40px;"></p>')
	})
