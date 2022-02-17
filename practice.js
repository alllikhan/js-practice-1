document.querySelector("h1").innerHTML="Alikhan CS2117";

const now=new Date();
document.write("Year: " + now.getFullYear() + "<br/>");
document.write( "Today is: " + now.getDay() + "<br/>");
document.write("Date: " + now.getDate() + "<br/>");
document.write("Month: " + now.getMonth() + "<br/>");
document.write("Current time is: " + now.getHours() + ":" + now.getMinutes() + "<br/>");

var y = now.getFullYear();
var m = now.getMonth();
var d = now.getDate();
var sum = y * 365 + m * 31 + d;
var days = 365 * 2024 - sum;
document.write(  days + " days left until the freedom!" + "<br/>");

function multiplyBy(){
 num1=document.getElementById("1Num").value;
 num2=document.getElementById("2Num").value;
 document.getElementById("result").innerHTML=num1 * num2;
}
function divideBy(){
 num1=document.getElementById("1Num").value;
 num2=document.getElementById("2Num").value;
 document.getElementById("result").innerHTML=num1 / num2;
}
