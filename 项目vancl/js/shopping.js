//
////   取出所有按钮   获取总价方法
//var showTotal=document.getElementById("zongjijiage");
//var cks=document.querySelectorAll(".ck");
// function getTotalPrice(){
// 	
// 	var cks=document.querySelectorAll(".ck");
//  var sum=0;
//  for(var i=0;i<cks.length;i++){
//  	if(cks[i].checked==true){
//  		var tr=cks[i].parentNode.parentNode;
//  		var temp=tr.children[5].innerHTML;
//  		sum+=Number(temp);
//  	}
//  }
//  return
// }
// 
// 
//  //复选框的onchange事件
//	for(var i=0;i<cks.length;i++){
//		cks[i].onchange=function(){
//			ischeckAll();
//			showTotal.innerHTML=getTotalPrice();
//		}
//	}
//	
//	
//	//全选操作   从新计算价格
//	var checkall=document.getElementById("allCheck");
//	checkall.onchange=function(){
//		for(var i=0;i<cks.length;i++){
//			cks[i].checked=this.checked;
//		}
//		showTotal.innerHTML=getTotalPrice();
//	}
//	
//	
//	
//	
//	//判定全选函数
//	function ischeckAll(){
//	var flag=true;
//	for(var i=0;i<cks.length;i++){
//		if(cks[i].checked==false){
//			flag=false;
//		}
//	}
//	  	if(flag){
//	  		checkall.checked=true;
//	  	}else{
//	  		checkall.checked=false;
//	  	}
//		
//}
	
	
	
	

var showTotal=document.getElementById("zongjijiage");
var cks=document.querySelectorAll(".ck");
 function getTotalPrice(){
 	cks=document.querySelectorAll(".ck");
 	var sum=0;
 		for(var i=0;i<cks.length;i++){
 			if(cks[i].checked==true){
 				var tr=cks[i].parentNode.parentNode;
 				var temp=tr.children[5].innerHTML;
 				sum+=Number(temp);
 			}
 		}
 		return sum;
 	
 }
 //所有复选框的onchange事件
   for(var i=0;i<cks.length;i++){
   	cks[i].onchange=function(){
   		ischeckAll();
   		showTotal.innerHTML=getTotalPrice();
   	}
  }
  //全选操作---从新计算总价
  var checkall=document.getElementById("allCheck");
  checkall.onchange=function(){
  		for(var i=0;i<cks.length;i++){
  			cks[i].checked=this.checked;
  		}
  		showTotal.innerHTML=getTotalPrice();
  }
  //判定全选函数
  function ischeckAll(){
  	var flag=true;
  	for(var i=0;i<cks.length;i++){
  		if(cks[i].checked==false){
  			flag=false;
  		}
  	}
	  	if(flag){
	  		checkall.checked=true;
	  	}else{
	  		checkall.checked=false;
	  	}
  		
  }