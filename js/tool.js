<?php
    require_once("style.php");
?>
<style>
[UnSelect=YES]{
      -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Chrome/Safari/Opera */
    -khtml-user-select: none; /* Konqueror */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
}
#mask{
    width:100%;
    height:100%;
    background:#000;
    opacity:0.5;
    position:fixed;
    top:0;
    left: 0;
    z-index: 100;
    display:none;
}
.notes{
    color:#FFFFFF;
    font-weight:800;
    font-size:20px;
}
</style>
<body>
<div id="mask"></div>
<div id="control" class="ui inverted segment" style="background-color:black;position:fixed;margin:auto;left:0;right:0;top:0;bottom:0;z-index:101;width:600px;height:500px;overflow:auto;display:none;">
    <div id="function">
        <button class="ui green button" onclick="Add()">Add function</button>
          <span class="ui divider"></span>
        <span id="mod" style="display:none" name="0">
              <select class="ui dropdown" style="border-radius:5px;" onchange="FunctionChange(this)">
                  <option value="0">Cartesian</option>
                  <option value="1">Polar</option>
                  <option value="2">Implicit</option>
                  <option value="3">Parameter</option>
            </select>
              <input type="color" style="width:20px;height:20px;border-radius:5px;"/>
              <span style="display:inline">
                <span class="notes">y=</span>
                  <span class="ui input" name="Fun"><input/></span>
                  <span class="notes"></span>
                  <span class="ui input" style="display:none"><input/></span>
            </span>
            <button class="ui red button" onclick="Delete(this.parentNode)">Delete</button>
            <span class="ui checkbox">
                <input type="checkbox" onclick="DrawLine(this.parentNode)"/>
                <label style="color:white;">Draw Line</label>
            </span>
              <span style="display:none;margin-top:6px;font-size:80%;">
                  <span class="notes"></span>
                  <span class="ui input" style="width:50px;"><input/></span>
                  <span class="notes"></span>
                  <span class="ui input" style="width:50px;"><input/></span>
                  <span class="notes"></span>
                  <span class="ui input" style="width:50px;"><input/></span>
            </span>
              <span class="ui divider" style="height:40px"></span>
        </span>
    </div>
      <div class="title" UnSelect="YES" onclick="ShowOption(this)" style="color:white;cursor:pointer;font-size:17px;line-height:35px;font-weight:bold;"><i class="Caret Right icon"></i>Advanced Options</div>
    <div id="option" UnSelect="YES" style="color:white;font-size:50%;font-family: Consolas,Monaco,monospace;display:none;transition:2s;line-height:30px;">
        <span class="notes">X:</span>
        <span  class="ui input"><input id="FunLx" style="width:180px;"/></span>
        <span class="notes">~</span>
        <span  class="ui input"><input id="FunRx" style="width:180px;"/></span>
        <br>
        <span class="notes">Y:</span>
        <span  class="ui input"><input id="FunLy" style="width:180px;"/></span>
        <span class="notes">~</span>
        <span  class="ui input"><input id="FunRy" style="width:180px;"/></span>
        <br>
        <span class="notes">Coordinate:</span>
        <span  class="ui input"><input id="FontStyle" style="width:200px;" value=""/></span>
          <br>
        <span class="ui checkbox">
            <input type="checkbox" id="sizelimit" checked="1"/>
            <label style="color:white;">Size Limit</label>
        </span>
          <br>
        <span class="notes">PointRadii:</span>
        <span  class="ui input"><input id="PointRadii" style="width:50px;" value="1"/></span>
          <br>
        <span class="notes">Scale:</span>
        <span  class="ui input"><input id="Scale" style="width:50px;" value="0.9"/></span>
          <br>
        <span class="ui checkbox">
            <input type="checkbox" id="DrawMoving"  checked=1/>
            <label style="color:white;">Draw while moving</label>
        </span>
          <br>
          <span class="notes" id="size"></span>
    </div>
      <span class="ui divider"></span>
    <button class="ui blue button" onclick="change()">Draw</button>
