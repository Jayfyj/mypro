//初始化验证码	
$("#erweima")[0].src="img/verifycode ("+(parseInt(Math.random()*10)+1)+").png";
	
//登录注册页面的验证码数组；
    var arr = ["b18v","6pnb","b9u9",'tbra',"vywi","iuye","8rja","dytz","y9ts","pvkk"];	
	
//点击登录注册页面的验证码，变化
$("#erweima")[0].onclick=function(){
	this.src="img/verifycode ("+(parseInt(Math.random()*10)+1)+").png";
}