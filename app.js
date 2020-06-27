function getNumber(num)
{
    var result=document.getElementById("screen");
    result.value+=num;
    var input=result.value;
    var show=document.getElementById("show");
    show.innerHTML=input;
}
function getBack()
{
   var back = document.getElementById("screen").value;
   document.getElementById("screen").value =back.substr(0, back.length - 1);
}
function clearResult(){
    var result = document.getElementById("screen");
    result.value="";
}
function getResult()
{
  //output value history
    var result=document.getElementById("screen");
    var input=result.value;
    
    var answer=eval(result.value);
    result.value=answer;
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(answer));
    li.setAttribute("id", answer); // added line
    ul.appendChild(li);
    // //Input value history
    var ol1 = document.getElementById("listinput");
    var li1 = document.createElement("li");
    li1.appendChild(document.createTextNode(input));
    li1.setAttribute("id",input); // added line
    ol1.appendChild(li1);
    // //Time value history
  
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;

    var ult = document.getElementById("listtime");
    var lit = document.createElement("li");
    lit.appendChild(document.createTextNode(dateTime));
    lit.setAttribute("id",dateTime); // added line
    ult.appendChild(lit); 
}
function logFunction()
{  
 //output value history
 var result=document.getElementById("screen");
 var input=result.value;
 
 
 var input1="log "+result.value;
 var show=document.getElementById("show");
 show.innerHTML=input1;



 var answer=Math.log10(input);
 result.value=answer;
 var ul = document.getElementById("list");
 var li = document.createElement("li");
 li.appendChild(document.createTextNode(answer));
 li.setAttribute("id", answer); // added line
 ul.appendChild(li);
 // //Input value history
 var ol1 = document.getElementById("listinput");
 var li1 = document.createElement("li");
 li1.appendChild(document.createTextNode("log(10) "+input));
 li1.setAttribute("id",input); // added line
 ol1.appendChild(li1);
 // //Time value history

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;

 var ult = document.getElementById("listtime");
 var lit = document.createElement("li");
 lit.appendChild(document.createTextNode(dateTime));
 lit.setAttribute("id",dateTime); // added line
 ult.appendChild(lit); 
}
function getNLog()
{
   //output value history
   var result=document.getElementById("screen");
   var input=result.value;
   

   var input1="ln "+result.value;
   var show=document.getElementById("show");
   show.innerHTML=input1;


   var answer=Math.log(input);
   result.value=answer;
   var ul = document.getElementById("list");
   var li = document.createElement("li");
   li.appendChild(document.createTextNode(answer));
   li.setAttribute("id", answer); // added line
   ul.appendChild(li);
   // //Input value history
   var ol1 = document.getElementById("listinput");
   var li1 = document.createElement("li");
   li1.appendChild(document.createTextNode("ln "+input));
   li1.setAttribute("id",input); // added line
   ol1.appendChild(li1);
   // //Time value history
 
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;

   var ult = document.getElementById("listtime");
   var lit = document.createElement("li");
   lit.appendChild(document.createTextNode(dateTime));
   lit.setAttribute("id",dateTime); // added line
   ult.appendChild(lit); 
}

function getSin()
{
   //output value history
   var result=document.getElementById("screen");
   var input=result.value;
   

   var input1="sin "+result.value;
   var show=document.getElementById("show");
   show.innerHTML=input1;


   var answer=Math.sin(input);
   result.value=answer;
   var ul = document.getElementById("list");
   var li = document.createElement("li");
   li.appendChild(document.createTextNode(answer));
   li.setAttribute("id",+ answer); // added line
   ul.appendChild(li);
   // //Input value history
   var ol1 = document.getElementById("listinput");
   var li1 = document.createElement("li");
   li1.appendChild(document.createTextNode("sin "+input));
   li1.setAttribute("id",input); // added line
   ol1.appendChild(li1);
   // //Time value history
 
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;

   var ult = document.getElementById("listtime");
   var lit = document.createElement("li");
   lit.appendChild(document.createTextNode(dateTime));
   lit.setAttribute("id",dateTime); // added line
   ult.appendChild(lit); 
}


