var data=[
		   {
		   	"id":1001,
		   	"pic":"img/big42.jpg",
		   	
		   },
		   {
		   	"id":1002,
		   	"pic":"img/big43.jpg",
		   			   	
		   },
		   {
		   	"id":1003,
		   	"pic":"img/big44.jpg",
		   			   	
		   },
		   {
		   	"id":1004,
		   	"pic":"img/big45.jpg",
		   	
		   },
		   {
		   	"id":1005,
		   	"pic":"img/big46.jpg",
		   			   	
		   },
		   {
		   	"id":1006,
		   	"pic":"img/big47.jpg",
		   			   	
		   }
		    
		]

var data1=[		
			{
		   	"id":2001,
		   	"pic":"img/big52.jpg",
		   	
		   },
		   {
		   	"id":2002,
		   	"pic":"img/big53.jpg",
		   			   	
		   },
		   {
		   	"id":2003,
		   	"pic":"img/big54.jpg",
		   			   	
		   },
		   {
		   	"id":2004,
		   	"pic":"img/big55.jpg",
		   	
		   },
		   {
		   	"id":2005,
		   	"pic":"img/big56.jpg",
		   			   	
		   },
		   {
		   	"id":2006,
		   	"pic":"img/big57.jpg",
		   			   	
		   }
		]

var data2=[		
			{
		   	"id":3001,
		   	"pic":"img/big62.jpg",
		   	
		   },
		   {
		   	"id":3002,
		   	"pic":"img/big63.jpg",
		   			   	
		   },
		   {
		   	"id":3003,
		   	"pic":"img/big64.jpg",
		   			   	
		   },
		   {
		   	"id":3004,
		   	"pic":"img/big65.jpg",
		   	
		   },
		   {
		   	"id":3005,
		   	"pic":"img/big66.jpg",
		   			   	
		   },
		   {
		   	"id":3006,
		   	"pic":"img/big67.jpg",
		   			   	
		   }
		]

var data3=[		
			{
		   	"id":4001,
		   	"pic":"img/big72.jpg",
		   	
		   },
		   {
		   	"id":4002,
		   	"pic":"img/big73.jpg",
		   			   	
		   },
		   {
		   	"id":4003,
		   	"pic":"img/big74.jpg",
		   			   	
		   },
		   {
		   	"id":4004,
		   	"pic":"img/big75.jpg",
		   	
		   },
		   {
		   	"id":4005,
		   	"pic":"img/big76.jpg",
		   			   	
		   },
		   {
		   	"id":4006,
		   	"pic":"img/big77.jpg",
		   			   	
		   }
		]

var data4=[		
			{
		   	"id":5001,
		   	"pic":"img/big82.jpg",
		   	
		   },
		   {
		   	"id":5002,
		   	"pic":"img/big83.jpg",
		   			   	
		   },
		   {
		   	"id":5003,
		   	"pic":"img/big84.jpg",
		   			   	
		   },
		   {
		   	"id":5004,
		   	"pic":"img/big85.jpg",
		   	
		   },
		   {
		   	"id":5005,
		   	"pic":"img/big86.jpg",
		   			   	
		   },
		   {
		   	"id":5006,
		   	"pic":"img/big87.jpg",
		   			   	
		   }
		]


var data5=[		
			{
		   	"id":6001,
		   	"pic":"img/big92.jpg",
		   	
		   },
		   {
		   	"id":6002,
		   	"pic":"img/big93.jpg",
		   			   	
		   },
		   {
		   	"id":6003,
		   	"pic":"img/big94.jpg",
		   			   	
		   },
		   {
		   	"id":6004,
		   	"pic":"img/big95.jpg",
		   	
		   },
		   {
		   	"id":6005,
		   	"pic":"img/big96.jpg",
		   			   	
		   },
		   {
		   	"id":6006,
		   	"pic":"img/big97.jpg",
		   			   	
		   }
		]


		//获取元素
        var list = document.getElementsByClassName("ifruitpic");
        var list1 = document.getElementsByClassName("dfruitpic");
        var list2 = document.getElementsByClassName("sfisherypic");
        var list3 = document.getElementsByClassName("ameatpic");
        var list4 = document.getElementsByClassName("chickenpic");
        var list5 = document.getElementsByClassName("cakepic");

		//初始化
        initgoods(data,list);
        initgoods(data1,list1);
        initgoods(data2,list2);
        initgoods(data3,list3);
        initgoods(data4,list4);
        initgoods(data5,list5);
       // 初始化函数
        function initgoods(arr, list){
        	for(var i = 0;i<arr.length;i++){
        		
        		list[i].style="background:url("+arr[i].pic+") center;background-size:100% 100%;";
        		//设置属性
        		list[i].setAttribute("pid",arr[i].id);
        		list[i].onclick=function(){
        			var s = this.getAttribute("pid");
        			//添加数值在地址栏，进行下一步数据获取，进行数据显然
        			location.href="commodity.html?pid="+s;
        		};
        		
        	}
        }