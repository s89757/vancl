
//  		var flag=true;//
//  		var btn=document.getElementsByTagName("button")[0];
//	    	window.onscroll=function(){
//	    		//假如页面滚动距离大于600 让按钮显示
//	    			//--flase--显示
//	    			//--true--不让显示
//	    			
//	    			if(flag&&(document.body.scrollTop||document.documentElement.scrollTop)>600){
//	    					btn.style.display="block";
//	    			}
//	    		
//	    		
//	    	}
    		var btn=document.getElementById("setTOP")
    		
    		btn.onclick=function(){
    			
    			var timer=setInterval(function(){
    					window.scrollBy(0,-100);
    				var top=document.body.scrollTop||document.documentElement.scrollTop;
    					if(top<=0){
    						clearInterval(timer);
    					}
    			},10)
    		}
    		
    		
    		
  