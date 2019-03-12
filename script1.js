a = document.getElementById('location1');
b = document.getElementById('location2');
c = document.getElementById('location3');
var mySound = document.getElementById('there-found');


setTimeout(function(){ alert("Alert!!I'm lost in Space and I can't find my spaceship."); }, 1000);
setTimeout(function(){ alert("In order to help me leave this planet, look through the scattered items at the bottom for clues!"); }, 1000);
setTimeout(function(){ alert("you will have 40seconds before you loose oxygen!"); }, 1000);
setTimeout(function(){ alert("Once you go through all the scattered items, find the right three numbers and click on the rocket to check!"); }, 1000);
setTimeout(function(){ alert("Good Luck!!"); }, 1000);



function nextImage(el){
	if (el.src.match("pic1.jpg")){
		 el.src = "pic2.jpg";

	} else if (el.src.match("pic2.jpg")){
		 el.src = "pic5.jpg";
		
	} else if (el.src.match("pic5.jpg")){
		 el.src = "pic3.jpg";
		
	} else if (el.src.match("pic3.jpg")){
		el.src = "pic4.jpg";
		// do nothing
	} else if (el.src.match("pic4.jpg")){
		el.src = "pic5.jpg";
	} else if (el.src.match("pic5.jpg")){
		el.src = "pic6.jpg";
	}else if (el.src.match("pic6.jpg")) {
		el.src = "pic1.jpg";
		//do nothing
	}
}

function nextImage1(el){
	if (el.src.match("pic2.jpg")){
		 el.src = "pic1.jpg";

	} else if (el.src.match("pic1.jpg")){
		 el.src = "pic3.jpg";
		
	} else if (el.src.match("pic3.jpg")){
		 el.src = "pic5.jpg";
		
	} else if (el.src.match("pic5.jpg")){
		el.src = "one.jpg";
		// do nothing
	} else if (el.src.match("one.jpg")){
		el.src = "pic4.jpg";
	} else if (el.src.match("pic4.jpg")){
		el.src = "pic1.jpg";
	}else if (el.src.match("pic1.jpg")) {
		el.src = "pic2.jpg";
		//do nothing
	}
}

function nextImage2(el){
	if (el.src.match("pic3.jpg")){
		 el.src = "pic1.jpg";

	} else if (el.src.match("pic1.jpg")){
		 el.src = "pic2.jpg";
		
	} else if (el.src.match("pic2.jpg")){
		 el.src = "pic4.jpg";
		
	} else if (el.src.match("pic4.jpg")){
		el.src = "pic6.jpg";
		// do nothing
	} else if (el.src.match("pic6.jpg")){
		el.src = "pic4.jpg";
	} else if (el.src.match("pic4.jpg")){
		el.src = "pic2.jpg";
	}else if (el.src.match("pic2.jpg")) {
		el.src = "pic3.jpg";
		//do nothing
	}
}

function nextImage3(el){
	if (el.src.match("pic4.jpg")){
		 el.src = "pic1.jpg";

	} else if (el.src.match("pic1.jpg")){
		 el.src = "pic2.jpg";
		
	} else if (el.src.match("pic2.jpg")){
		 el.src = "seven.jpg";
		
	} else if (el.src.match("seven.jpg")){
		el.src = "pic4.jpg";
		// do nothing
	} else if (el.src.match("pic4.jpg")){
		el.src = "pic5.jpg";
	} else if (el.src.match("pic5.jpg")){
		el.src = "pic6.jpg";
	}else if (el.src.match("pic6.jpg")) {
		el.src = "pic4.jpg";
		//do nothing
	}
}

function nextImage4(el){
	if (el.src.match("pic5.jpg")){
		 el.src = "pic1.jpg";

	} else if (el.src.match("pic1.jpg")){
		 el.src = "pic6.jpg";
		
	} else if (el.src.match("pic6.jpg")){
		 el.src = "pic3.jpg";
		
	} else if (el.src.match("pic3.jpg")){
		el.src = "pic1.jpg";
		// do nothing
	} else if (el.src.match("pic1.jpg")){
		el.src = "pic5.jpg";
	} else if (el.src.match("pic5.jpg")){
		el.src = "pic2.jpg";
	}else if (el.src.match("pic2.jpg")) {
		el.src = "pic5.jpg";
		//do nothing
	}
}

function nextImage5(el){
	if (el.src.match("pic6.jpg")){
		 el.src = "pic1.jpg";

	} else if (el.src.match("pic1.jpg")){
		 el.src = "pic2.jpg";
		
	} else if (el.src.match("pic2.jpg")){
		 el.src = "nine.jpg";
		
	} else if (el.src.match("nine.jpg")){
		el.src = "pic4.jpg";
		// do nothing
	} else if (el.src.match("pic4.jpg")){
		el.src = "pic5.jpg";
	} else if (el.src.match("pic5.jpg")){
		el.src = "pic6.jpg";
	}else if (el.src.match("pic6.jpg")) {
		el.src = "pic6.jpg";
		//do nothing
	}
}

function code1(el){
	if (el.src.match("questionmark.png")){
		 el.src = "one.jpg";

	} else if (el.src.match("one.jpg")){
		 el.src = "seven.jpg";
		
	} else if (el.src.match("seven.jpg")){
		 el.src = "nine.jpg";
		
	} else if (el.src.match("nine.jpg")){
		el.src = "questionmark.png";
		// do nothing
	}
}

function code2(el){
	if (el.src.match("questionmark.png")){
		 el.src = "seven.jpg";

	} else if (el.src.match("seven.jpg")){
		 el.src = "one.jpg";
		
	} else if (el.src.match("one.jpg")){
		 el.src = "nine.jpg";
		
	} else if (el.src.match("nine.jpg")){
		el.src = "questionmark.png";
		// do nothing
	}
}
	
function code3(el){
	if (el.src.match("questionmark.png")){
		 el.src = "nine.jpg";

	} else if (el.src.match("nine.jpg")){
		 el.src = "one.jpg";
		
	} else if (el.src.match("one.jpg")){
		 el.src = "seven.jpg";
		
	} else if (el.src.match("seven.jpg")) {
		el.src = "questionmark.png";
		//do nothing
	}
}


var timeleft = 40;
var downloadTimer = setInterval(function(){
  document.getElementById("progressBar").value = 40 - timeleft;
  timeleft -= 1;
  if(timeleft <= 0)
    clearInterval(downloadTimer);
}, 1000);
	setTimeout(function(){ alert("You ran out of time!!"); }, 41000);
		//window.location.reload(true);
	


function playSound() {
	 document.getElementById('there-found').play();
	 //it will play the sound when the image is clicked. 
}

function checkImages(){
	console.log("running check images");
	if (a.src.match("seven.jpg") && b.src.match("nine.jpg") && c.src.match("one.jpg")){
		mySound.play();
		console.log("Matched images");
	} else { 
	console.log("images don't match");
	//do nothing 
	}
}

