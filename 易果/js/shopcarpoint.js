var crr =[
			"以色列青柚8个约300g/个",
			"越南红心火龙果2个(大果)410g以上/个",
			"美国红蛇果4个190g以上/个",
			"SunMoon泰国金枕头冷冻榴莲果肉300g ",
			"泰国龙眼1kg",
			"澳大利亚芒果2个420g以上/个 ",
			"福建琯溪白心蜜柚2个约1kg/个",
			"云南蒙自精品石榴4个约325g/个",
			"四川果冻橙6个约180g/个",
			"新疆库尔勒精选香梨2kg约120g/个",
			"四川果冻橙6个约180g/个",
			"新疆红提2kg",
			"原膳南美白虾仁（中）250g",
			"东海鲳鱼400g(2条)",
			"聚福鲜进口冰鲜三文鱼新鲜整块500g",
			"原膳野生阿根廷去头红虾250g",
			"皇纯 淡干海参 50g 7-10只",
			"原膳虾夷半壳扇贝280g(6只装)",
			"澳洲故饲格斯牛排",
			"澳洲腱子心1kg",
			"原膳藏牛腿肉500g",
			"塔斯马尼亚牛排500g",
			"澳洲牛排500g",
			"原膳澳洲和牛后腰肉心牛排(M7-8)200g",
			"崇明生态乳鸽300g",
			"CP正大老母鸡1.5kg",
			"凤祥食品鸡翅中500g",
			"朝一生鲜鸡蛋550g(10枚装)",
			"凤祥食品鸡胸肉500g",
			"农百鲜苏北散养童子鸡600g",
			"香港进口美心原味鸡蛋卷礼盒儿童休闲零食",
			"莎得徕兹原味泡芙89g",
			"蒙牛全脂巴氏杀菌乳鲜牛奶180ml*12袋(整箱)",
			"天润浓缩酸奶全脂风味发酵乳(原味)180g*12",
			"栗子鲜奶蛋糕2块(约70g/块)",
			"芒果奶油甜甜蛋糕120g",
			"原膳内蒙古带骨羊排1.2kg"
			]
				
			var drr =[
			1001,1002,1003,1004,1005,1006,
			2001,2002,2003,2004,2005,2006,
			3001,3002,3003,3004,3005,3006,
			4001,4002,4003,4004,4005,4006,
			5001,5002,5003,5004,5005,5006,
			6001,6002,6003,6004,6005,6006,
			7001
			
			]

//获取用来装购买商品的ul
var shoplist = document.getElementsByClassName("shoplist")[0];


//获取已经存起来的数据，遍历起来
for(var i = 0 ; i < localStorage.length;i++){
	//创建元素将数据装起来
	var li = document.createElement("li");
	var img =document.createElement("img");
	var span1 = document.createElement("span");
	var span2 = document.createElement("span");
	var inp1 = document.createElement("input");
	var inp2 = document.createElement("input");
	var inp3 = document.createElement("input");
	var inp4 = document.createElement("input");
	var div = document.createElement("div");
	var ii = document.createElement("strong");
	var iii = document.createElement("i");
	var em = document.createElement("em");
	//判断是不是需要的购物商品，区分商品和账号
	if(localStorage.getItem(localStorage.key(i)).split("=")[1]!=undefined&&localStorage.key(i).split("=")[2]==localStorage.getItem("true")){
		
		
		//进行数据的匹配
		//图片
		img.src=localStorage.getItem(localStorage.key(i)).split("=")[1];
		
		div.className="btn";
		
		//减号按钮
		inp1.type = "button";
		inp1.className="ji";
		inp1.value="-";
		div.appendChild(inp1);
		div.appendChild(span2);
		
		//加号按钮
		inp2.type = "button";
		inp2.className="jia";
		inp2.value="+";
		div.appendChild(inp2);
		
		//删除按钮
		inp3.type = "button";
		inp3.className="qing";
		inp3.value="删除";
		div.appendChild(inp3);
		
		//勾选按钮
		inp4.type = "checkbox";
		inp4.className="gouxuan";
		if(localStorage.getItem(localStorage.key(i)).split("=")[3]=="true"){
			inp4.checked=true;
		}else{
			inp4.checked=false;
		}
		div.appendChild(inp4);
		
		//设置变量装数值  a装单价价格 ， b装数量
		var a = localStorage.getItem(localStorage.key(i)).split("=")[2].substr(1);
		var b = localStorage.getItem(localStorage.key(i)).split("=")[0];
		
		//该商品送达地址
		ii.innerText= localStorage.key(i).split("=")[1];
		//该商品数量和单价的乘积
		iii.innerText= parseFloat(a)*100*parseInt(b)/100;
		//装单价价格
		em.innerText = a;
		//商品名称
		span1.innerText = localStorage.key(i).split("=")[0];
//		console.log(span1.innerText)
		//装数量
		span2.innerText = b;
		li.appendChild(inp4);
		li.appendChild(img);
		li.appendChild(ii);
		li.appendChild(span1);
		li.appendChild(iii);
		li.appendChild(em);
		li.appendChild(div);
		shoplist.appendChild(li);
	
	}
	
}