function getCos()
{
   //output value history
   var result=document.getElementById("screen");
   var input=result.value;
   

   var input1="cos "+result.value;
   var show=document.getElementById("show");
   show.innerHTML=input1;


   var answer=Math.cos(input);
   result.value=answer;
   var ul = document.getElementById("list");
   var li = document.createElement("li");
   li.appendChild(document.createTextNode(answer));
   li.setAttribute("id",+ answer); // added line
   ul.appendChild(li);
   // //Input value history
   var ol1 = document.getElementById("listinput");
   var li1 = document.createElement("li");
   li1.appendChild(document.createTextNode("cos "+input));
   li1.setAttribute("id",input); // added line
   ol1.appendChild(li1);
   // //Time value history
 
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;

   var ult = document.getElementById("listtime");
   var lit = document.createElement("li");
   lit.appendChild(document.createTextNode(dateTime));
   lit.setAttribute("id",dateTime); // added line
   ult.appendChild(lit); 
}


function getTan()
{
   //output value history
   var result=document.getElementById("screen");
   var input=result.value;
   

   var input1="tan "+result.value;
   var show=document.getElementById("show");
   show.innerHTML=input1;


   var answer=Math.tan(input);
   result.value=answer;
   var ul = document.getElementById("list");
   var li = document.createElement("li");
   li.appendChild(document.createTextNode(answer));
   li.setAttribute("id",+ answer); // added line
   ul.appendChild(li);
   // //Input value history
   var ol1 = document.getElementById("listinput");
   var li1 = document.createElement("li");
   li1.appendChild(document.createTextNode("tan "+input));
   li1.setAttribute("id",input); // added line
   ol1.appendChild(li1);
   // //Time value history
 
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;

   var ult = document.getElementById("listtime");
   var lit = document.createElement("li");
   lit.appendChild(document.createTextNode(dateTime));
   lit.setAttribute("id",dateTime); // added line
   ult.appendChild(lit); 
}


function getE()
{  
 //output value history
 var result=document.getElementById("screen");
 var input=result.value;
  
 var input1="e("+result.value+")";
 var show=document.getElementById("show");
 show.innerHTML=input1;

 var answer=Math.exp(input);
 result.value=answer;
 var ul = document.getElementById("list");
 var li = document.createElement("li");
 li.appendChild(document.createTextNode(answer));
 li.setAttribute("id", answer); // added line
 ul.appendChild(li);
 // //Input value history
 var ol1 = document.getElementById("listinput");
 var li1 = document.createElement("li");
 li1.appendChild(document.createTextNode("E "+input));
 li1.setAttribute("id",input); // added line
 ol1.appendChild(li1);
 // //Time value history

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;

 var ult = document.getElementById("listtime");
 var lit = document.createElement("li");
 lit.appendChild(document.createTextNode(dateTime));
 lit.setAttribute("id",dateTime); // added line
 ult.appendChild(lit); 
}

function getsqrt()
{  
 //output value history
 var result=document.getElementById("screen");
 var input=result.value;
  
 var input1="√("+result.value+")";
 var show=document.getElementById("show");
 show.innerHTML=input1;

 var answer=Math.sqrt(input);
 result.value=answer;
 var ul = document.getElementById("list");
 var li = document.createElement("li");
 li.appendChild(document.createTextNode(answer));
 li.setAttribute("id", answer); // added line
 ul.appendChild(li);
 // //Input value history
 var ol1 = document.getElementById("listinput");
 var li1 = document.createElement("li");
 li1.appendChild(document.createTextNode("√("+input+")"));
 li1.setAttribute("id",input); // added line
 ol1.appendChild(li1);
 // //Time value history

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;

 var ult = document.getElementById("listtime");
 var lit = document.createElement("li");
 lit.appendChild(document.createTextNode(dateTime));
 lit.setAttribute("id",dateTime); // added line
 ult.appendChild(lit); 
}


