function change(dnf){
	      var db=document.getElementById("select");
		  var va=db.options[db.selectedIndex].value;
		if(va==1){
			var dnf=parseFloat(document.getElementById("text13").value);
			}else if(va==2){
			var dnf=parseFloat(document.getElementById("text13").value)*0.001;
			}else if(va==3){
			var dnf=parseFloat(document.getElementById("text13").value)*1000;
			}else if(va==4){
			var dnf=parseFloat(document.getElementById("text13").value)*0.000001;
			}else if(va==5){
			var dnf=parseFloat(document.getElementById("text13").value)*0.001;
			}else if(va==6){
			var dnf=parseFloat(document.getElementById("text13").value);
			}
		 return dnf;
    }
	
function xiaoshu(){
	var db=document.getElementById("select6");
	var vb=db.options[db.selectedIndex].value;
	var a=change();
	var txt1=document.getElementById("text1").value;
	var txt2=document.getElementById("text2").value;
	var txt3=document.getElementById("text3").value;
	var txt4=document.getElementById("text4").value;
	var txt5=document.getElementById("text5").value;
	var txt6=document.getElementById("text6").value;
	var txt7=document.getElementById("text7").value;
	var txt8=document.getElementById("text8").value;
	var txt9=document.getElementById("text9").value;
	var txt10=document.getElementById("text10").value;
	var txt11=document.getElementById("text11").value;
	var txt12=document.getElementById("text12").value;
	var txt13=document.getElementById("text13").value;
	
 if(txt13 != ""){	
   if(txt1 != ""){
	document.getElementById("text1").value=(txt1*1).toPrecision(vb);
	document.getElementById("text2").value=(txt1/60).toPrecision(vb);
	document.getElementById("text3").value=(txt1/3600).toPrecision(vb);
	document.getElementById("text4").value=(txt1*10/36).toPrecision(vb);
	document.getElementById("text5").value=(txt1*100/6).toPrecision(vb);
	document.getElementById("text6").value=(txt1*1000).toPrecision(vb);
	document.getElementById("text7").value=(txt1*a).toPrecision(vb);
	document.getElementById("text8").value=(txt1*a/60).toPrecision(vb);
	document.getElementById("text9").value=(txt1*a/3600).toPrecision(vb);
	document.getElementById("text10").value=(txt1*a/1000).toPrecision(vb);
	document.getElementById("text11").value=(txt1*a/60000).toPrecision(vb);
	document.getElementById("text12").value=(txt1*a/3600000).toPrecision(vb);
	}
   if(txt2 != ""){
	document.getElementById("text2").value=(txt2*1).toPrecision(vb);
	document.getElementById("text1").value=(txt2*60).toPrecision(vb);
	document.getElementById("text3").value=(txt2/60).toPrecision(vb);
	document.getElementById("text4").value=(txt2*100/6).toPrecision(vb);
	document.getElementById("text5").value=(txt2*1000).toPrecision(vb);
	document.getElementById("text6").value=(txt2*60000).toPrecision(vb);
	document.getElementById("text7").value=(txt2*a*60).toPrecision(vb);
	document.getElementById("text8").value=(txt2*a).toPrecision(vb);
	document.getElementById("text9").value=(txt2*a/60).toPrecision(vb);
	document.getElementById("text10").value=(txt2*a*6/100).toPrecision(vb);
	document.getElementById("text11").value=(txt2*a/1000).toPrecision(vb);
	document.getElementById("text12").value=(txt2*a/60000).toPrecision(vb);
	}
   if(txt3 != ""){
	document.getElementById("text3").value=(txt3*1).toPrecision(vb);
	document.getElementById("text1").value=(txt3*3600).toPrecision(vb);
	document.getElementById("text2").value=(txt3*60).toPrecision(vb);
	document.getElementById("text4").value=(txt3*1000).toPrecision(vb);
	document.getElementById("text5").value=(txt3*60000).toPrecision(vb);
	document.getElementById("text6").value=(txt3*3600000).toPrecision(vb);
	document.getElementById("text7").value=(txt3*a*3600).toPrecision(vb);
	document.getElementById("text8").value=(txt3*a*60).toPrecision(vb);
	document.getElementById("text9").value=(txt3*a).toPrecision(vb);
	document.getElementById("text10").value=(txt3*a*36/10).toPrecision(vb);
	document.getElementById("text11").value=(txt3*a*6/100).toPrecision(vb);
	document.getElementById("text12").value=(txt3*a/1000).toPrecision(vb);
	}
   if(txt4 != ""){
	document.getElementById("text4").value=(txt4*1).toPrecision(vb);
	document.getElementById("text1").value=(txt4*36/10).toPrecision(vb);
	document.getElementById("text2").value=(txt4*6/100).toPrecision(vb);
	document.getElementById("text3").value=(txt4/1000).toPrecision(vb);
	document.getElementById("text5").value=(txt4*60).toPrecision(vb);
	document.getElementById("text6").value=(txt4*3600).toPrecision(vb);
	document.getElementById("text7").value=(txt4*a*36/10).toPrecision(vb);
	document.getElementById("text8").value=(txt4*a*6/100).toPrecision(vb);
	document.getElementById("text9").value=(txt4*a/1000).toPrecision(vb);
	document.getElementById("text10").value=(txt4*a*36/10000).toPrecision(vb);
	document.getElementById("text11").value=(txt4*a*6/100000).toPrecision(vb);
	document.getElementById("text12").value=(txt4*a/1000000).toPrecision(vb);
	}
   if(txt5 != ""){
	document.getElementById("text5").value=(txt5*1).toPrecision(vb);
	document.getElementById("text1").value=(txt5*6/100).toPrecision(vb);
	document.getElementById("text2").value=(txt5/1000).toPrecision(vb);
	document.getElementById("text3").value=(txt5/60000).toPrecision(vb);
	document.getElementById("text4").value=(txt5/60).toPrecision(vb);
	document.getElementById("text6").value=(txt5*60).toPrecision(vb);
	document.getElementById("text7").value=(txt5*a*6/100).toPrecision(vb);
	document.getElementById("text8").value=(txt5*a/1000).toPrecision(vb);
	document.getElementById("text9").value=(txt5*a/60000).toPrecision(vb);
	document.getElementById("text10").value=(txt5*a*6/100000).toPrecision(vb);
	document.getElementById("text11").value=(txt5*a/1000000).toPrecision(vb);
	document.getElementById("text12").value=(txt5*a/60000000).toPrecision(vb);
	}
   if(txt6 != ""){
	document.getElementById("text6").value=(txt6*1).toPrecision(vb);
	document.getElementById("text1").value=(txt6/1000).toPrecision(vb);
	document.getElementById("text2").value=(txt6/60000).toPrecision(vb);
	document.getElementById("text3").value=(txt6/3600000).toPrecision(vb);
	document.getElementById("text4").value=(txt6/3600).toPrecision(vb);
	document.getElementById("text5").value=(txt6/60).toPrecision(vb);
	document.getElementById("text7").value=(txt6*a/1000).toPrecision(vb);
	document.getElementById("text8").value=(txt6*a/60000).toPrecision(vb);
	document.getElementById("text9").value=(txt6*a/3600000).toPrecision(vb);
	document.getElementById("text10").value=(txt6*a/1000000).toPrecision(vb);
	document.getElementById("text11").value=(txt6*a/60000000).toPrecision(vb);
	document.getElementById("text12").value=(txt6*a/3600000000).toPrecision(vb);
	}
   if(txt7 != ""){
	document.getElementById("text7").value=(txt7*1).toPrecision(vb);
	document.getElementById("text1").value=(txt7/a).toPrecision(vb);
	document.getElementById("text2").value=(txt7/(60*a)).toPrecision(vb);
	document.getElementById("text3").value=(txt7/(3600*a)).toPrecision(vb);
	document.getElementById("text4").value=(txt7*10/(36*a)).toPrecision(vb);
	document.getElementById("text5").value=(100*txt7/(a*6)).toPrecision(vb);
	document.getElementById("text6").value=(1000*txt7/a).toPrecision(vb);
	document.getElementById("text8").value=(txt7/60).toPrecision(vb);
	document.getElementById("text9").value=(txt7/3600).toPrecision(vb);
	document.getElementById("text10").value=(txt7/1000).toPrecision(vb);
	document.getElementById("text11").value=(txt7/60000).toPrecision(vb);
	document.getElementById("text12").value=(txt7/3600000).toPrecision(vb);
	}
   if(txt8 != ""){
	document.getElementById("text8").value=(txt8*1).toPrecision(vb);
	document.getElementById("text1").value=(60*txt8/a).toPrecision(vb);
	document.getElementById("text2").value=(txt8/a).toPrecision(vb);
	document.getElementById("text3").value=(txt8/(60*a)).toPrecision(vb);
	document.getElementById("text4").value=(txt8*100/(6*a)).toPrecision(vb);
	document.getElementById("text5").value=(txt8*1000/a).toPrecision(vb);
	document.getElementById("text6").value=(txt8*60000/a).toPrecision(vb);
	document.getElementById("text7").value=(txt8*60).toPrecision(vb);
	document.getElementById("text9").value=(txt8/60).toPrecision(vb);
	document.getElementById("text10").value=(txt8*6/100).toPrecision(vb);
	document.getElementById("text11").value=(txt8/1000).toPrecision(vb);
	document.getElementById("text12").value=(txt8/60000).toPrecision(vb);
	}
   if(txt9 != ""){
	document.getElementById("text9").value=(txt9*1).toPrecision(vb);
	document.getElementById("text1").value=(3600*txt9/a).toPrecision(vb);
	document.getElementById("text2").value=(60*txt9/a).toPrecision(vb);
	document.getElementById("text3").value=(txt9/a).toPrecision(vb);
	document.getElementById("text4").value=(1000*txt9/a).toPrecision(vb);
	document.getElementById("text5").value=(60000*txt9/a).toPrecision(vb);
	document.getElementById("text6").value=(3600000*txt9/a).toPrecision(vb);
	document.getElementById("text7").value=(3600*txt9).toPrecision(vb);
	document.getElementById("text8").value=(60*txt9).toPrecision(vb);
	document.getElementById("text10").value=(36*txt9/10).toPrecision(vb);
	document.getElementById("text11").value=(6*txt9/100).toPrecision(vb);
	document.getElementById("text12").value=(txt9/1000).toPrecision(vb);
	}
   if(txt10 != ""){
	document.getElementById("text10").value=(txt10*1).toPrecision(vb);
	document.getElementById("text1").value=(txt10*1000/a).toPrecision(vb);
	document.getElementById("text2").value=(txt10*100/(6*a)).toPrecision(vb);
	document.getElementById("text3").value=(txt10*10/(36*a)).toPrecision(vb);
	document.getElementById("text4").value=(txt10*10000/(36*a)).toPrecision(vb);
	document.getElementById("text5").value=(txt10*100000/(6*a)).toPrecision(vb);
	document.getElementById("text6").value=(txt10*1000000/a).toPrecision(vb);
	document.getElementById("text7").value=(txt10*1000).toPrecision(vb);
	document.getElementById("text8").value=(txt10*100/6).toPrecision(vb);
	document.getElementById("text9").value=(txt10*10/36).toPrecision(vb);
	document.getElementById("text11").value=(txt10/60).toPrecision(vb);
	document.getElementById("text12").value=(txt10/3600).toPrecision(vb);
	}
   if(txt11 != ""){
	document.getElementById("text11").value=(txt11*1).toPrecision(vb);
	document.getElementById("text1").value=(txt11*60000/a).toPrecision(vb);
	document.getElementById("text2").value=(txt11*1000/a).toPrecision(vb);
	document.getElementById("text3").value=(txt11*100/(6*a)).toPrecision(vb);
	document.getElementById("text4").value=(txt11*100000/(6*a)).toPrecision(vb);
	document.getElementById("text5").value=(txt11*1000000/a).toPrecision(vb);
	document.getElementById("text6").value=(txt11*60000000/a).toPrecision(vb);
	document.getElementById("text7").value=(txt11*60000).toPrecision(vb);
	document.getElementById("text8").value=(txt11*1000).toPrecision(vb);
	document.getElementById("text9").value=(txt11*100/6).toPrecision(vb);
	document.getElementById("text10").value=(txt11*60).toPrecision(vb);
	document.getElementById("text12").value=(txt11/60).toPrecision(vb);
	}
   if(txt12 != ""){
	document.getElementById("text12").value=(txt12*1).toPrecision(vb);
	document.getElementById("text1").value=(txt12*3600000/a).toPrecision(vb);
	document.getElementById("text2").value=(txt12*60000/a).toPrecision(vb);
	document.getElementById("text3").value=(txt12*1000/a).toPrecision(vb);
	document.getElementById("text4").value=(txt12*1000000/a).toPrecision(vb);
	document.getElementById("text5").value=(txt12*60000000/a).toPrecision(vb);
	document.getElementById("text6").value=(txt12*3600000000/a).toPrecision(vb);
	document.getElementById("text7").value=(txt12*3600000).toPrecision(vb);
	document.getElementById("text8").value=(txt12*60000).toPrecision(vb);
	document.getElementById("text9").value=(txt12*1000).toPrecision(vb);
	document.getElementById("text10").value=(txt12*3600).toPrecision(vb);
	document.getElementById("text11").value=(txt12*60).toPrecision(vb);
	}
  }else{
	 if(txt1 != ""){
		document.getElementById("text1").value=(txt1*1).toPrecision(vb);
		document.getElementById("text2").value=(txt1/60).toPrecision(vb);
		document.getElementById("text3").value=(txt1/3600).toPrecision(vb);
		document.getElementById("text4").value=(txt1*10/36).toPrecision(vb);
		document.getElementById("text5").value=(txt1*100/6).toPrecision(vb);
		document.getElementById("text6").value=(txt1*1000).toPrecision(vb);
	   }
	 if(txt2 != ""){
		document.getElementById("text2").value=(txt2*1).toPrecision(vb);
		document.getElementById("text1").value=(txt2*60).toPrecision(vb);
		document.getElementById("text3").value=(txt2/60).toPrecision(vb);
		document.getElementById("text4").value=(txt2*100/6).toPrecision(vb);
		document.getElementById("text5").value=(txt2*1000).toPrecision(vb);
		document.getElementById("text6").value=(txt2*60000).toPrecision(vb);
	   }
	 if(txt3 != ""){
		document.getElementById("text3").value=(txt3*1).toPrecision(vb);
		document.getElementById("text1").value=(txt3*3600).toPrecision(vb);
		document.getElementById("text2").value=(txt3*60).toPrecision(vb);
		document.getElementById("text4").value=(txt3*1000).toPrecision(vb);
		document.getElementById("text5").value=(txt3*60000).toPrecision(vb);
		document.getElementById("text6").value=(txt3*3600000).toPrecision(vb);
	   }
	 if(txt4 != ""){
		document.getElementById("text4").value=(txt4*1).toPrecision(vb);
		document.getElementById("text1").value=(txt4*36/10).toPrecision(vb);
		document.getElementById("text2").value=(txt4*6/100).toPrecision(vb);
		document.getElementById("text3").value=(txt4/1000).toPrecision(vb);
		document.getElementById("text5").value=(txt4*60).toPrecision(vb);
		document.getElementById("text6").value=(txt4*3600).toPrecision(vb);
	   }
	 if(txt5 != ""){
		document.getElementById("text5").value=(txt5*1).toPrecision(vb);
		document.getElementById("text1").value=(txt5*6/100).toPrecision(vb);
		document.getElementById("text2").value=(txt5/1000).toPrecision(vb);
		document.getElementById("text3").value=(txt5/60000).toPrecision(vb);
		document.getElementById("text4").value=(txt5/60).toPrecision(vb);
		document.getElementById("text6").value=(txt5*60).toPrecision(vb);
	   }
	 if(txt6 != ""){
		document.getElementById("text6").value=(txt6*1).toPrecision(vb);
		document.getElementById("text1").value=(txt6/1000).toPrecision(vb);
		document.getElementById("text2").value=(txt6/60000).toPrecision(vb);
		document.getElementById("text3").value=(txt6/3600000).toPrecision(vb);
		document.getElementById("text4").value=(txt6/3600).toPrecision(vb);
		document.getElementById("text5").value=(txt6/60).toPrecision(vb);
	   }
	 if(txt7 != ""){
		document.getElementById("text7").value=(txt7*1).toPrecision(vb);
		document.getElementById("text8").value=(txt7/60).toPrecision(vb);
		document.getElementById("text9").value=(txt7/3600).toPrecision(vb);
		document.getElementById("text10").value=(txt7/1000).toPrecision(vb);
		document.getElementById("text11").value=(txt7/60000).toPrecision(vb);
		document.getElementById("text12").value=(txt7/3600000).toPrecision(vb);
	   }
	 if(txt8 != ""){
		document.getElementById("text8").value=(txt8*1).toPrecision(vb);
		document.getElementById("text7").value=(txt8*60).toPrecision(vb);
		document.getElementById("text9").value=(txt8/60).toPrecision(vb);
		document.getElementById("text10").value=(txt8*6/100).toPrecision(vb);
		document.getElementById("text11").value=(txt8/1000).toPrecision(vb);
		document.getElementById("text12").value=(txt8/60000).toPrecision(vb);
	   }
	 if(txt9 != ""){
		document.getElementById("text9").value=(txt9*1).toPrecision(vb);
		document.getElementById("text7").value=(3600*txt9).toPrecision(vb);
		document.getElementById("text8").value=(60*txt9).toPrecision(vb);
		document.getElementById("text10").value=(36*txt9/10).toPrecision(vb);
		document.getElementById("text11").value=(6*txt9/100).toPrecision(vb);
		document.getElementById("text12").value=(txt9/1000).toPrecision(vb);
	   }
	 if(txt10 != ""){
		document.getElementById("text10").value=(txt10*1).toPrecision(vb);
		document.getElementById("text7").value=(txt10*1000).toPrecision(vb);
		document.getElementById("text8").value=(txt10*100/6).toPrecision(vb);
		document.getElementById("text9").value=(txt10*10/36).toPrecision(vb);
		document.getElementById("text11").value=(txt10/60).toPrecision(vb);
		document.getElementById("text12").value=(txt10/3600).toPrecision(vb);
	   }
	 if(txt11 != ""){
		document.getElementById("text11").value=(txt11*1).toPrecision(vb);
		document.getElementById("text7").value=(txt11*60000).toPrecision(vb);
		document.getElementById("text8").value=(txt11*1000).toPrecision(vb);
		document.getElementById("text9").value=(txt11*100/6).toPrecision(vb);
		document.getElementById("text10").value=(txt11*60).toPrecision(vb);
		document.getElementById("text12").value=(txt11/60).toPrecision(vb);
	   }
	 if(txt12 != ""){
		document.getElementById("text12").value=(txt12*1).toPrecision(vb);
		document.getElementById("text7").value=(txt12*3600000).toPrecision(vb);
		document.getElementById("text8").value=(txt12*60000).toPrecision(vb);
		document.getElementById("text9").value=(txt12*1000).toPrecision(vb);
		document.getElementById("text10").value=(txt12*3600).toPrecision(vb);
		document.getElementById("text11").value=(txt12*60).toPrecision(vb);
	   }
  }
}
/*Get local time*/
function startTime(){
	var x=new Date();
	var year=x.getFullYear();
	var month=x.getMonth()+1;
	var date=x.getDate();
	var a=x.getHours();
	a=checkTime(a);
	var b=x.getMinutes();
	b=checkTime(b);
	var c=x.getSeconds();
	c=checkTime(c);
	var week;
	switch (x.getDay()){ 
    case 1: week="星期一"; break;
    case 2: week="星期二"; break;
    case 3: week="星期三"; break;
    case 4: week="星期四"; break;
    case 5: week="星期五"; break;
    case 6: week="星期六"; break;
    default: week="星期日";
	}
	y=document.getElementById("time");
	y.innerHTML="北京时间&nbsp;"+year+"年"+month+"月"+date+"日"+a+":"+b+":"+c+week+"&nbsp;<点击收藏>";
	t=setTimeout(function(){
		startTime();
		}
	,1000)
	}
