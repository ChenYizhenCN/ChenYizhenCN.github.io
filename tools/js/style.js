/*Electric heating*/
function Calc()
{
var a=parseFloat(document.getElementById("Text1").value);
var b=parseFloat(document.getElementById("Text2").value);
var c=parseFloat(document.getElementById("Text3").value);
var d=parseFloat(document.getElementById("Text4").value);
var e=parseFloat(document.getElementById("Text5").value);
var f=parseFloat(document.getElementById("Text6").value);
var suan=a*b*(d-c)/(864*e)*f;
document.getElementById("Text7").value=suan;

}

/*end*/
/*散热系数的最大值和最小值*/
function limitInput(o){
                var value=o.value;
                var min=1.0;
                var max=2.0;
                if(parseFloat(value)<min||parseFloat(value)>max){
                    alert('输入错误，散热系数在1~2之间！');
                    o.value='';
                }
            }
/*end*/

/*Pressure conversion*/
function POWER_MEASURES() {
	this.Watt = 0.001
	this.Kilowatt = 1
	this.Horsepower = 0.745712172
	this.mHorsepower = 0.7352941
	this.kgms = 0.0098039215
	this.kcals = 4.1841004
	this.Btus = 1.05507491
	this.ftlbs = 0.0013557483731
	this.Js = 0.001
	this.Nms = 0.001
}
var power_data = new POWER_MEASURES();
function checkNum(str) {
	for (var i=0; i<str.length; i++)
	{
		var ch = str.substring(i, i + 1)
		if (ch!="." && ch!="+" && ch!="-" && ch!="e" && ch!="E" && (ch < "0" || ch > "9"))
		{
			alert("请输入有效的数字");
			return false;
		}
	}
	return true
}
function normalize(what,digits) {
	var str=""+what;
	var pp=Math.max(str.lastIndexOf("+"),str.lastIndexOf("-"));
	var idot=str.indexOf(".");
	if (idot>=1)
	{
		var ee=(pp>0)?str.substring(pp-1,str.length):"";
		digits+=idot;
		if (digits>=str.length)
			return str;
		if (pp>0 && digits>=pp)
			digits-=pp;
		var c=eval(str.charAt(digits));
		var ipos=digits-1;
		if (c>=5)
		{
			while (str.charAt(ipos)=="9")
				ipos--;
			if (str.charAt(ipos)==".")
			{
				var nc=eval(str.substring(0,idot))+1;
				if (nc==10 && ee.length>0)
				{
					nc=1;
					ee="e"+(eval(ee.substring(1,ee.length))+1);
				}
				return ""+nc+ee;
			}
			return str.substring(0,ipos)+(eval(str.charAt(ipos))+1)+ee;
		}
		else
			var ret=str.substring(0,digits)+ee;
		for (var i=0; i<ret.length; i++)
				if (ret.charAt(i)>"0" && ret.charAt(i)<="9")
					return ret;
		return str;
	}
	return str;
}
function compute(obj,val,data) {
	if (obj[val].value)
	{
		var uval=0;
		uval = obj[val].value*data[val];
		if( (uval >= 0) && (obj[val].value.indexOf("-") != -1) )
		{
			uval = -uval;    
		}
		for (var i in data)
			obj[i].value=normalize(uval/data[i],8);
	}
}




var press_data = new PRESS_MEASURES();
function normalize(what,digits) {
	theInput = String(what);
	outputDigits = parseInt(digits);
	var theOutput;
	var theShift;
	var outputExp = '';
	var outputSign = '';
	if( theInput.indexOf("e") != -1) {
		outputExp = theInput.substring(theInput.indexOf("e"), theInput.length);
		theInput = theInput.substring(0, theInput.indexOf("e"));
	} else {
		if ( theInput.indexOf("E") != -1) {
			outputExp = theInput.substring(theInput.indexOf("E"), theInput.length);
			theInput = theInput.substring(0, theInput.indexOf("e"));
		}
		if(theInput.substring(0, 1) == '-') {
			outputSign = '-';
			theInput = theInput.substring(1, theInput.length);
		}
	}
	if(parseFloat(theInput) >= 1.0) {
		var pointPos = theInput.indexOf(".");
		if(pointPos == -1) pointPos = theInput.length;
		theShift = pointPos - outputDigits;
	} else {
		var notNull = String(theInput).lastIndexOf('.') + 1;
		if(notNull == 1 ) notNull += 1;
		while(String(theInput).charAt(notNull) == '0') {
			notNull++;
		}
		notNull -= 2;
		theShift = -(outputDigits + notNull);
	}
	theOutput = Math.round(theInput/Math.pow(10, theShift));
	if(theShift >= 0) {
		for(var i = 1; i <= theShift; i++) {
			theOutput += '0';
		}
	} else {
		theOutput += '';
		if(theOutput.length+theShift > 0) {
			theOutput = theOutput.substring(0, theOutput.length+theShift) + '.' + theOutput.substring((theOutput.length + theShift), theOutput.length);
		} else {
			var theOutput1 = '0.';
			for(var i =-1; i >= theOutput.length + theShift; i--) {
				theOutput1 += '0';
			}
			theOutput = theOutput1 + theOutput;
		}
		while(theOutput.charAt(theOutput.length - 1) == '0') {
			theOutput = theOutput.substring(0, theOutput.length - 1);
		}
		if(theOutput.charAt(theOutput.length-1) == '.') {
			theOutput = theOutput.substring ( 0, theOutput.length-1 );
		}
	}
	theOutput = outputSign + theOutput + outputExp;
	return theOutput;
}
function compute(obj,val,data) {
	if (obj[val].value) {
		var uval=0;
		uval = obj[val].value*data[val];
		if( (uval >= 0) && (String(obj[val].value).charAt(0) == '-') ) uval = -uval;
		for (var i in data) obj[i].value=normalize(uval/data[i],8);
	}
}
function PRESS_MEASURES() {
	this.mpa=1000000
	this.mKilopascal = 1000
	this.mHectopascal = 100
	this.mPascal = 1
	this.mBar = 100000
	this.mMillibar = 100
	this.mAtm = 101325
	this.mMillimeter_Hg = this.mAtm / 760
	this.engInch_Hg = 25.4 * this.mMillimeter_Hg
	this.engPound_sq_inch = 6894.757 
	this.engPound_sq_foot = this.engPound_sq_inch / 144
	this.xpressKg_sq_cm = 98066.5
	this.xpressKg_sq_m = 9.80665
	this.mmmH2O = 1/0.101972
}
/*end*/

