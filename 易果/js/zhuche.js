//注册电话帐号框；
			$("#zhanghao").on("change",function(){
				var str =$("#zhanghao")[0].value.trim() ;
				if(str.length==11){
			  	 	//设置需要获取的正则所得的值
			  	 	var reg =/^1([6-9][0-9])|([3-5][0-8])[0-9]{8}\b/g;
			  	 	//匹配获取的数组
			  	 	var a = str.match(reg);
					if(!a){
			  	 		$("#zhanghao")[0].value="";
			  	 		//错误提示出现
			  	 		$(".er").eq(0).css("display","block");
			  	 	}else{
						//错误提示消失
			  	 		$(".er").eq(0).css("display","none");
			  	 	}
		  	 	}else{
		  	 		$("#zhanghao")[0].value="";
		  	 		$(".er").eq(0).css("display","block");
		  	 	}
		  	})
			
			//点击密码框
			$("#mima").on("change",function(){
				var str =$("#mima")[0].value;
		  	 	//设置需要获取的正则所得的值
		  	 	var reg = /^\w{6,20}$/g;
		            var res = $("#mima")[0].value.match(reg);
		            if(!res){
		            	$("#mima")[0].value="";
		            	$(".er").eq(1).css("display","block");
		            }else{
		            	$(".er").eq(1).css("display","none");
		            }
		  	})
			

			//点击注册的验证码框
			$("#yanzhengma").on("change",function(){
				var str =$("#yanzhengma")[0].value.toLowerCase() ;
		  	 	//设置需要获取的正则所得的值
		  	 	var res = arr.join("");
		  	 	var reg = res.match(str);
		  	 		if(!reg){
		  	 			$("#yanzhengma")[0].value="";
		  	 			$(".er").eq(2).css("display","block");
		  	 		}else{
		  	 			
		  	 			$(".er").eq(2).css("display","none");
		  	 		}
		  	 	
		  	})
			//点击注册
			$("#btn").on("click",function(){
				if($("#zhanghao")[0].value!=""&&$("#mima")[0].value!=""&&$("#yanzhengma")[0].value!=""){
					localStorage.setItem($("#zhanghao")[0].value,$("#mima")[0].value);
					$("#yanzhengma")[0].value="";
					$("#mima")[0].value="";
					$("#zhanghao")[0].value="";
					//创建注册成功提示
					var p = document.createElement("p")
					p.innerText="注册成功，请回到登录面登录";
					p.style.color="green";
					p.style.fontSize="20px";
					p.style.fontWeight="700";
					$(".login")[0].appendChild(p);
				}
			})
			
			//点击图标到首页
			$(".logo>img").on("click",function(){
				location.href="index.html";
			})