//设置一个数组，装待会获取的元素
var good =[];
//遍历ul
for (var i = 0; i<shoplist.children.length;i++) {
	//设置变量
	var a = $(".shoplist").children("li").eq(i).children("span").text();
	//获取追加得到的文本对应的下标对应的数值
	good.push(drr[crr.indexOf(a)]);
	//点击图片跳转
	$(".shoplist").children("li").children("img").on("click",function(){
		location.href="commodity.html?pid="+good[$(this).parent().index()];
	});
	
}


//显示所有商品的价格总和，所有商品数量总和
function Sum(){
	//设置变量装数值和 sum为所有商品的价格总和，sum1为数量总和
	var sum =0;
	var sum1 =0 ;
	//遍历装商品的ul的商品个数（li）
	for(var i = 0; i<$(".shoplist").children().length;i++){
		//所有商品自身总价格
		var a = $(".shoplist").children().eq(i).children("i").text();
		//所有商品自身的个数
		var b = $(".shoplist").children().eq(i).children(".btn").children("span").text();
		//将字符串转为数字
		var b =  Number(b);
		var a =  Number(a);
		//判断是不是勾上
		if($(".shoplist").children().eq(i).children(".gouxuan").prop("checked")==true){
			//所有商品相加
			sum+=a ;
			sum1 +=b;
		}
	}	
		//赋值显示，oFixed(2)获取小数点后面两位
		$(".accounts>i").text(sum.toFixed(2));
		$(".geshu").text(sum1);
		//将购物车个数存起来
		localStorage.setItem("ge",sum1);
}

//全选函数
function xuankuang(){
	var count=0;
	//遍历所有的复选框  有选中就加1
	for(var j =0;j<$(".gouxuan").length;j++){
		if($(".gouxuan")[j].checked==true){
			count++;
		}
	}
	//如果全部选中  勾上全选框
	if(count==$(".gouxuan").length){
		$("#total")[0].checked=true;
	}else{
		$("#total")[0].checked=false;
	}				

}

//显示总数和个数
Sum();
//显示是否勾选
xuankuang();





//生成li中的加号点击事件
$(".shoplist .jia").on("click",function(){
	//用于装点击加法
	var a = parseInt($(this).siblings("span").text())+1;
	//显示数据
	$(this).siblings("span").text(a);
	//装商品名称
	var b = $(this).parent().siblings("span").text();
	//装商品照片
	var c =	$(this).parent().siblings("img").attr("src");
	//装商品单价
	var d=$(this).parent().siblings("em").text();
	//装商品送达地址
	var e=$(this).parent().siblings("strong").text();
	//装商品总价
	var f = parseFloat(d)*100*a/100;
	//显示商品总价
	$(this).parent().siblings("i").text(f);
	//获取当前的勾选框状态
	var g = $(this).parent().siblings(".gouxuan").prop("checked");

	//再次将商品存起来（名称,地址，账号，数量，照片，单价,勾选框）进行下次使用
	localStorage.setItem(b+"="+e+"="+localStorage.getItem("true"),a+"="+c+"="+"￥"+d+"="+g);

	//显示所有商品的价格总和，所有商品数量总和
	Sum();

})


