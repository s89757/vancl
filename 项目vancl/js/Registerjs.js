window.onload=function(){
	
	var commonMember=document.getElementById("common_member");
	var speediness=document.getElementById("speediness");
	var registerOne=document.getElementById("registerOne");
	var registerTwo=document.getElementById("registerTwo");
	
	speediness.onclick=function(e){
		var e=e||event;
		speediness.style.background="indianred";
		registerTwo.style.display="block";
		registerOne.style.display="none";
		commonMember.style.background="white";
	}
	commonMember.onclick=function(e){
		var e=e||event;
		speediness.style.background="white";
		registerTwo.style.display="none";
		registerOne.style.display="block";
		commonMember.style.background="indianred";
	}






	
    
	var yonghuwk=document.getElementById("yonghuwk");
	var mimawk=document.getElementById("mimawk");
	var yonghucw=document.getElementById("yonghucw");
	var mimacw=document.getElementById("mimacw");
	var denglu=document.getElementById("denglu")
	
	denglu.onclick=function(){
		var registerOneo=document.getElementById("registerOneo").value;
	    var registerOnet=document.getElementById("registerOnet").value;
	    
	    var flag=true;
		if(registerOneo==""){
			yonghuwk.style.display="block"
	        flag=false;
		}else if(!/^[a-zA-Z0-9_]{3,16}$/.test(registerOneo)){
			yonghucw.style.display="block"
//			yonghuwk.style.display="none"
            flag=false;
		}
		else if(registerOnet==""){
			mimawk.style.display="block"
			flag=false;
			
		}else if(!/^[a-zA-Z]\w{5,17}$/.test(registerOnet)){
			mimacw.style.display="block"
			flag=false;
//			mimawk.style.display="none"
		}else{
			alert("真在跳转中")
		}

		
		
	
	}	
	var registerOnek=document.getElementById("registerOneo");
    
	registerOnek.onclick=function(){
		mimacw.style.display="none"
		mimawk.style.display="none"
		yonghucw.style.display="none"
		yonghuwk.style.display="none"
	}
	var registerOnekk=document.getElementById("registerOnet");
	registerOnekk.onclick=function(){
		mimacw.style.display="none"
		mimawk.style.display="none"
		yonghucw.style.display="none"
		yonghuwk.style.display="none"
	}
	
	
	
	
	
	
	//---------------验证手机快速登录-------------


		
		
		
	
	
}

var code="";
		function yanzzz(len){
			var codes=["中","大","小","m","a","6","8","7"];
			code="";
			for(var i=0;i<len;i++){
				var  index=Math.floor(Math.random()*codes.length);
				code+=codes[index];
				
			}
			return code;
		}
         
       //    registerTwot.innerHTML=yanzzz(4);

function yanzhengxinxi(){
		
		var mycode=yanzzz(4);
		
		registerTwot.innerHTML=mycode;

		
		
	}	
	












	
	
	
	
