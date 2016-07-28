
//Script created by Carter Sills

window.onload = initAll;

function initAll() {
	
	var dayName = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
	var monName = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
	var now = new Date();
	var thisMonth = now.getMonth() + 1;
	
	var dtString = dayName[now.getDay()] +"&nbsp;" ;
	dtString +=  monName[now.getMonth()] +"&nbsp;" + "&nbsp;" + [now.getDate()] + "&nbsp;" + [now.getFullYear()];
	
	
         //assigns  the element ID the value of dtstring
	document.getElementById("dtField").innerHTML = dtString;
	
}

function printName(){
var fullname = prompt("Please Enter Your Full Name");
if (fullname != null) {
	document.getElementById("separator").innerHTML = "Welcome!" + "&nbsp;" + fullname;
	
}  else { document.getElementById("separator").innerHTML = " " ;
}


}