</div>
<div id="main">
    <h1 class="ui header" UnSelect="YES" style="">
        <i class="book icon"></i>
        <div class="content">Tools</div>
    </h1>
    <h1 align="center" UnSelect="YES">函数图像绘制工具</h1>
      <div align="center" style="width:100%;height:70%;">
        <canvas id="graph"></canvas>
    </div>
      <div UnSelect="YES">
        <button class="ui green button" onclick="mask()">Control</button>
        <button class="ui green button" onclick="redraw()">Reflash</button>
        <!--<p id="map"></p>-->
    </div>
    <script>
        function $(id) {
            return document.getElementById(id);
        }
        function getRandomColor(){
            return '#'+('00000'+(Math.random()*0x1000000<<0).toString(16)).substr(-6);
        }
        function ischar(c){return (c>='a'&&c<='z')||(c>='A'&&c<='Z');}
        function isdigit(c){return c>='0'&&c<='9';}
          function ChangeToPointX(x){return parseInt((x-FunLx)/(FunRx-FunLx)*FunW);}
          function ChangeToPointY(y){return FunH-1-parseInt((y-FunLy)/(FunRy-FunLy)*FunH);}
        function priority(c){
            switch(c){
                case '(':{return 0;break;}
                case '+':{return 1;break;}
                case '-':{return 1;break;}
                case '*':{return 2;break;}
                case '/':{return 2;break;}
                case '^':{return 3;break;}
                default:{return -1;break;}
            }
        }
          function isopt(c){return priority(c)!=-1;}
        function SingleCalc(c,a,b){
            if (c=='+') return a+b;else
            if (c=='-') return a-b;else
            if (c=='*') return a*b;else
            if (c=='/') return a/b;else
            if (c=='^') return Math.pow(a,b);else
            return NaN
        }
        function FunWork(f,x){
            switch(f){
                case "":{return x;break;}
                case "SIN":{return Math.sin(x);break;}
                case "COS":{return Math.cos(x);break;}
                case "TAN":{return Math.tan(x);break;}
                case "ABS":{return Math.abs(x);break;}
                case "SQRT":{return Math.sqrt(x);break;}
                case "LN":{return Math.log(x);break;}
                case "LOG":{return Math.log(x)/Math.LN2;break;}//2为底
                case "LG":{return Math.log(x)/Math.LN10;break;}//10为底
                case "FLOOR":{return Math.floor(x);break;}
                case "CEIL":{return Math.ceil(x);break;}
                case "INT":{return parseInt(x);break;}
                default:{return NaN;break;}
            }
        }
        function FunInit(F){
              F=F.replace(/sin/g,"SIN");
              F=F.replace(/cos/g,"COS");
              F=F.replace(/tan/g,"TAN");
              F=F.replace(/abs/g,"ABS");
              F=F.replace(/sqrt/g,"SQRT");
              F=F.replace(/ln/g,"LN");
              F=F.replace(/log/g,"LOG");
              F=F.replace(/lg/g,"LG");
              F=F.replace(/floor/g,"FLOOR");
              F=F.replace(/ceil/g,"CEIL");
              F=F.replace(/int/g,"INT");
              return F;
        }
        var ca=$("graph"),el=ca.getContext("2d"),fun=$("function"),eps=1e-12;
        var FunW=ca.parentNode.clientWidth,FunH=ca.parentNode.clientHeight,FunLx=-FunW/100,FunRx=FunW/100,FunLy=-FunH/100,FunRy=FunH/100,PR,tableX,tableY,tmp,countX,countY,Funstage=0,MoX,MoY,MIN=1e-4,MAX=1e8,FUN;
          var dir=[[0,1],[1,0],[0,-1],[-1,0],[1,1],[1,-1],[-1,1],[-1,-1]];
          var FontStyle="bold 12px Georgia";
        ca.width=FunW;ca.height=FunH;$("size").innerHTML="Size:"+FunW+"*"+FunH;
        function Calc(fun,X,Value){
            var number=new Array(),opt=new Array(),F=new Array(),now=0,f="",tmp,a,b,sign=1,base=0,j;
            for (var i=0;i<fun.length;i++){
                  for (j=0;j<X.length;j++)
                if (X[j]==fun[i]){
                      if (i==0||isopt(fun[i-1])) now=Value[j];else now*=Value[j];
                      break;
                }
                  if (j==X.length)
                if (fun[i]=='(') F.push(f),f="",opt.push('(');else
                if (fun[i]==')'){
                    number.push(now*sign);now=0;sign=1;base=0;
                    while ((tmp=opt.pop())!='('){
                        b=number.pop();a=number.pop();
                        tmp=SingleCalc(tmp,a,b);
                        number.push(tmp);
                    }
                    now=FunWork(F.pop(),number.pop());
                }else
                if (fun[i]=='.') base=1;else
                if (fun[i]=='+'&&(i==0||priority(fun[i-1])!=-1));else
                if (fun[i]=='-'&&(i==0||priority(fun[i-1])!=-1)) sign=-1;else
                if (fun[i]=='e') if (i==0||isopt(fun[i-1])) now=Math.E;else now*=Math.E;else
                if (fun[i]=='p'&&fun[i+1]=='i'){if (i==0||isopt(fun[i-1])) now=Math.PI;else now*=Math.PI;i+=1;}else
                if (isdigit(fun[i])) if (base==0) now=now*10+(fun[i]-'0');else base/=10,now+=base*(fun[i]-'0');else
                if (ischar(fun[i])) f+=fun[i];else if (isopt(fun[i])){
                    number.push(now*sign);now=0;sign=1;base=0;
                    var s=priority(fun[i]);
                    if (s==-1) return 0;
                    while (s<=priority(opt[opt.length-1])){
                        b=number.pop();a=number.pop();
                        tmp=SingleCalc(opt.pop(),a,b);
                        number.push(tmp);
                    }
                    opt.push(fun[i]);
                }
            }
            number.push(now*sign);
            while (opt.length>0){
                b=number.pop();a=number.pop();
                tmp=SingleCalc(opt.pop(),a,b);
                number.push(tmp);
            }
            return number.pop();
        }
          function drawarc(x,y,R){
            el.beginPath();
            el.arc(x,y,R,0,Math.PI*2);
            el.closePath();
            el.fill();
        }
          function drawline(lx,ly,px,py){
            el.beginPath();
            el.moveTo(lx,ly);
            el.lineTo(px,py);
            el.closePath();
            el.stroke();
        }
        function gettable(){
            tmp=(FunRx-FunLx+eps)/20;
            tableX=1;countX=0;countY=0;
            while(tableX<tmp) tableX*=10;
            while(tableX/10>tmp) tableX/=10,countX++;
            if (tableX>=1) countX=0;
            if (tableX/5>tmp) tableX/=5,countX++;else if (tableX/2>tmp) tableX/=2,countX++;
            for (var i=parseInt(FunLx/tableX)+(FunLx>0);i*tableX<FunRx;i++){
                el.fillStyle=i==0?"#000000":"#CDB7B5";
                tmp=(i*tableX-FunLx)/(FunRx-FunLx)*FunW;
                el.fillRect(tmp,0,1,FunH);
 
                el.fillStyle="#000000";
                el.font=FontStyle;
                el.fillText((i*tableX).toFixed(countX),tmp+2,10);
            }
 
            tmp=(FunRy-FunLy+eps)/20;
            tableY=1;
 
            while(tableY<tmp) tableY*=10;
            while(tableY/10>tmp) tableY/=10,countY++;
            if (tableY/5>tmp) tableY/=5,countY++;else if (tableY/2>tmp) tableY/=2,countY++;
            if (tableY>=1) countY=0;
            for (var i=parseInt(FunLy/tableY)+(FunLy>0);i*tableY<FunRy;i++){
                el.fillStyle=i==0?"#000000":"#CDB7B5";
                tmp=(i*tableY-FunLy)/(FunRy-FunLy)*FunH;
                el.fillRect(0,FunH-1-tmp,FunW,1);
 
                el.fillStyle="#000000";
                el.font=FontStyle;
                el.fillText((i*tableY).toFixed(countY),0,FunH-1-tmp);
            }
            //$("map").innerHTML=tableX+" "+tableY;
        }
          function PCalc(i,j){return Calc(FUN,['x','y'],[FunLx+(FunRx-FunLx)/FunW*i,FunRy-(FunRy-FunLy)/FunH*j]);}
          function ImpDraw(x,y,X,Y,jump){
              if (x+X>FunW) X=FunW-x;if (y+Y>FunH) Y=FunH-y;
              var Imp=new Array(),tmp;
              if (X>jump)X/=jump;
            if (Y>jump)Y/=jump;
              for (var i=-1;i<=X;i+=1){
                  Imp[i+1]=new Array();
                for (var j=-1;j<=Y;j+=1) Imp[i+1].push(PCalc(i*jump+x,j*jump+y));
            }
              for (var i=0;i<X;i+=1)
            for (var j=0;j<Y;j+=1)
            for (var k=0;k<4;k++)
            if (Imp[i+1][j+1]*Imp[i+1+dir[k][0]][j+1+dir[k][1]]<0) {drawarc(i*jump+x,j*jump+y,PR);break;}
        }
        function getfunction(){
            var group=document.getElementsByName("Fun"),x,y,R,lax,lay,px,py,color,OutSide,type,ValueL,ValueR,ValueS,DLc,tmp,TMP;
              PR=$("PointRadii").value;
            for (var k=1;k<group.length;k++){
                var gf=group[k].parentNode.parentNode;
                  OutSide=1;type=gf.children[0].value;DLc=gf.children[4].children[0].checked;
                  FUN=FunInit((group[k].children[0].value).toLowerCase());
                  color=gf.children[1].value;
                el.fillStyle=el.strokeStyle=color;
                  switch (type){
                      case '0':{
                        for (var i=0;i<FunW;i++){
                            x=FunLx+(FunRx-FunLx)/FunW*i;
                            y=Calc(FUN,['x'],[x]);
                            if (isNaN(y)) continue;
                            px=i;py=ChangeToPointY(y);
                            if (y>=FunLy&&y<FunRy){
                                drawarc(px,py,PR);
                                  if (DLc) drawline(lax,lay,px,py);
                                OutSide=0;
                            }else{
                                  if (DLc) if (!OutSide) drawline(lax,lay,px,py);
                                OutSide=1;
                            }
                              lax=px;lay=py;
                        }
                          break;
                    }
                      case '1':{
                          ValueL=Calc(gf.children[5].children[1].children[0].value,[],[]);
                          ValueR=Calc(gf.children[5].children[3].children[0].value,[],[]);
                          ValueS=Calc(gf.children[5].children[5].children[0].value,[],[]);
                          for (var i=ValueL;i<ValueR+ValueS-eps;i+=ValueS){
                              if (i>ValueR) i=ValueR;
                              R=Calc(FUN,['t'],[i]);
                              x=R*Math.cos(i);y=R*Math.sin(i);
                              px=ChangeToPointX(x);py=ChangeToPointY(y);
                              if (FunLx<=x&&x<FunRx&&FunLy<=y&&y<FunRy){
                                drawarc(px,py,PR);
                                  if (DLc) drawline(lax,lay,px,py);
                                OutSide=0;
                            }else{
                                  if (DLc) if (!OutSide) drawline(lax,lay,px,py);
                                OutSide=1;
                            }
                              lax=px;lay=py;
                        }
                          break;
                    }
                      case '2':{
                          var SpaceW=Calc(gf.children[5].children[1].children[0].value,[],[]),
                            SpaceH=Calc(gf.children[5].children[3].children[0].value,[],[]),
                            jump=Calc(gf.children[5].children[5].children[0].value,[],[]),Imp=new Array();
                        for (var i=0;i*SpaceW<FunW;i+=1){
                              Imp[i]=new Array();
                              for (var j=0;j*SpaceH<FunH;j+=1) Imp[i].push(0);
                        }
                          for (var i=0,_i=0;i<FunW;i+=SpaceW,_i+=1)
                        for (var j=0,_j=0;j<FunH;j+=SpaceH,_j+=1){
                            //if (!Imp[_i][_j]||(!_i&&!Imp[_i-1][_j]))
                            {
                                  tmp=PCalc(i,j-1);
                                  for (var l=0;l<SpaceH&&j+l<FunH;l++)
                                   if (TMP=tmp,tmp=PCalc(i,j+l),TMP*tmp<0||Math.abs(tmp)<eps) {Imp[_i][_j]=1;if (_i) Imp[_i-1][_j]=1;break;}
                            }
                              //if (!Imp[_i][_j]||(!_j&&!Imp[_i][_j-1]))
                              {
                                tmp=PCalc(i-1,j);
                                  for (var l=0;l<SpaceW&&i+l<FunW;l++)
                                   if (TMP=tmp,tmp=PCalc(i+l,j),TMP*tmp<0||Math.abs(tmp)<eps) {Imp[_i][_j]=1;if (_j) Imp[_i][_j-1]=1;break;}
                            }
                        }
                          for (var i=0;i<Imp.length;i+=1)
                        for (var j=0;j<Imp[i].length;j+=1)
                        if (Imp[i][j]) ImpDraw(i*SpaceW,j*SpaceH,SpaceW,SpaceH,jump);
                          break;
                    }
                      case '3':{
                          ValueL=Calc(gf.children[5].children[1].children[0].value,[],[]);
                          ValueR=Calc(gf.children[5].children[3].children[0].value,[],[]);
                          ValueS=Calc(gf.children[5].children[5].children[0].value,[],[]);
                          _FUN=FunInit((group[k].parentNode.children[3].children[0].value).toLowerCase());
                          for (var i=ValueL;i<ValueR+ValueS-eps;i+=ValueS){
                              if (i>ValueR) i=ValueR;
                              x=Calc(FUN,['t'],[i]);y=Calc(_FUN,['t'],[i]);
                              px=ChangeToPointX(x);py=ChangeToPointY(y);
                              if (FunLx<=x&&x<FunRx&&FunLy<=y&&y<FunRy){
                                drawarc(px,py,PR);
                                  if (DLc) drawline(lax,lay,px,py);
                                OutSide=0;
                            }else{
                                  if (DLc) if (!OutSide) drawline(lax,lay,px,py);
                                OutSide=1;
                            }
                              lax=px;lay=py;
                        }
                          break;
                    }
                }
            }
        }
          function redraw(){
            el.clearRect(0,0,FunW,FunH);
            gettable();
            if (Funstage!=1||$("DrawMoving").checked) getfunction();
        }
        function change(){
            FunLx=parseFloat($("FunLx").value);
            FunRx=parseFloat($("FunRx").value);
            FunLy=parseFloat($("FunLy").value);
            FunRy=parseFloat($("FunRy").value);
              FontStyle=$("FontStyle").value;
            redraw();
        }
        function update(){
            $("FunLx").value=FunLx;
            $("FunRx").value=FunRx;
            $("FunLy").value=FunLy;
            $("FunRy").value=FunRy;
              $("FontStyle").value=FontStyle;
        }
        function Scale(x,y,times){
            if (x<0||x>=FunW||y<0||y>=FunH) return;
              if ($("sizelimit").checked){
                  if (times<1&&(FunRx-FunLx<MIN||FunRy-FunLy<MIN)) return;
                  if (times>1&&(FunRx-FunLx>MAX||FunRy-FunLy>MAX)) return;
            }
            x=FunLx+(FunRx-FunLx)/FunW*x;
            y=FunLy+(FunRy-FunLy)/FunH*y;
            FunLx=x-(x-FunLx)*times;FunRx=x+(FunRx-x)*times;
            FunLy=y-(y-FunLy)*times;FunRy=y+(FunRy-y)*times;
        }
        ca.onmousedown=function(ob){
            MoX=ob.layerX;MoY=ob.layerY;
            Funstage=1;
        }
        ca.onmousemove=function(ob){
            if (Funstage!=1) return;
            var NoX,NoY,det;
            NoX=ob.layerX;NoY=ob.layerY;
            det=(MoX-NoX)/FunW*(FunRx-FunLx);FunLx+=det;FunRx+=det;
            det=(NoY-MoY)/FunH*(FunRy-FunLy);FunLy+=det;FunRy+=det;
            MoX=NoX;MoY=NoY;
            redraw();update();
        }
        ca.onmouseup=function(ob){
              if (Funstage==1){
                Funstage=0;
                  redraw();
            }
        }
        ca.onmouseleave=function(ob){
              if (Funstage==1){
                Funstage=0;
                  redraw();
            }
        }
        ca.onmousewheel=function(ob){
            ob=ob||window.event;ob.preventDefault();
              var ScaleRate=$("Scale").value;
            var detail;
            if(ob.wheelDelta)detail=ob.wheelDelta;else if(ob.detail)detail=ob.detail;
            if (detail>0) Scale(ob.layerX,FunH-1-ob.layerY,ScaleRate);else Scale(ob.layerX,FunH-1-ob.layerY,1/ScaleRate);
            redraw();update();
        }
        function Add(){
            var New=$("mod").cloneNode(true);
            New.style.display="block";
              New.children[1].value=getRandomColor();
            fun.appendChild(New);
        }
        function Delete(node){
            node.parentNode.removeChild(node);
        }
        function DrawLine(ob){
            //if (ob.className=="ui checkbox checked") ob.className="ui checkbox";else ob.className="ui checkbox checked";
            redraw();
        }
          function ShowOption(obj){
              obj=obj.children[0];
              if (obj.className=="Caret Right icon") obj.className="Caret Down icon",$("option").style.display="block";else obj.className="Caret Right icon",$("option").style.display="none";
        }
          function FunctionChange(obj){
              var fi=0,la=2,v=obj.value;
              obj=obj.parentNode;
            obj.children[5].style.display="none";
            obj.children[2].style.display="inline";
            obj.children[2].children[3].style.display="none";
              if (v==0){
                  obj.children[2].children[fi].innerHTML="y=";
                  obj.children[2].children[la].innerHTML="";
            }else if (v==1){
                  obj.children[2].children[fi].innerHTML="r=";
                  obj.children[2].children[la].innerHTML="";
                  obj.children[5].style.display="block";
                  obj.children[5].children[0].innerHTML="t:";
                  obj.children[5].children[1].children[0].value="0";
                  obj.children[5].children[2].innerHTML="~";
                  obj.children[5].children[3].children[0].value="2pi";
                  obj.children[5].children[4].innerHTML=" Space:";
                  obj.children[5].children[5].children[0].value="0.02";
            }else if (v==2){
                  obj.children[2].children[fi].innerHTML="";
                  obj.children[2].children[la].innerHTML="=0";
                  obj.children[5].style.display="block";
                  obj.children[5].children[0].innerHTML="SpaceW:";
                  obj.children[5].children[1].children[0].value="60";
                  obj.children[5].children[2].innerHTML=" SpaceH:";
                  obj.children[5].children[3].children[0].value="60";
                  obj.children[5].children[4].innerHTML=" Jump:";
                  obj.children[5].children[5].children[0].value="3";
            }else if (v==3){
                obj.children[2].style.display="block";
                obj.children[2].children[3].style.display="inline";
                  obj.children[2].children[fi].innerHTML="x=";
                  obj.children[2].children[la].innerHTML=" y=";
                  obj.children[5].style.display="block";
                  obj.children[5].children[0].innerHTML="t:";
                  obj.children[5].children[1].children[0].value="0";
                  obj.children[5].children[2].innerHTML="~";
                  obj.children[5].children[3].children[0].value="1";
                  obj.children[5].children[4].innerHTML=" Space:";
                  obj.children[5].children[5].children[0].value="0.1";
 
            }
        }
        redraw();update();
        var maskobj=$("mask");
        var control=$("control");
        function mask(){
              if (maskobj.style.display=="block") control.style.display=maskobj.style.display="none";else control.style.display=maskobj.style.display="block";
        }
        maskobj.onclick=function(){
              mask();
        }
    </script>
</div>
</body>