function checkTime(i){
	if(i<10){
		i="0"+i;
		}
	return i;
	}
/*end*/

/*Collection*/	
function AddFavorite(title,url){
try{
   window.external.addFavorite(url,title);
 }
catch(e){
 try{
    window.sidebar.addPanel(title,url,"");
  }
 catch(e){
   alert("抱歉，您所使用的浏览器无法完成此操作。\n\n请使用快捷键Ctrl+D进行收藏！");
   }
 }
}
/*end*/	
function copy2(){
	var c=document.getElementById("di1").value;
	document.getElementById("text13").value=c;
	}

function copy3(){
  var d=document.getElementById("di1");
  d.select(); // 选择对象
  document.execCommand("Copy"); // 执行浏览器复制命令
  alert("已复制成功,请注意密度单位");	  
}


function change1(one){
	 var db=document.getElementById("select1");
	 var va=db.options[db.selectedIndex].value;
	 if(va==1){
		 var one=parseFloat(document.getElementById("text1").value)*1/1000;
	     }
	 if(va==2){
		 var one=parseFloat(document.getElementById("text1").value)*1/100;
		 }
	 if(va==3){
		 var one=parseFloat(document.getElementById("text1").value)*1/10;
		 }
	 if(va==4){
		 var one=parseFloat(document.getElementById("text1").value);
		 }
		 return one;
}

