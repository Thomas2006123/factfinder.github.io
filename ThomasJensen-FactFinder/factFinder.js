
function fact1(){
	document.getElementById('show').innerHTML = "<h1>" + "Sudan has the most pyramids than any country in the world." + "<img src='images/pyrimads.png' alt='pyrimads' height=300px' width='auto'>" + "<h1>";
}

function fact2(){
	document.getElementById('show').innerHTML = "<h1>" + "The strongest muscle in the body is the tounge." + "<img src='images/tounge.png' alt='tounge' height=275px' width='auto'>" + "<h1>";
}

function fact3(){
	document.getElementById('show').innerHTML = "<h1>" + "The tallest man ever was 8 feet, 9 inches tall" + "<img src='images/tall.jfif' alt='tall' height=305px' width='auto'>" + "<h1>";
}

function fact4(){
	document.getElementById('show').innerHTML = "<h1>" + "Our modern interpretation of Santa Claus with a red outfit and white beard is due in large part to holiday Coca-Cola ads that began in 1931.<br>" + "<img src='images/santa.png' alt='santa' height=250px' width='auto'>" + "<h1>";
}

function fact5(){
	document.getElementById('show').innerHTML = "<h1>" + "Hawaiian pizza was created in Ontario, Canada, by Greek immigrant Sam Panopoulos in 1962." + "<img src='images/Pizza.jpg' alt='Pizza' height=250px' width='auto'> " + "<h1>";
}

function drk(){
	document.querySelector('body').style.backgroundColor = "#3C1518";
	document.querySelector('main').style.backgroundColor = "#7F7B82";
	document.querySelector('section').style.backgroundColor = "#3C3744";
	document.querySelector('section').style.color = "#445E93";
	
	 var subs = document.getElementsByTagName('input');
	for(var i = 0; i < subs.length; i++){
		subs[i].style.backgroundColor = "#69140E";
	}
}

function liht(){
	document.querySelector('body').style.backgroundColor = "#F9DDC7";
	document.querySelector('main').style.backgroundColor = "#A379C9";
	document.querySelector('section').style.backgroundColor = "#49BEAA";
	document.querySelector('section').style.color = "#B4C5E4";
	
		 var subs = document.getElementsByTagName('input');
	for(var i = 0; i < subs.length; i++){
		subs[i].style.backgroundColor = "#FBFEFB";
	}
}

function crazy(){
	document.querySelector('body').style.backgroundColor = "#F1AB86";
	document.querySelector('main').style.backgroundColor = "#FFFC31";
	document.querySelector('section').style.backgroundColor = "#3D52D5";
	document.querySelector('section').style.color = "#6F7C12";
	
		 var subs = document.getElementsByTagName('input');
	for(var i = 0; i < subs.length; i++){
		subs[i].style.backgroundColor = "#E94F37";
	}
}















