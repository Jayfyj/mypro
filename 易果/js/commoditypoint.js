
/**************************************************************************/
//设置全局变量
var a =0 ;

//减号点击事件
$("#ji").on("click",function(){
	if(a==0){
		a=0;
	}else{
		a--;
	}
	$("#kong").text(a);
	
})


//加号点击事件
$("#jia").on("click",function(){
	a++;
	$("#kong").text(a);
})


//点击购物车按钮事件
$("#gou").on("click",function(){
//	//判断
//	if(localStorage.getItem("ge")==NaN){
//		localStorage.setItem("ge","0",100);
//	}

	//判断是否登录
	if(localStorage.hasOwnProperty("true")){
		
		//判断是否添加0个
		if(a!=0){
			//设置变量，用来赋值新增加的数和已经存的数的和
			var c = 0;
			//判断是否商品是否存在和是不是同一个地方买的
			var s = name1[0].innerHTML+"="+sheng.value+"省，"+shi.value+"市，"+qu.value+"="+localStorage.getItem("true");
			if(localStorage.hasOwnProperty(s)){
				//获取值转化为数字类型
				var b = parseInt(localStorage.getItem(s).split("=")[0]);
				//相加赋值
				c = a + b;
			}else{
				c=a;
			}
			//将新的数值再次存起来
			localStorage.setItem(name1[0].innerHTML+"="+sheng.value+"省，"+shi.value+"市，"+qu.value+"="+localStorage.getItem("true"),c+"="+info[0].sm+"="+name1[3].innerHTML+"="+"true");
	
			//获取计算购物的购物车数值
			var b = parseInt(localStorage.getItem("ge"));
			//设置变量，用来赋值新增加的数和已经存的数的和
			c=b+a;
			//将新的数值再次存起来
			localStorage.setItem("ge",c);
			//然后显示出来
			$(".geshu").text(localStorage.getItem("ge"));
		}
	}else{
		//如果登录了，提示框不在出现
		$(".shop").css("display","block");
	}
})