

document.onscroll=function(){
						console.log(getScroll().y)
	
	
	
	//当鼠标滚动到620进行判断
	if(getScroll().y<650){
		$(".totop").css("display","none");
		$(".sidebar").css("display","none");
	}else{
		$(".totop").css("display","block");
		$(".sidebar").css("display","block");
	}
					
	//当滚动到一定距离显示不同效果
	if(getScroll().y>=650&&getScroll().y<1070){
		$(".xian").css("opacity","0");
		$(".xian").eq(0).css("opacity","1");
	}else if(getScroll().y>=1070&&getScroll().y<1495){
		$(".xian").css("opacity","0");
		$(".xian").eq(1).css("opacity","1");
	}else if(getScroll().y>=1495&&getScroll().y<1915){
		$(".xian").css("opacity","0");
		$(".xian").eq(2).css("opacity","1");
	}else if(getScroll().y>=1915&&getScroll().y<2335){
		$(".xian").css("opacity","0");
		$(".xian").eq(3).css("opacity","1");
	}else if(getScroll().y>=2335&&getScroll().y<2760){
		$(".xian").css("opacity","0");
		$(".xian").eq(4).css("opacity","1");
	}else{
		$(".xian").css("opacity","0");
		$(".xian").eq(5).css("opacity","1");
	}
					
					
	//当滚动大于620时搜索栏固定
	if(getScroll().y>30){
		$(".logo").css("position","fixed");
		$(".logo").css("top","0");
		$(".logo").css("z-index","11");
//		$(".logo").css("background","rgba(192,192,192,.5)");
		

	}else{
		$(".logo").css("position","");
		$(".logo").css("z-index","");
//		$(".logo").css("background","rgba(192,192,192,1)");
	}
						
}


//距离数组；
var runbrr=[720,1140,1565,1985,2405,2830];
var runfont=["进口水果","国产水果","海鲜水产","精选肉类","禽类蛋品","乳品糕点"];
var flag = true;
$(".sidebar>div>div").on("click",function(){

	var ind =$(this).text();
	var runnum = runbrr[runfont.indexOf(ind)];
	runn(runnum);
})

$(".sidebar>div").on("mouseenter",function(){
	$(this).css("background-color","greenyellow");
})

$(".sidebar>div").on("mouseleave",function(){
	$(this).css("background-color","white");
})

//滚到到所在位置的函数；
            function runn(x){
            	//锁的作用，事件没有完成不能进行其他操作
		        if(flag){
		        	//进来就上锁，设置为false
		        	
		        	flag=false;
	        		var timer = setInterval(function(){
	        			//判断位置，到达就停止定时器
	        			if(getScroll().y==x){
	                        clearInterval(timer);  
	                        flag=true;
	        			}else if(getScroll().y>x){
	        			    //向上滚到
	        				scrollBy(0,-10); 
	        				if(getScroll().y<=x){
	        					$(this).css("top",x+"px");
	                        	clearInterval(timer);  
	                        	flag=true;
	        			    }
	        			}else if(getScroll().y<x){
	        				//向下滚到
	        				scrollBy(0,10);
	        				if(getScroll().y>=x){
	        					$(this).css("top",x+"px");
	                            clearInterval(timer);  
	                            flag=true;
	                        }
	        			}
	        		},1);
	        	}
            }