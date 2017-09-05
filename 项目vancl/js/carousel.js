//轮播图
		
		window.onload=function(){
			//下标指向按钮
			var inow=0;
			var uls=document.getElementById("phos");
			var lis=uls.getElementsByTagName("li");
			var onewidth=lis[0].offsetWidth;
			uls.style.width=onewidth*6+"px";
			
			
			//左右切换按钮
			var fst=document.getElementById("frontBtn");
			var lat=document.getElementById("backBtn");
			fst.onclick=function(){
				inow--;
				move();
			}
			lat.onclick=function(){
				inow--;
				move();
			}

			var listag=document.getElementById("phoBtn").children;
				for(var i=0;i<listag.length;i++){
					listag[i].num=i;
					listag[i].onclick=function(){
						//this.num--就是下标
						inow=this.num;
						move();
					}
					
				}
			
			setInterval(change,3000);
			function change(){
				inow++;
				move();
			}
			
			function move(){
				if(inow>5){
					inow=0;
				}
				if(inow<0){
					inow=5
				}
				for(var j=0;j<listag.length;j++){
					listag[j].className="";
				}
				
				uls.style.left=-inow*onewidth+"px";
			}
			
			
		}
		

















//数据库


var listData={};

listData.hot={
			"count":20,
			page:1,
			hotData:[
				{"id":"001","name":"凡客T恤  熊本熊T14 ","src":"../particulars-phone/6375942-1j201706081710395370.jpg","price":"现价:666"},
				{"id":"002","name":"Txu CALM Going","src":"../img/002.PNG","price":"现价:111"},
				{"id":"003","name":"T恤 苦逼1","src":"../img/003.PNG","price":"现价:1314"},
				{"id":"004","name":"T恤 好小猪7","src":"../img/004.PNG","price":"现价:89757"},
				{"id":"001","name":"Txu CALM Going","src":"../img/001.PNG","price":"现价:666"},
				{"id":"002","name":"T恤 熊本熊T10","src":"../img/002.PNG","price":"现价:111"},
				{"id":"003","name":"T恤 苦逼1","src":"../img/003.PNG","price":"现价:1314"},
				{"id":"004","name":"T恤 好小猪7","src":"../img/004.PNG","price":"现价:89757"}
			]
}



