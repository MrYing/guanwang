// $("#accordion .panel .panel-heading").each(function(k,v){
// //	console.log($(this))
// 	var that = $(this);
// 	console.log(k)
// 	console.log(v)
// 	$(this).click(function(){
// 		console.log(222)
// 		if($(this).siblings().hasClass("in")){
// 			$(this).find("img").attr("src","img/展开.png");
// 			$(this).parent(".panel").siblings().children(".panel-heading").find("img").attr("src","img/展开.png");
// 			$(this).removeClass("bg");
// 			$(this).find("span").css("color","#666");
// 			$(this).parent(".panel").siblings().children(".panel-heading").find("span").css("color","#666");
// 			
// 		}else{
// 			$(this).find("span").css("color","#fff");
// 			$(this).addClass("bg");
// 			$(this).parent(".panel").siblings().children(".panel-heading").find("span").css("color","#666");
// 			$(this).parent().siblings(".panel").children(".panel-heading").removeClass("bg")	
// 			$(this).find("img").attr("src","img/收起.png");
// 			$(this).parent(".panel").siblings().children(".panel-heading").find("img").attr("src","img/展开.png");		
// 		}	
// 		var id = $(this).find("a").attr("href");
// 		$(id).collapse('toggle');		
// 		$(this).parent(".panel").siblings().children(".collapse").removeClass("in");	
// 	})	
// })

//$(".apply").click(function(){
//	console.log(222)
//	alert("请以具体的招聘职位名称（如：Java开发工程师）为主题，将简历投递至 rose@ofaai.com邮箱中！")
//})
var jobs = [
// 	{
// 		'position':'Java开发工程师',
// 		'classify':'职位类别',
// 		'add':'北京',
// 		'source':'社会招聘',
// 		'id':'collapseOne',
// 		'duty':[
// 			{
// 				'list':'参与奥法软件项目实施，根据需求说明书及原型，给出最优的解决方案，进行数据库设计、业务逻辑实现、RESTful接口实现等开发工作，保障项目交付。'
// 			},
// 			{
// 				'list':'参与奥法软件产品设计与开发，为现有软件产品增加有竞争力的功能,全面地考虑产品的性能、易用性、可扩展性，提高软件产品竞争力。'
// 			}
// 		],
// 		'requirement':[
// 			{
// 				'list':'热爱编程，对软件技术具有好奇心；'
// 			},
// 			{
// 				'list':'熟悉JAVA语言，具备1年以上的基于Java语言的软件系统开发经验；'
// 			},
// 			{
// 				'list':'熟悉MySQL、Oracle等关系型数据库，有数据库基本应用能力；'
// 			},
// 			{
// 				'list':'熟悉web界面开发流程，熟练运用HTML、JAVASCRIPT、CSS技术；'
// 			},
// 			{
// 				'list':'熟悉Eclipse、Tomcat、JDK运行环境的配置；'
// 			},
// 			{
// 				'list':'了解人工智能领域；'
// 			},
// 			{
// 				'list':'具有良好的沟通能力、团队配合精神，能够适应一定强度的工作压力。'
// 			}
// 		]
// 		
// 	},
	{
		'position':'总经理商务助理',
		'classify':'总经理商务助理',
		'add':'北京',
		'source':'社会招聘',
		'id':'collapseTwo',
		'duty':[
			{
				'list':'负责协助总经理与对外部门建立良好的合作伙伴关系，做好公司来宾的接待。'
			},
			{
				'list':'做好各类办公会议和重要活动的组织工作，负责会议记录，起草发布。'
			},
			{
				'list':'.整理行业、公司相关的政府事务的文案及申报,与相关政府管理机构的外联。'
			},
			{
				'list':'负责企业内外的公文处理，来访适宜，及时处理，汇报。'
			},
			{
				'list':'能灵活妥善的应对各种突发事件，完成总经理交办的其他工作任务。'
			}
		],
		'requirement':[
			{
				'list':'形象气质佳，本科以上学历，熟练使用办公软件，有较强的文字功底。'
			},
			{
				'list':'做事踏实，细心，具有极强的责任心和敬业精神。'
			},
			{
				'list':'能承受较大的工作压力，具备解决复杂问题能力，独立工作能力和极强的执行力。'
			},
			{
				'list':'能及时，准确的完成本职工作及领导交给其他工作。'
			}
		]
		
	},
	{
		'position':'产品经理',
		'classify':'产品经理',
		'add':'北京',
		'source':'社会招聘',
		'id':'collapseThree',
		'duty':[
			{
				'list':'负责需求收集，分析竞争对手动态和市场动态。'
			},
			{
				'list':'可对产品需求、交互方式提出创新型的想法，能够结合具体应用场景设计方案。'
			},
			{
				'list':'负责产品界面和流程原型设计，编写相关产品文档。'
			},
			{
				'list':' 具备项目管理能力，规划产品发展路线。'
			},
			{
				'list':'跟进产品设计和研发过程，完成对产品使用数据的分析。'
			}
		],
		'requirement':[
			{
				'list':' 本科及以上学历，计算机相关专业优先。'
			},
			{
				'list':'有3年以上互联网产品，TO B 项目0-1相关工作经验。'
			},
			{
				'list':' 熟悉互联网产品，了解互联网产品研发过程，熟练掌握需求调研和分析技能，熟练掌握功能规格文档撰写知识和技能。'
			},
			{
				'list':'有良好的数据分析能力，有政府、教育、车载、互联网类产品经验者优先。'
			},
			{
				'list':' 对智能客服系统有深刻理解和自己的见解的优先。'
			}
		]
		
	},
	{
		'position':'中级JAVA开发工程师',
		'classify':'中级JAVA开发工程师',
		'add':'北京',
		'source':'社会招聘',
		'id':'collapseFour',
		'duty':[
			{
				'list':'负责公司产品的需求分析与产品规划。'
			},
			{
				'list':'负责公司核心系统的优化与升级。'
			},
			{
				'list':'负责公司的软件产品设计、开发和项目管理。'
			},
			{
				'list':'负责项目的需求分析、概要设计、详细设计，技术文档的编写。'
			},
			{
				'list':'负责解决开发中的技术问题。'
			}
		],
		'requirement':[
			{
				'list':' 大学本科及以上学历，计算机相关专业，至少2年以上工作经验。'
			},
			{
				'list':'非外包公司工作经验。'
			},
			{
				'list':' 做过分布式开发项目，实际操作NoSQL：redis，mongoDB，和一些分步式框架经验：RPC，Restful，SpringCloud，Dubbo；至少包含以上两点。'
			},
			{
				'list':'熟悉Unix/Linux操作系统。'
			},
			{
				'list':' 良好的沟通能力和团队合作精神。'
			}
		]
		
	},
	
];
