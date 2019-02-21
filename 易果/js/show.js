
//判断是否登录
if(localStorage.hasOwnProperty("true")){
	$(".logo>div").on("mouseenter",function(){
		shows();
		if ($(".listsss").children().length>5) {
			$(".listsss").css("height","225");
			$(".listsss").css("overflow","auto");	
		}
		
			$(".listsss").css("display","block");
		
		
	});
	$(".logo>div").on("mouseleave",function(){
		$(".listsss").css("display","none");
	})
	
}


//获取元素ul
var listsss = document.getElementsByClassName("listsss")[0];

//显示函数
function shows(){
	//清空
	listsss.innerHTML="";
	//遍历存储数据
	for (var i = 0; i<localStorage.length;i++) {
		
		//判断是不是需要的购物商品，区分商品和账号
		if(localStorage.getItem(localStorage.key(i)).split("=")[1]!=undefined&&localStorage.key(i).split("=")[2]==localStorage.getItem("true")){
			//创建元素装数据
			var li =document.createElement("li");
			var img =document.createElement("img");
			var span = document.createElement("span");
			var ii = document.createElement("i");
			//图片
			img.src=localStorage.getItem(localStorage.key(i)).split("=")[1]; 
			//图片名称
			img.title=localStorage.key(i).split("=")[0]; 
			//商品单价
			img.alt=localStorage.getItem(localStorage.key(i)).split("=")[2]; 
			//数量
			span.innerText = "x"+localStorage.getItem(localStorage.key(i)).split("=")[0];
			//地址
			ii.innerText = localStorage.key(i).split("=")[1];
			//判断书否被选中
			if(localStorage.getItem(localStorage.key(i)).split("=")[3]=="true"){
				li.appendChild(img);
				li.appendChild(span);
				li.appendChild(ii);
				listsss.appendChild(li);
			}
		}
	}
	//鼠标进去事件
	$(".listsss>li").on("mouseenter",function(){
		//创建元素
		var div = document.createElement("div");
		var inp1 = document.createElement("input");
		var inp2 = document.createElement("input");
		var inp3 = document.createElement("input");
		inp1.type="button";
		inp1.id = "jjian";
		inp2.type="button";
		inp2.id = "jjia";
		inp3.type="button";
		inp3.id="sshan";
		inp1.value="-";
		inp2.value="+";
		inp3.value="删除";
		div.appendChild(inp1);
		div.appendChild(inp2);
		div.appendChild(inp3);
		$(this)[0].appendChild(div);
		
		//点击减号
		$(".listsss>li").children("div").children("#jjian").on("click",function(e){
			e.stopPropagation();
			//用于装点击加法
			var a = parseInt($(this).parent().siblings("span").text().substr(1))-1;
			//判断是否少于0
			if(a<0){
				a=0;
			}
			//显示数据
			$(this).parent().siblings("span").text("x"+a);
			//装商品名称
			var b = $(this).parent().siblings("img").attr("title");

//			//装商品照片
			var c =	$(this).parent().siblings("img").attr("src");
//			//装商品单价
			var d=$(this).parent().siblings("img").attr("alt");

			//装商品送达地址
			var e=$(this).parent().siblings("i").text();

//			//再次将商品存起来（名称,地址，账号，数量，照片，单价,勾选框）进行下次使用
			localStorage.setItem(b+"="+e+"="+localStorage.getItem("true"),a+"="+c+"="+d+"="+true);
			//显示总数和个数
			Sum1();
		})
		
		//点击加号
		$(".listsss>li").children("div").children("#jjia").on("click",function(e){
			e.stopPropagation();
			//用于装点击加法
			var a = parseInt($(this).parent().siblings("span").text().substr(1))+1;
			//显示数据
			$(this).parent().siblings("span").text("x"+a);
			//装商品名称
			var b = $(this).parent().siblings("img").attr("title");

//			//装商品照片
			var c =	$(this).parent().siblings("img").attr("src");
//			//装商品单价
			var d=$(this).parent().siblings("img").attr("alt");

			//装商品送达地址
			var e=$(this).parent().siblings("i").text();
		
//			//再次将商品存起来（名称,地址，账号，数量，照片，单价,勾选框）进行下次使用
			localStorage.setItem(b+"="+e+"="+localStorage.getItem("true"),a+"="+c+"="+d+"="+true);
			//显示总数和个数
			Sum1();
	
		})
		
		//点击删除
		$(".listsss>li").children("div").children("#sshan").on("click",function(e){
			e.stopPropagation();
			//用于装点击加法
			var a = 0;
			//显示数据
			$(this).parent().siblings("span").text("x"+a);
			//装商品名称
			var b = $(this).parent().siblings("img").attr("title");

//			//装商品照片
			var c =	$(this).parent().siblings("img").attr("src");
//			//装商品单价
			var d=$(this).parent().siblings("img").attr("alt");

			//装商品送达地址
			var e=$(this).parent().siblings("i").text();
		
			$(this).parent().parent().css("display","none");
//			//再次将商品存起来（名称,地址，账号，数量，照片，单价,勾选框）进行下次使用
			localStorage.removeItem(b+"="+e+"="+localStorage.getItem("true"));
			//显示总数和个数
			Sum1();
			
		})
		
	})
	
	
	//鼠标移出事件
	$(".listsss>li").on("mouseleave",function(){
		$(this).children("div").css("display","none");
	
	})
	
}

//显示函数
function Sum1(){
	//设置变量装sum1为数量总和
	var sum1 =0 ;
	//遍历装商品的ul的商品个数（li）
	for(var i = 0; i<$(".listsss").children().length;i++){
		//所有商品自身的个数
		var b = $(".listsss").children().eq(i).children("span").text().substr(1);
		//将字符串转为数字
		var b =  Number(b);
		//所有商品个数相加
		sum1 +=b;
		
	}	
		$(".geshu").text(sum1);
		//将购物车个数存起来
		localStorage.setItem("ge",sum1);
}