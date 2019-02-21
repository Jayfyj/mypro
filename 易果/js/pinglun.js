//初始化，显示商品详情
$("#intro").css("background","green");
$("#intro").css("color","white");

//点击商品详情
$("#intro").on("click",function(){
	//商品介绍显示
	$(this).css("background","green");
	$(this).css("color","white");
	//评论变回原来样式
	$("#com").css("color","black");
	$("#com").css("background","");
	//显示商品介绍页面
	$(".intro-nav").css("display","block");
	//评论页面消失
	$(".com-nav").css("display","none");
})

//点击评论详情
$("#com").on("click",function(){
	//商品介绍页面消失
	$(".intro-nav").css("display","none");
	//显示评论页面
	$(".com-nav").css("display","block");
	//评论显示
	$(this).css("background","green");
	$(this).css("color","white");
	//商品介绍变回原来样式
	$("#intro").css("color","black");
	$("#intro").css("background","");
})


//判断是否登陆
if(localStorage.hasOwnProperty("true")){
	//显示评论内容
	$(".com-nav>ul>li").css("color","pink");
	//删除按钮
	$(".com-nav>ul>li>button").on("click",function(){
		$(this).parent().remove();
		//评论个数显示
		$("#com")[0].innerText="评论数("+$(".com-nav>ul>li").length+")";
		$("#comm")[0].innerText="评论数("+$(".com-nav>ul>li").length+")"; 
		//判断是否存在评论
		if($(".com-nav>ul>li").length==0){
			$("#fenshu")[0].innerText="0.0";
		}else{
			$("#fenshu")[0].innerText="5.0";
		}
	})


	//点击评论事件
	$(".opra>input").eq(1).on("click",function(){
		//判断是否空格或者少于五个字符
		if ($(".opra>input").eq(0).val().trim()==""||$(".opra>input")[0].value.length<5){
			//清空
			$(".opra>input").eq(0).val("") ;
			//显示警告
			$(".com-nav>p").css("display","block");
			return;
		}else{
			//警告消失
		    $(".com-nav>p").css("display","none");
		    //分割为数组
		    $str =$(".opra>input").eq(0).val().split("");	
		    //创建元素
			var	li = document.createElement("li");
			//遍历分割出来的数组
			for(var i =0;i<$str.length;i++){
				//正则设置判断条件
				$res1 = $str[i].match(/[a-z]/i);
				$res2 = $str[i].match(/\d/);
				$res3 = $str[i].match(/[\u4e00-\u9fa5]/);
						
				//创建元素
				var span =document.createElement("span");
				//判断单词
				if($res1){
					$(span).text($str[i]);
					$(span).css("color","deepskyblue");
					$(li).append($(span));
									
				//判断数字
				}else if ($res2){
					$(span).text($str[i]);
					$(span).css("color","rosybrown");
					$(li).append($(span));
									
				//判断中文	
				}else if ($res3){
					$(span).text($str[i]);
					$(span).css("color","pink");
					$(li).append($(span));	
									
				//判断其他	
				}else{
					$(span).text($str[i]);
					$(span).css("color","silver");
					$(li).append($(span));
				}
		
			}
			
			//添加删除按钮
			$(li).append("<button>删除</button>");
			$(".com-nav>ul").append($(li));
			//输入框清空
			$(".opra>input").eq(0).val("") ;
			//删除按钮
			$(li).on("click","button",function(){
			    $(this).parent().remove();     	
			})
		}
		//显示评论个数
		$("#com")[0].innerText="评论数("+$(".com-nav>ul>li").length+")";   	
		$("#comm")[0].innerText="评论数("+$(".com-nav>ul>li").length+")";  
		//判断是否存在评论
		if($(".com-nav>ul>li").length==0){
			$("#fenshu")[0].innerText="0.0";
		}else{
			$("#fenshu")[0].innerText="5.0";
		}
	})	
		    	 	
	//清楚所有内容，包括标签
	$(".opra>input").eq(2).on("click", function(){
		$(".com-nav>ul").empty(); 
		//显示评论个数
		$("#com")[0].innerText="评论数("+$(".com-nav>ul>li").length+")";
		$("#comm")[0].innerText="评论数("+$(".com-nav>ul>li").length+")"; 
		//显示评论分数
		$("#fenshu")[0].innerText="0.0";
	})

}