/*Temperature conversion*/
function computeTempC(obj) {
	var tempC = parseFloat(obj.tempCelsius.value)
	if( (tempC >= 0) && (obj.tempCelsius.value.indexOf("-") != -1) ) {
		tempC = -tempC;
	}
	if(!(tempC < -273.15) ) {
		var tempK = tempC + 273.15
		var tempF = 32 + (tempC * 9 / 5)
		var tempRa = tempK*1.8
		var tempRe = tempC/1.25
		obj.tempKelvin.value = tempK
		obj.tempFahr.value = tempF
		obj.tempRankine.value = tempRa
		obj.tempReaumur.value = tempRe
	} else {
		obj.tempKelvin.value = "ERROR"
		obj.tempFahr.value = "ERROR"
		obj.tempRankine.value = "ERROR"
		obj.tempReaumur.value = "ERROR"
	}
}
function computeTempF(obj) {
	var tempF = parseFloat(obj.tempFahr.value)
	if( (tempF >= 0) && (obj.tempFahr.value.indexOf("-") != -1) ) tempF = -tempF;
	 if(!(tempF < -459.666666) ) {
		var tempC = (tempF - 32) * 5 / 9
		var tempK = tempC + 273.15
		var tempRa = tempK*1.8
		var tempRe = tempC/1.25
		obj.tempCelsius.value = tempC
		obj.tempKelvin.value = tempK
		obj.tempRankine.value = tempRa
		obj.tempReaumur.value = tempRe
	} else  {
		obj.tempCelsius.value = "ERROR"
		obj.tempKelvin.value = "ERROR"
		obj.tempRankine.value = "ERROR"
		obj.tempReaumur.value = "ERROR"
	}
}
function computeTempK(obj) {
	var tempK = parseFloat(obj.tempKelvin.value)
	if( (tempK >= 0) && (obj.tempKelvin.value.indexOf("-") != -1) ) {
		tempK = -tempK;
	}
	if(!(tempK < 0) ) {
		var tempC = tempK - 273.15
		var tempF = 32 + (tempC * 9 / 5)
		var tempRa = tempK*1.8
		var tempRe = tempC/1.25
		obj.tempCelsius.value = tempC
		obj.tempFahr.value = tempF
		obj.tempRankine.value = tempRa
		obj.tempReaumur.value = tempRe
	} else {
		obj.tempCelsius.value = "ERROR"
		obj.tempFahr.value = "ERROR"
		obj.tempRankine.value = "ERROR"
		obj.tempReaumur.value = "ERROR"
	}
}
function computeTempRa(obj) {
	var tempRa = parseFloat(obj.tempRankine.value)
	if( (tempRa >= 0) && (obj.tempRankine.value.indexOf("-") != -1) ) {
		tempRa = -tempRa;
	}
	if(!(tempRa < 0) ) {
		var tempK = tempRa/1.8
		var tempC = tempK  - 273.15
		var tempF = 32 + (tempC * 9 / 5)
		var tempRe = tempC/1.25
		obj.tempCelsius.value = tempC
		obj.tempFahr.value = tempF
		obj.tempKelvin.value = tempK
		obj.tempReaumur.value = tempRe
	} else {
		obj.tempCelsius.value = "ERROR"
		obj.tempFahr.value = "ERROR"
		obj.tempKelvin.value = "ERROR"
		obj.tempReaumur.value = "ERROR"
	}
}
function computeTempRe(obj) {
	var tempRe = parseFloat(obj.tempReaumur.value)
	if( (tempRe >= 0) && (obj.tempReaumur.value.indexOf("-") != -1) ) {
		tempRe = -tempRe;
	}
	if(!(tempRe < -218.5199999999) ) {
		var tempC = tempRe*1.25
		var tempK = tempC + 273.15
		var tempF = 32 + (tempC * 9 / 5)
		var tempRa = tempK*1.8
		obj.tempCelsius.value = tempC
		obj.tempFahr.value = tempF
		obj.tempKelvin.value = tempK
		obj.tempRankine.value = tempRa
	} else {
		obj.tempCelsius.value = "ERROR"
		obj.tempFahr.value = "ERROR"
		obj.tempKelvin.value = "ERROR"
		obj.tempRankine.value = "ERROR"
	}
}
/*end*/

