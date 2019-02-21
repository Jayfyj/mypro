//生成随机数
			$("#btn")[0].onclick=function(){
//				//判断是否存在帐号
				if(localStorage.hasOwnProperty($("#zhanghao")[0].value)){
				    //错误提示消失
				    $(".er").eq(0).css("display","none");
					var f = $("#zhanghao")[0].value.trim().length;
					if(f>0){
						//设置变量
						var i =0;
						var c = setInterval(function(){
							//经过1秒加1
							i++;
							var a = setInterval(function(){
								//遍历对比数的div
								for (var b =0;b<$("#dot>div").length;b++) {
									//所有div随机生成0-9
									$("#dot>div")[b].innerHTML=parseInt(Math.random()*10) ;
								}
								//3秒后清楚所有定时器
								if(i>2){
									clearInterval(c);
									clearInterval(a);	
								}
							},10)
						},1000)
					}
				}else{
				    $(".er").eq(0).css("display","block");
				}
			}
			
			//获取随机数进行比较，少于等于
			var brr=[];
			$("#btns")[0].onclick=function(){
				//遍历所有对比数的div
				for (var b =0;b<$("#dot>div").length;b++) {
					//获取里面的数值
					brr.push($("#dot>div")[b].innerHTML);
				}
				//判断获取输入账号框的后面四位数是否少于等于对比数
				if(parseInt($("#zhanghao")[0].value.substr(7,4))<=parseInt(brr.join(""))){
					
					var a = localStorage.hasOwnProperty($("#zhanghao")[0].value);
					//是否存在帐号
					if(localStorage.hasOwnProperty($("#zhanghao")[0].value)){
						//用于显示已经登录
						localStorage.setItem(a ,$("#zhanghao")[0].value);
						location.href="shopcar.html";
					}
					//初始化
					for (var b =0;b<$("#dot>div").length;b++) {
						$("#dot>div")[b].innerHTML="0";
					}
				}
			}
			
			//获取随机数进行比较，大于等于
			var crr =[];
			$("#btnd")[0].onclick=function(){
				//遍历所有对比数的div
				for (var b =0;b<$("#dot>div").length;b++) {
					//获取里面的数值
					crr.push($("#dot>div")[b].innerHTML);
				}
				//判断获取输入账号框的后面四位数是否大于等于对比数
				if(parseInt($("#zhanghao")[0].value.substr(7,4))>=parseInt(crr.join(""))){
					
					var a = localStorage.hasOwnProperty($("#zhanghao")[0].value);
					//是否存在帐号
					if(localStorage.hasOwnProperty($("#zhanghao")[0].value)){
						//用于显示已经登录
						localStorage.setItem(a ,$("#zhanghao")[0].value);
						location.href="shopcar.html";
					}
					//初始化
					for (var b =0;b<$("#dot>div").length;b++) {
						$("#dot>div")[b].innerHTML="0";
					}
				}
			}
			
			//点击图标到首页
			$(".logo>img").on("click",function(){
				location.href="index.html";
			})
			