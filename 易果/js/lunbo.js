//设置变量
$ind = 0,$timer=null,$flag=true,$autoTimer=null;
//初始化显示第一个小图片
$("#dot").children().eq(0).css("background-color","green");


//自动轮播
$autoTimer = setInterval(move,3000);
					
//鼠标移入  轮播停止  清空autoTimer定时器
$('.wrap').on('mouseenter',function(){
	clearInterval($autoTimer);
});

//鼠标离开  轮播开始  清空autoTimer定时器
$('.wrap').on('mouseleave',function(){
	$autoTimer = setInterval(move,3000);
});			
			
$("#left-btn").on('click',move);
			
//右按钮，点击事件
$("#right-btn").on('click',function(){
				
	if($flag){
		$flag=false;
		if($ind==0){
			$ind=$(".wrap>ul").children().length-1;
			$(".wrap>ul").css("left",(-1345)*$ind)
		}
		$ind--;
		$timer = setInterval(function(){
			$curleft = parseInt($(".wrap>ul").css("left"));
			if($curleft==(-1345*$ind)){
				$flag=true;
				clearInterval($timer);
			}else{
				$(".wrap>ul").css("left",$curleft+5);
			}
			$("#dot").children().css("background","rgba(255,255,255,0.5)");
		 	if($ind<0){
//		 	
		 		$("#dot").children().eq(0).css("background-color","green");
		 	}else{
//		 		
		 		$("#dot").children().eq($ind).css("background-color","green");
		 	}
			
		},1)	
	}	
})

//处理函数
function move(){
//	console.log(123);
	if($flag){
		
		$flag=false;
		$ind++;
		
		$timer = setInterval(function(){
			//获取当前ul的left值
			
			$curleft = parseInt($(".wrap>ul").css("left"));
			//判断是否走到了目标位置  走到了就停止(清空定时器)
			if($curleft==(-1345*$ind)){
				//每次走到目标位置之后  判断现在显示的这一张是不是最后一张
				//如果是  就回到ind=0  list.style.left=0的第一张
				
				if($ind==$(".wrap>ul").children().length-1){
					$ind=0;
					$(".wrap>ul").css("left","0");
				}
				$flag=true;
				clearInterval($timer);
			}else{
				//没走到就继续移动
				
				$(".wrap>ul").css("left",$curleft-5);
			}
			//遍历所有点

			$("#dot").children().css("background","rgba(255,255,255,0.5)");
		 	if($ind>=$(".wrap>ul").children().length-1){
//		 		
		 		$("#dot").children().eq(0).css("background-color","green");
		 	}else{
//		 		
		 		$("#dot").children().eq($ind).css("background-color","green");
		 	}
			
		},1);
		
	}
 }	
		//点击点事件
        
			$("#dot").children().on("click",function(){
				$ind = $(this).index();
				$("#dot").children().css("background","rgba(255,255,255,0.5)");
				$(this).css("background-color","green");
				$(".wrap>ul").css("left",$(this).index()*(-1345));
			})
			

/****************************************************************************************/

