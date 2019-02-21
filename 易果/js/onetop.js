//设定按钮
$(".totop")[0].addEventListener('click',function(){
    var timer = setInterval(function(){
        //判断是否滚动到顶部
        if(getScroll().y==0){
            clearInterval(timer);  				
        }
    	scrollBy(0,-50); 
    },10);
})

//设置变量
var n=0;
//置顶按钮变换颜色
var aa = setInterval(bs,1000);

//颜色变换函数
function bs(){
	n++;
	if(n%2==0){
	$(".totop").css("background","silver");
	}else{
	$(".totop").css("background","green");
	}
}


//鼠标进入事件
$(".totop").on("mouseenter",function(){
	clearInterval(aa);
	$(this).css("background","green");
	$(this).css("cursor","pointer");
})

//鼠标离开事件
$(".totop").on("mouseleave",function(){
	aa=setInterval(bs,1000);
})