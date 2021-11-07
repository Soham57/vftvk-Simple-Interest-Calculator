function compute() {
  let principal = Number(document.getElementById("principal").value);
  let rate = Number(document.getElementById("rate").value);
  let noy = Number(document.getElementById("years").value);
  let result = document.getElementById("result");
  let alertM=document.getElementById("alert");
   document.getElementById("result").style.display = "block";
   if(principal> 0){  
  result.innerHTML = `If you deposit <mark>${principal}</mark>,<br>
  at an interest rate of <mark>${rate}</mark>.<br>
  You will recieve an amount of <mark>${(principal * rate * noy)/100}</mark>,<br>
  in the year <mark>${new Date().getFullYear() + noy}</mark>.`;
   }
   
  else{
	  result.innerHTML = `<a href="#" onclick="f1()">Enter a positive number</a>`;
  }
  
}

function f1(){
	document.getElementById("principal").focus();
}

function showVal(value){
let slider= document.querySelector(".slide");
slider.textContent=`${value}%`;
}