function getSquare()
{  
 //output value history
 var result=document.getElementById("screen");
 var input=result.value;
  
 var input1="x^2("+result.value+")";
 var show=document.getElementById("show");
 show.innerHTML=input1;

 var answer=Math.pow(input,2);
 result.value=answer;
 var ul = document.getElementById("list");
 var li = document.createElement("li");
 li.appendChild(document.createTextNode(answer));
 li.setAttribute("id", answer); // added line
 ul.appendChild(li);
 // //Input value history
 var ol1 = document.getElementById("listinput");
 var li1 = document.createElement("li");
 li1.appendChild(document.createTextNode("x^2("+input+")"));
 li1.setAttribute("id",input); // added line
 ol1.appendChild(li1);
 // //Time value history

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;

 var ult = document.getElementById("listtime");
 var lit = document.createElement("li");
 lit.appendChild(document.createTextNode(dateTime));
 lit.setAttribute("id",dateTime); // added line
 ult.appendChild(lit); 
}


function getCube()
{  
 //output value history
 var result=document.getElementById("screen");
 var input=result.value;
  
 var input1="x^3("+result.value+")";
 var show=document.getElementById("show");
 show.innerHTML=input1;

 var answer=Math.pow(input,3);
 result.value=answer;
 var ul = document.getElementById("list");
 var li = document.createElement("li");
 li.appendChild(document.createTextNode(answer));
 li.setAttribute("id", answer); // added line
 ul.appendChild(li);
 // //Input value history
 var ol1 = document.getElementById("listinput");
 var li1 = document.createElement("li");
 li1.appendChild(document.createTextNode("x^3("+input+")"));
 li1.setAttribute("id",input); // added line
 ol1.appendChild(li1);
 // //Time value history

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;

 var ult = document.getElementById("listtime");
 var lit = document.createElement("li");
 lit.appendChild(document.createTextNode(dateTime));
 lit.setAttribute("id",dateTime); // added line
 ult.appendChild(lit); 
}

function getPercentage()
{  
 //output value history
 var result=document.getElementById("screen");
 var input=eval(result.value);
 var input1="("+result.value+")%";
 var show=document.getElementById("show");
 show.innerHTML=input1;

 var answer=input*100;
 result.value=answer;
 var ul = document.getElementById("list");
 var li = document.createElement("li");
 li.appendChild(document.createTextNode(answer));
 li.setAttribute("id", answer); // added line
 ul.appendChild(li);
 // //Input value history
 var ol1 = document.getElementById("listinput");
 var li1 = document.createElement("li");
 li1.appendChild(document.createTextNode("("+input+")%"));
 li1.setAttribute("id",input); // added line
 ol1.appendChild(li1);
 // //Time value history

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;

 var ult = document.getElementById("listtime");
 var lit = document.createElement("li");
 lit.appendChild(document.createTextNode(dateTime));
 lit.setAttribute("id",dateTime); // added line
 ult.appendChild(lit); 
}

function getPI()
{  
 //output value history
 var result=document.getElementById("screen");
 var input=parseFloat(result.value);
 var input1="Pi *"+result.value;
 if(result.value.length==0)
 {
    input=1;
    input1="Pi"+result.value;
 }
 var show=document.getElementById("show");
 show.innerHTML=input1;
 
 var answer=Math.PI*input;
 result.value=answer;
 var ul = document.getElementById("list");
 var li = document.createElement("li");
 li.appendChild(document.createTextNode(answer));
 li.setAttribute("id", answer); // added line
 ul.appendChild(li);
 // //Input value history
 var ol1 = document.getElementById("listinput");
 var li1 = document.createElement("li");
 li1.appendChild(document.createTextNode("Pi*"+input));
 li1.setAttribute("id",input); // added line
 ol1.appendChild(li1);
 // //Time value history

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;

 var ult = document.getElementById("listtime");
 var lit = document.createElement("li");
 lit.appendChild(document.createTextNode(dateTime));
 lit.setAttribute("id",dateTime); // added line
 ult.appendChild(lit); 
}



function HideShow() {
    var x = document.getElementById("history");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }