function get() {
  var radius=document.getElementById("radius").value;
	var volume=(4/3)*(pi)*radius*radius*radius;
	document.getElementById("volume").innerText=volume;
} 
const btn=doument.getElementById("submit");
btn.addEventListener("click",get)