//生成li中的减号点击事件
$(".shoplist .ji").on("click",function(){
	//用于装点击减法
	var a = parseInt($(this).siblings("span").text())-1;
	//判断是否为零
	if(a<0){
		a = 0;
	}
	//显示数据
	$(this).siblings("span").text(a);
	//装商品名称
	var b = $(this).parent().siblings("span").text();
	//装商品照片
	var c =	$(this).parent().siblings("img").attr("src");
	//装商品单价
	var d=$(this).parent().siblings("em").text();
	//装商品送达地址
	var e=$(this).parent().siblings("strong").text();
	//装商品总价
	var f = parseFloat(d)*100*a/100;
	//显示商品总价
	$(this).parent().siblings("i").text(f);
	//获取当前的勾选框状态
	var g = $(this).parent().siblings(".gouxuan").prop("checked");

	//再次将商品存起来（名称,地址，账号，数量，照片，单价,勾选框）进行下次使用
	localStorage.setItem(b+"="+e+"="+localStorage.getItem("true"),a+"="+c+"="+"￥"+d+"="+g);

	//显示所有商品的价格总和，所有商品数量总和
	Sum();
	
	
})


//生成的li的按钮div(委托删除按钮)
$(".btn").on("click", ".qing",function(){

	//装商品名称
	var b = $(this).parent().siblings("span").text();
	//装商品照片
	var c =	$(this).parent().siblings("img").attr("src");
	//装商品单价
	var d=$(this).parent().siblings("em").text();
	//装商品送达地址
	var e=$(this).parent().siblings("strong").text();

	//显示所有商品的价格总和，所有商品数量总和
	Sum();
	
	var agree = confirm("确定删除？");
	if(agree==true){
		//用于装点击删除
		var a = 0;
		//显示数据
		$(this).siblings("span").text(a);
		//装商品总价
		var f = 0;
		//显示商品总价
		$(this).parent().siblings("i").text(f);
		//li消失
		$(this).parent().parent().css("display","none");	
		location.href="shopcar.html";
		//彻底删除
		var r = b+"="+e+"="+localStorage.getItem("true");
		localStorage.removeItem(r);
	}
})

//生成的li的勾选按钮
$(".shoplist>li").on("change", ".gouxuan",function(){
	//获取商品名称
	var a = $(this).siblings("span").text();
	//获取商品送至地址
	var b = $(this).siblings("strong").text();
	//拼成字符串用来获取数据
	var c =a+"="+b+"="+localStorage.getItem("true");
	//获取数据
    var d = localStorage.getItem(c);
 	//分割字符串，获取个数，照片，单价
    var e = localStorage.getItem(c).split("=")[0];
    var f = localStorage.getItem(c).split("=")[1];
    var g = localStorage.getItem(c).split("=")[2];
	//设置勾选框的状态
    var s = $(this).prop("checked");
 	//拼接字符串
    var str = e+"="+f+"="+g;
    //判断勾选框状态
    if(s!=true){
    	h = false;
    }else{
    	h=true;
    }
    //再次拼接字符串
    var strr = str+"="+h;
    //存入数据
    localStorage.setItem(c,strr);
	//显示所有商品的价格总和，所有商品数量总和
	Sum();
	
})