function change2(two){
	 var db=document.getElementById("select2");
	 var va=db.options[db.selectedIndex].value;
	 if(va==1){
		 var two=parseFloat(document.getElementById("text2").value)*3600;
		 }
	 if(va==2){
		 var two=parseFloat(document.getElementById("text2").value)*60;
		 }
	 if(va==3){
		 var two=parseFloat(document.getElementById("text2").value);
		 }
		 return two;
	}

function yuan(){
	var d=change1();
	var b=change2();
	var r=d/2;
	var area=r*r*Math.PI;
	var liuliang=area*b;
	document.getElementById("text6").value=liuliang;
	}
	
function change3(three){
	var db=document.getElementById("select3");
	var va=db.options[db.selectedIndex].value;
	 if(va==1){
		 var three=parseFloat(document.getElementById("text3").value)*1/1000;
	     }
	 if(va==2){
		 var three=parseFloat(document.getElementById("text3").value)*1/100;
		 }
	 if(va==3){
		 var three=parseFloat(document.getElementById("text3").value)*1/10;
		 }
	 if(va==4){
		 var three=parseFloat(document.getElementById("text3").value);
		 }
		 return three;
	}
	
function change4(four){
	var db=document.getElementById("select4");
	var va=db.options[db.selectedIndex].value;
	 if(va==1){
		 var four=parseFloat(document.getElementById("text4").value)*1/1000;
	     }
	 if(va==2){
		 var four=parseFloat(document.getElementById("text4").value)*1/100;
		 }
	 if(va==3){
		 var four=parseFloat(document.getElementById("text4").value)*1/10;
		 }
	 if(va==4){
		 var four=parseFloat(document.getElementById("text4").value);
		 }
		 return four;
	}
	
function change5(five){
	var db=document.getElementById("select5");
	var va=db.options[db.selectedIndex].value;
	if(va==1){
		five=parseFloat(document.getElementById("text5").value)*3600;
		}
	if(va==2){
		five=parseFloat(document.getElementById("text5").value)*60;
		}
	if(va==3){
		five=parseFloat(document.getElementById("text5").value);
		}
		return five;
	}
	
function fang(){
	var c=change3();
	var d=change4();
	var e=change5();
	var liuliang1=c*d*e;
	document.getElementById("text7").value=liuliang1;
	}