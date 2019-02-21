
 //登录按钮
 $("#btn").on("click",function(){
		   		//是否存在帐号
				var a = localStorage.hasOwnProperty($("#zhanghao")[0].value);
				if(localStorage.hasOwnProperty($("#zhanghao")[0].value)){
					//用于显示已经登录
					localStorage.setItem(a ,$("#zhanghao")[0].value);
				}
				//获取帐号密码
			    var b = localStorage.getItem($("#zhanghao")[0].value);
				//登陆条件
				if(a&&b==$("#mima")[0].value&&$("#yanzhengma")[0].value.length>0){
					
					location.href="shopcar.html";
					//错误提示消失
					$(".er").eq(0).css("display","none");
					$(".er").eq(1).css("display","none");
					$(".er").eq(2).css("display","none");
				}else{
	            	$("#zhanghao")[0].value="";
	            	$("#mima")[0].value="";
	            	//错误提示消失
	            	$(".er").eq(0).css("display","block");
					$(".er").eq(1).css("display","block");
					$(".er").eq(2).css("display","block");
	            }
				
			})
 
//点击注册的验证码框
			$("#yanzhengma").on("change",function(){
				var str =$("#yanzhengma")[0].value.toLowerCase() ;
		  	 	//设置需要获取的正则所得的值
		  	 	var res = arr.join("");
		  	 	var reg = res.match(str);
		  	 		if(!reg){
		  	 			$(".er").eq(2).css("display","block");
		  	 			$("#yanzhengma")[0].value="";
		  	 		}else{
		  	 			
		  	 			$(".er").eq(2).css("display","none");
		  	 		}
		  	 	
		  	})
			
			//账号改变
			$("#zhanghao").on("change",function(){
				$(".er").eq(0).css("display","none");
			});
			
			//密码改变
			$("#mima").on("change",function(){
				$(".er").eq(1).css("display","none");
			});
			
			//点击图标到首页
			$(".logo>img").on("click",function(){
				location.href="index.html";
			})