//全选框
$("#total").on("change",function(){
	//遍历所有勾选框
	for(var i =0;i<$(".shoplist").children().length;i++){
		//所有勾选框随着全选框变化
		$(".shoplist").children().eq(i).children(".gouxuan")[0].checked=$(this).prop("checked");
	}

	//判断全选框状态，勾上了
	if($(this).prop("checked")==true){
		//设置变量装所有勾选框
		var quan = $(".shoplist").children().children(".gouxuan");
		//遍历所有勾选框
		for (var i = 0; i<$(".shoplist").children().length;i++) {
			//获取商品名称
			var a = quan.eq(i).siblings("span").text();
			//获取商品送至地址
			var b =	 quan.eq(i).siblings("strong").text();
			//拼成字符串用来获取数据
			var c =a+"="+b+"="+localStorage.getItem("true");
			//获取数据
			var d = localStorage.getItem(c);
	    	//分割字符串，获取个数，照片，单价
	    	var e = localStorage.getItem(c).split("=")[0];
	   		var f = localStorage.getItem(c).split("=")[1];
	    	var g = localStorage.getItem(c).split("=")[2];
	    	 //再次拼接字符串
	    	var str = e+"="+f+"="+g+"="+"true";
	    	//存入数据
	    	localStorage.setItem(c,str);
	    	//显示所有商品的价格总和，所有商品数量总和
			Sum();
		}
	}else if($(this).prop("checked")==false){
		//设置变量装所有勾选框
		var quan = $(".shoplist").children().children(".gouxuan");
		//遍历所有勾选框
		for (var i = 0; i<$(".shoplist").children().length;i++) {
			//获取商品名称
			var a = quan.eq(i).siblings("span").text();
			//获取商品送至地址
			var b =	 quan.eq(i).siblings("strong").text();
			//拼成字符串用来获取数据
			var c =a+"="+b+"="+localStorage.getItem("true");
			//获取数据
			var d = localStorage.getItem(c);
	    	//分割字符串，获取个数，照片，单价
	    	var e = localStorage.getItem(c).split("=")[0];
	   		var f = localStorage.getItem(c).split("=")[1];
	    	var g = localStorage.getItem(c).split("=")[2];
	    	 //再次拼接字符串
	    	var str = e+"="+f+"="+g+"="+"false";
	    	//存入数据
	    	localStorage.setItem(c,str);
	    	//显示所有商品的价格总和，所有商品数量总和
			Sum();
		}
	}
})

//遍历所有勾选框是否全部勾上
for(var i =0;i<$(".gouxuan").length;i++){
	$(".gouxuan")[i].onchange=function(){
		xuankuang();
	}
}

//确定购买
$(".accounts>#buy").on("click",function(){
	if($(".accounts>i").text()=="0.00"){
		//提示信息
		$(".accounts>p").css("display","block");
		$(".accounts>p").text("请选择购买商品，谢谢！");
	}else{
		$(".accounts>p").css("display","none");
		//判断
		var agree = confirm("确定购买？");
		if(agree==true){
			//遍历所有勾选框
			for (var i = 0; i<$(".shoplist").children().length;i++) {
				console.log($(".gouxuan").length)
				if($(".gouxuan").eq(i).prop("checked")==true){
					//设置变量装所有勾选框
					var quan = $(".shoplist").children().children(".gouxuan");
					//获取商品名称
					var a = quan.eq(i).siblings("span").text();
					//获取商品送至地址
					var b =	 quan.eq(i).siblings("strong").text();
					//拼成字符串用来获取数据
					var c =a+"="+b+"="+localStorage.getItem("true");
					//删除
					localStorage.removeItem(c);
				    	
				}
			}
			alert("谢谢客官购买！");
		}
		location.href="shopcar.html";
	}
})

//确定删除
$(".accounts>#del").on("click",function(){
	if($(".accounts>i").text()=="0.00"){
		//提示信息
		$(".accounts>p").css("display","block");
		$(".accounts>p").text("请选择删除商品，谢谢！");
	}else{
		$(".accounts>p").css("display","none");
		//判断
		var agree = confirm("确定删除？");
		if(agree==true){
			//遍历所有勾选框
			for (var i = 0; i<$(".shoplist").children().length;i++) {
//				console.log($(".gouxuan").length)
				if($(".gouxuan").eq(i).prop("checked")==true){
					//设置变量装所有勾选框
					var quan = $(".shoplist").children().children(".gouxuan");
					//获取商品名称
					var a = quan.eq(i).siblings("span").text();
					//获取商品送至地址
					var b =	 quan.eq(i).siblings("strong").text();
					//拼成字符串用来获取数据
					var c =a+"="+b+"="+localStorage.getItem("true");
					//删除
					localStorage.removeItem(c);
				    	
				}
			}
		
		}
		location.href="shopcar.html";
		
	}
})