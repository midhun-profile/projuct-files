var x=""
var y=""
var z
var r
var d=0;
//    console.log(eval(k))
function nine(){

x = document.getElementById("nine").value;

//    var k="20/2"
//    console.log(eval(k));
//    console.log(x);
//    console.log(y);
z=y.concat(x);
//     console.log(z);
y=z
console.log(z);
document.getElementById("screen").innerHTML=z;

}
function eight(){

x = document.getElementById("eight").value;
z=y.concat(x);
y=z
console.log(z);
document.getElementById("screen").innerHTML=z;

}
function seven(){

x = document.getElementById("seven").value;
z=y.concat(x);
y=z
console.log(z);
document.getElementById("screen").innerHTML=z;

}
function six(){

x = document.getElementById("six").value;
z=y.concat(x);
y=z
console.log(z);
document.getElementById("screen").innerHTML=z;

}
function five(){

x = document.getElementById("five").value;
z=y.concat(x);
y=z
console.log(z);
document.getElementById("screen").innerHTML=z;

}
function four(){

x = document.getElementById("four").value;
z=y.concat(x);
y=z
console.log(z);
document.getElementById("screen").innerHTML=z;

}
function three(){

x = document.getElementById("three").value;
z=y.concat(x);
y=z
console.log(z);
document.getElementById("screen").innerHTML=z;

}
function two(){

x = document.getElementById("two").value;
z=y.concat(x);
y=z
console.log(z);
document.getElementById("screen").innerHTML=z;

}
function one(){

x = document.getElementById("one").value;
z=y.concat(x);
y=z
console.log(z);
document.getElementById("screen").innerHTML=z;

}
function zero(){

x = document.getElementById("zero").value;
z=y.concat(x);
y=z
console.log(z);
document.getElementById("screen").innerHTML=z;

}
function divi(){

// x = document.getElementById("one").value;
x="/"
z=y.concat(x);
y=z
console.log(z);
document.getElementById("screen").innerHTML=z;

}
function multi(){

// x = document.getElementById("one").value;
x="*"
z=y.concat(x);
y=z
console.log(z);
document.getElementById("screen").innerHTML=z;

}
function add(){

// x = document.getElementById("one").value;
x="+"
z=y.concat(x);
y=z
console.log(z);
document.getElementById("screen").innerHTML=z;

}
function sub(){

// x = document.getElementById("one").value;
x="-"
z=y.concat(x);
y=z
console.log(z);
document.getElementById("screen").innerHTML=z;

}
function eql(){

r=eval(z);
document.getElementById("screen").innerHTML=r;
x=""
y=""

if(r===undefined){document.getElementById("screen").innerHTML="error";
console.log(r);}
}
function clr(){

x=""
y=""
document.getElementById("screen").innerHTML=x;

}
function power(){
x=""
y=""
z=""
if(d===0){
 on();
}
else{
 off();
}


}
function on(){
document.getElementById("screen").innerHTML=z;
document.getElementById("screen").style.display = "block";
d=1
}
function off(){
document.getElementById("screen").innerHTML=z;
document.getElementById("screen").style.display = "none";
d=0
}
