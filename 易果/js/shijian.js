
function timecount(){
	//获取当前时间 以及  时 分 秒
	var d = new Date();
//	d.setHours(5)
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();

	
	
	//显示时间，判断时间，进行倒计时
	if(h>=6&&h<19){
		if(h<8){
			
			h = 8 - h -1;
			$(".qiang>span>span").text('08');
		}else if(h<9){
			h = 9 - h -1;
			$(".qiang>span").text("结束时间还剩下▼");
		}
		else if(h<10){
			h = 10 - h -1;
			$(".qiang>span>span").text('10');
		}else if(h<11){
			h = 11 - h -1;
			$(".qiang>span").text("抢购结束时间还剩下▼");
		}else if(h<12){
			h = 12 - h -1;
			$(".qiang>span>span").text('12');
			
		}else if(h<13){
			h = 13 - h -1;
			$(".qiang>span").text("抢购结束时间还剩下▼");
		}else if(h<14){
		
			h = 14 - h -1;
			$(".qiang>span>span").text('14');
		}else if(h<15){
			h = 15 - h -1;
			$(".qiang>span").text("抢购结束时间还剩下▼");
		}else if(h<16){
		
			h = 16 - h -1;
			$(".qiang>span>span").text('16');
		}else if(h<17){
			h = 17 - h -1;
			$(".qiang>span").text("抢购结束时间还剩下▼");
		}else if(h<18){
		
			h = 18 - h -1;
			$(".qiang>span>span").text('18');
		}else if(h<19){
			h = 19 - h -1;
			$(".qiang>span").text("抢购结束时间还剩下▼");
		}
		m = 59 - m;
		s = 59 -s;
		//对于小于10的数字补零
		
		h<10?h="0"+h:h=h;
		m>=10?m:m="0"+m;
		s>=10?s:s="0"+s;
		//写入时间
		$(".qiang>div>span").eq(0).text(h);
		$(".qiang>div>span").eq(1).text(m);
		$(".qiang>div>span").eq(2).text(s);
	}else{
		if(h>18){
			h = 24-1-h+8;
			$(".qiang>span").text("距离明天抢购时间还剩下▼");
		}else{
			h=8-1-h;
			$(".qiang>span").text("距离抢购时间还剩下▼");
		}
		m = 59 - m;
		s = 59 -s;
		//对于小于10的数字补零
		h<10?h="0"+h:h=h;
		m>=10?m:m="0"+m;
		s>=10?s:s="0"+s;
		//写入时间
		$(".qiang>div>span").eq(0).text(h);
		$(".qiang>div>span").eq(1).text(m);
		$(".qiang>div>span").eq(2).text(s);
	}
	
}	

var t = setInterval(timecount,1000);
