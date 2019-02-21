var arr =[
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
				
			var brr =[
			1001,1002,1003,1004,1005,1006,
			2001,2002,2003,2004,2005,2006,
			3001,3002,3003,3004,3005,3006,
			4001,4002,4003,4004,4005,4006,
			5001,5002,5003,5004,5005,5006,
			6001,6002,6003,6004,6005,6006,
			7001
			
			]
				
				
				
				
				

			
			//获取元素
			var big2 = document.getElementsByClassName("logo")[0];
		    var inps = big2.getElementsByTagName("input");
		    var list = document.getElementsByClassName("listss");
		    var lis = list[0].getElementsByTagName("li");
		 
        	var numm = -1;
		 
		    
		document.onkeydown=function(e){
        	var e = e||window.event;
        	
        	if(e.keyCode==13){ //回车键

				show();
                numm=0;
                if(lis.length>0){
	             	inps[0].value=lis[0].innerText;
	                lis[0].style.backgroundColor="green";
	        		$(".listss>li>a")[0].style.color="white";
        		}
        	}else if(e.keyCode==40){
        		//摁下向下键
        		numm++;
        		if(numm>=lis.length){numm=0}
        		for(var i=0;i<lis.length;i++){

					lis[i].style.backgroundColor="";
        			$(".listss>li>a")[i].style.color="black";
        		}

        		lis[numm].style.backgroundColor="green";
        		$(".listss>li>a")[numm].style.color="white";
        		inps[0].value=lis[numm].innerText;
        		
        	}else if(e.keyCode==38){ //摁下向上键
        		e.preventDefault();
        		numm--;
        		if(numm==-1||numm==-2){numm=lis.length-1};
        		for(var i=0;i<lis.length;i++){

					lis[i].style.backgroundColor="";
	        		$(".listss>li>a")[i].style.color="black";
        		}

				lis[numm].style.backgroundColor="green";
        		$(".listss>li>a")[numm].style.color="white";
        		inps[0].value=lis[numm].innerText;
        	}
        	
        	//鼠标进入
        	$(".listss>li").on("mouseenter",function(){
		    	$(this).css("background","green");
		    	$(this).children("a").css("color","white");
		    })
		    
		    //鼠标离开
		    $(".listss>li").on("mouseleave",function(){
			    	//判断是不是鼠标在显示颜色的li
			    	if(numm!=$(this).index()){
				    	$(this).css("background","white");
				    	$(this).children("a").css("color","black");
			    	}
		    })
       	}
		    
		    
		    
		    
		    
		    
		    
		    
		    //显示的函数
		    function show(){
		    	
		    	//清空ul的所有内容
		    	list[0].innerHTML="";
		    	
		    	if(inps[0].value.trim()!=""){
			    	//出现ul
			    	list[0].style.display="block";
			    	
			    	//循环遍历数组
			    	for (var i = 0; i<arr.length;i++){
	                    //正则判断，符合条件就出现在ul中
						var reg =inps[0].value;
						var res = arr[i].match(RegExp(reg,"g"));
						if(res){
							var li =document.createElement("li");
							var a = document.createElement("a")
//							li.style.listStyle="none";
							a.href="commodity.html?pid="+brr[arr.indexOf(arr[i])]
							a.innerHTML=arr[i];
							li.appendChild(a)
							list[0].appendChild(li);
						    //点击li 就出现在输入框中
							li.onclick=function(){
								inps[0].value=this.innerText;
								list[0].style.display="none";	
							}   
						}
			    	}
		       }
		    }
		    
//跳转详情页
$("#btnsuo").on("click",function(){
	if($("#neirong")[0].value.trim()!=""&&arr.indexOf($("#neirong").val())!=-1){
		location.href="commodity.html?pid="+brr[arr.indexOf($("#neirong").val())];
	}
})

$("#btnsuo").on("mouseenter",function(){
	$(this).css("cursor","pointer");
})