/*Mass calculation*/
function change(dnf){
	      var db=document.getElementById("select");
		  var va=db.options[db.selectedIndex].value;
		if(va==1){
			var dnf=parseFloat(document.getElementById("text8").value);
			}else if(va==2){
			var dnf=parseFloat(document.getElementById("text8").value)*0.001;
			}else if(va==3){
			var dnf=parseFloat(document.getElementById("text8").value)*1000;
			}else if(va==4){
			var dnf=parseFloat(document.getElementById("text8").value)*0.000001;
			}else if(va==5){
			var dnf=parseFloat(document.getElementById("text8").value)*0.001;
			}else if(va==6){
			var dnf=parseFloat(document.getElementById("text8").value);
			}
		 return dnf;
  }
  
function check(dol){
	      var a=document.getElementById("myselect");
		  var vs=a.options[a.selectedIndex].value;
		if(vs==1){
			var dol=parseFloat(document.getElementById("text9").value);
			}else if(vs==2){
			var dol=parseFloat(document.getElementById("text9").value)*3600;
			}else if(vs==3){
			var dol=parseFloat(document.getElementById("text9").value)*60;
			}else if(vs==4){
			var dol=parseFloat(document.getElementById("text9").value)*3.6;
			}else if(vs==5){
			var dol=parseFloat(document.getElementById("text9").value)*0.06;
			}else if(vs==6){
			var dol=parseFloat(document.getElementById("text9").value)*0.001;
			}
		return dol;
   }
function sal(){
	var density=change();
	var volume=check();
	var quality=density*volume;
	document.getElementById("text10").value=quality;
	}
/*end*/

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

function startTime1(){
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
	y=document.getElementById("time1");
	y.innerHTML="北京时间&nbsp;"+year+"年"+month+"月"+date+"日"+a+":"+b+":"+c+week+"&nbsp;<点击收藏>";
	t=setTimeout(function(){
		startTime1();
		}
	,1000)
	}
function checkTime(i){
	if(i<10){
		i="0"+i;
		}
	return i;
	}

	
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


/*copy*/
function copy(){
	var b=document.getElementById("text10").value;
	document.getElementById("Text1").value=b;
	}

function copy1(){
  var a=document.getElementById("text10");
  a.select(); // 选择对象
  document.execCommand("Copy"); // 执行浏览器复制命令
  alert("已复制成功可粘贴,且计算结果已自动填入到下面的计算框中\n\n您也可以在下面框中自行更改，但为了数据准确性不建议！");	  
}



function copy2(){
	var c=document.getElementById("di1").value;
	document.getElementById("text8").value=c;
	}

function copy3(){
  var d=document.getElementById("di1");
  d.select(); // 选择对象
  document.execCommand("Copy"); // 执行浏览器复制命令
  alert("已复制成功,请注意密度单位");	  
}
	
	
	
function copy4(){
	var e=document.getElementById("bi1").value;
	document.getElementById("Text2").value=e;
	}

function copy5(){
  var f=document.getElementById("bi1");
  f.select(); // 选择对象
  document.execCommand("Copy"); // 执行浏览器复制命令
  alert("已复制成功");	  
}	
/*end*/
function sun(){
	var a=parseFloat(document.getElementById("text1").value);
	var b=parseFloat(document.getElementById("text2").value);
	var c=parseFloat(document.getElementById("text3").value);
	var d=parseFloat(document.getElementById("text4").value);
	var e=parseFloat(document.getElementById("text5").value);
	var f=((d-c)/(b-a)*(e-a)+c).toFixed(3);
	document.getElementById("text6").value=f;
	}
function son(){
	var a=parseFloat(document.getElementById("text1").value);
	var b=parseFloat(document.getElementById("text2").value);
	var c=parseFloat(document.getElementById("text3").value);
	var d=parseFloat(document.getElementById("text4").value);
	var f=parseFloat(document.getElementById("text6").value);
	var e=((f-c)*(b-a)/(d-c)+a).toFixed(3);
	document.getElementById("text5").value=e;
	}
