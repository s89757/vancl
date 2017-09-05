window.onload=function(){
	
	var inputOnewks=document.getElementById("inputOnewk");
    var inputTwowks=document.getElementById("inputTwowk");
    var inputThreewks=document.getElementById("inputThreewk");
    var inputFourwks=document.getElementById("inputFourwk");
    var inputOnecws=document.getElementById("inputOnecw");
    var inputTwocws=document.getElementById("inputTwocw");
    var inputThreecws=document.getElementById("inputThreecw");	
	var inputFourcws=document.getElementById("inputFourcw");
   
    var registers=document.getElementById("registers");
    var btnBtn=document.getElementById("btnBtn");
//  btnBtn.onclic=function(){
//  	if
//  	
//  	registers.style.color="red";
//  }
    
//  function yuedu(){
//  	
//  	console.log(registers);
//  }
    
    
    registers.onclick=function(){
    	
    	
    	var inputOnes=document.getElementById("inputOne").value;
    	var inputTwos=document.getElementById("inputTwo").value;
    	var inputThrees=document.getElementById("inputThree").value;
    	var inputFours=document.getElementById("inputFour").value;
    	
    	if(inputOnes==""){
    		inputOnewks.style.display="block";
    		
    	}else if(!/^1(3|4|5|7|8)\d{9}$/.test(inputOnes)){
    		inputOnecws.style.display="block";
    	}else if(inputTwos==""){
    		
    		inputTwowks.style.display="block";
    	}else if(!/^[a-z0-9]{6,8}$/.test(inputTwos)){
    		inputTwocws.style.display="block";
//  		console.log(inputTwocws);
    	}else if(inputThrees==""){
    		
    		inputThreewks.style.display="block";
    	}else if(!/^[a-zA-Z0-9]{6,20}$/.test(inputThrees)){
    		inputThreecws.style.display="block";
    	}else if(inputFours==""){
    		
    		inputFourwks.style.display="block";
    	}else if(inputFours!=inputThrees){
    		inputFourcws.style.display="block";
    	}
    	else{
    		alert("正在提交中")
    	}
    	
    	
    	
        
    	
    	
    }
    
    
    
    var inputOne=document.getElementById("inputOne");
    inputOne.onclick=function(){
    	inputOnewks.style.display="none";
    	inputOnecws.style.display="none";
    	inputTwowks.style.display="none";
    	inputTwocws.style.display="none";
    	inputThreewks.style.display="none";
    	inputThreecws.style.display="none";
    	inputFourwks.style.display="none";
    	inputFourcws.style.display="none";
    }
    var inputTwo=document.getElementById("inputTwo");
    inputTwo.onclick=function(){
    	inputOnewks.style.display="none";
    	inputOnecws.style.display="none";
    	inputTwowks.style.display="none";
    	inputTwocws.style.display="none";
    	inputThreewks.style.display="none";
    	inputThreecws.style.display="none";
    	inputFourwks.style.display="none";
    	inputFourcws.style.display="none";
    }
    var inputThree=document.getElementById("inputThree");
    inputThree.onclick=function(){
    	inputOnewks.style.display="none";
    	inputOnecws.style.display="none";
    	inputTwowks.style.display="none";
    	inputTwocws.style.display="none";
    	inputThreewks.style.display="none";
    	inputThreecws.style.display="none";
    	inputFourwks.style.display="none";
    	inputFourcws.style.display="none";
    }
    var inputFour=document.getElementById("inputFour");
    inputFour.onclick=function(){
    	inputOnewks.style.display="none";
    	inputOnecws.style.display="none";
    	inputTwowks.style.display="none";
    	inputTwocws.style.display="none";
    	inputThreewks.style.display="none";
    	inputThreecws.style.display="none";
    	inputFourwks.style.display="none";
    	inputFourcws.style.display="none";
    }
    
    
    
    
    
    

    
    
    
}
