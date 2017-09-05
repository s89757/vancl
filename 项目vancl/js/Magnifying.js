






















window.onload=function(){
	
	
	    // 放大镜
	        var particulars=document.getElementById("particulars")
			var one=document.getElementById("master_map");
			var ones=document.getElementById("magnifying_glass");
			var two=document.getElementById("mapUp");
			var twoimg=document.getElementById("mapUpimg");
			
			one.onmousemove=function(e){
				
					var particularsx=particulars.offsetLeft;
					var particularsy=particulars.offsetTop;
				
				var e=e||event;
				//判断鼠标是否进入one
				
				
				var x=e.pageX-one.offsetLeft-ones.offsetWidth/2-particularsx;
				var y=e.pageY-one.offsetTop-ones.offsetHeight/2-particularsy;
				x=x<0?0:x;
				y=y<0?0:y;
		
				//判断鼠标是否超出one
				var maxw=one.offsetWidth-ones.offsetWidth;
				var maxh=one.offsetHeight-ones.offsetHeight;
				x=x>maxw?maxw:x;
				y=y>maxh?maxh:y;
				
				//确立进入鼠标位置
				ones.style.left=x+"px";
				ones.style.top=y+"px"
				
				//确认放大的倍数
				var www=twoimg.offsetWidth/one.offsetWidth;
				var hhh=twoimg.offsetHeight/one.offsetHeight;
				twoimg.style.left=-x*www+"px";
				twoimg.style.top=-y*hhh+"px";
			}
			
			one.onmouseover=function(){
				ones.style.display="block";
				two.style.display="block";
			}
			one.onmouseout=function(){
				ones.style.display="none";
				two.style.display="none";
			}
}			
			
//			var master_Map1=document.getElementById("master_Map1")
//			var master_Map2=document.getElementById("master_Map2").value;
//			var master_map1=document.getElementById("master_map1")
//			var master_map2=document.getElementById("master_map2")
//          
			
			
			
//			var master_Map=document.getElementById("master_Map");
//			var master_Maps=master_Map.children;
//			var master_map=document.getElementById("master_map");
//			var master_maps=master_map.children;
//			console("master_mapss")
//			for(var i=0;i<master_Maps.length;i++){
//				master_Map[i].index=i;
//				master_Map[i].onclick=function(){
//					alert("aini")
//					for(var i=0;i<master_maps.length;i++){
//						master_map[i].style.display="none";
//					}
//						
//					master_map[this.index].style.display="block"
//						
//					
//				}
//			}
//			
//			var master_Map=document.getElementById("master_Map");
//			var master_Maps=master_Map.children;
//			var master_map=document.getElementById("master_map");
//			var master_maps=master_map.children;
//			
//			for(var a=0;a<master_Maps.length;a++){
//				master_Maps[a].index=a;
//				master_Maps[a].onmousover=function(){
//					for(var b=0;b<master_maps.length;b++0){
//						master_maps[i].style.display="none";
//					}
//					master_maps[this.index].style.display="block";
//				}
//			}


			
			
			
			

			
			
		
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
		//置顶效果	enableTop
		    
	
			
				
//			window.onscroll=function(){
//				
//				var enableTop=document.getElementsByTagName("enable_Top")
//				
//		        var _srcoll=document.body.scrollTop||document.documentElement.scrollTop;
//			    if(_srcoll=>600){
//			    	enableTop.style.display="block";	    	
//			    }
//			
//			}	
			
			
			
		
