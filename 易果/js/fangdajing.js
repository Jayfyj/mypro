//获取需要的元素
var box = document.getElementsByClassName("nav-bottom-fang")[0];
//获取小图的div
var small = box.children[0];
//遮挡层
var mask = small.children[1];
//获取大图的div
var big = box.children[1];
//获取大图
var bigImg = big.children[0];

//鼠标进入显示遮挡层和大图的div
box.onmouseover = function () {
	mask.style.display = "block";
	big.style.display = "block";
};
//鼠标离开隐藏遮挡层和大图的div
box.onmouseout = function () {
    mask.style.display = "none";
    big.style.display = "none";
};

//鼠标的移动事件
small.onmousemove = function (e) {
	//鼠标此时的可视区域的横坐标和纵坐标
	//设置鼠标在遮挡层的中间显示
	var x = e.pageX - mask.offsetWidth/2 - getPos(box).left;
	var y = e.pageY - mask.offsetHeight/2 - getPos(box).top;
	
	//横坐标的最小值
	x = x < 0 ? 0 : x;
	//纵坐标的最小值
	y = y < 0 ? 0 : y;
	//横坐标的最大值
	x = x > small.offsetWidth - mask.offsetWidth ? small.offsetWidth - mask.offsetWidth : x;
	//纵坐标的最大值
	y = y > small.offsetHeight - mask.offsetHeight ? small.offsetHeight - mask.offsetHeight : y;
	//为遮挡层的left和top赋值
	mask.style.left = x + "px";
	mask.style.top = y + "px";
	
	//大图的横向的最大移动距离（按比例获取的，所以横坐标和纵坐标可以一样）
	var maxX = bigImg.offsetWidth - big.offsetWidth;
	
	//大图的横向移动的坐标
	var bigImgMoveX = x * maxX / (small.offsetWidth - mask.offsetWidth);
	//大图的纵向移动的坐标
	var bigImgMoveY = y * maxX / (small.offsetWidth - mask.offsetWidth);
	
	//设置图片移动（因为小图片向左，大图片向右所以相反，一正一负）
	bigImg.style.marginLeft = -bigImgMoveX + "px";
	bigImg.style.marginTop = -bigImgMoveY + "px";

}