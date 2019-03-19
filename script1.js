//Variables are the key to avoid repeating code, instead you use the letter.
//what is being put into a variable is the id of the three images the user needs to put the code in and the spaceship image.
//location(#) is the three images id.
//spaceship is the id of the spacehsip image that users will click on to check if they got the code correct. 
a = document.getElementById('location1');
b = document.getElementById('location2');
c = document.getElementById('location3');
d = document.getElementById('spaceship');
//line 10 is the variable for my sound known as there-found.
//js finds the id from html
var mySound = document.getElementById('there-found');

//this is the beginning alerts that the user sees when starts the game.
//I added this so it guides the users on what is the mission that they need to complete.
//I added these set of alerts based on feedback that I recieved during user testing. 
setTimeout(function(){ alert("Alert!!I'm lost in Space and I can't find my spaceship."); }, 1000);
setTimeout(function(){ alert("In order to help me leave this planet, look through the scattered items at the bottom for clues!"); }, 1000);
setTimeout(function(){ alert("you will have 40seconds before you loose oxygen!"); }, 1000);
setTimeout(function(){ alert("Once you go through all the scattered items, find the right three numbers and click on the rocket to check!"); }, 1000);
setTimeout(function(){ alert("Good Luck!!"); }, 1000);

//This is the same code just different images for all 6 divs at the bottom.
//this function is called in the html it changes the image when the user clicks on the first image.
//it returns to the first image when the site is opened when the sequence of images have all been clicked on.
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

//this function is called in the html it changes the image when the user clicks on the first image
//it returns to the first image when the site is opened when the sequence of images have all been clicked on.
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

//this function is called in the html it changes the image when the user clicks on the first image
//it returns to the first image when the site is opened when the sequence of images have all been clicked on.
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
//this function is called in the html it changes the image when the user clicks on the first image
//it returns to the first image when the site is opened when the sequence of images have all been clicked on.
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
//this function is called in the html it changes the image when the user clicks on the first image
//it returns to the first image when the site is opened when the sequence of images have all been clicked on.
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
//this function is called in the html it changes the image when the user clicks on the first image
//it returns to the first image when the site is opened when the sequence of images have all been clicked on.
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

//The following three functions known as code(#) are the three images on the top left corner.
//this function will go through the cycle of numbers each time the user clicks the image.
//the user in this section will match the three numbers meaning the code to move to the next page.
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
//this function will go through the cycle of numbers each time the user clicks the image.
//the user in this section will match the three numbers meaning the code to move to the next page.
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
//this function will go through the cycle of numbers each time the user clicks the image.
//the user in this section will match the three numbers meaning the code to move to the next page.	
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

//this is the advance feature that I learned which is known as the progess bar.
//gave a var to the timeleft which is equalled to the maximun number, it will stop at 40 seconds.
var timeleft = 40;
var downloadTimer = setInterval(function(){
//Here is where we will use the progess bar id "getElementById found in the html.
//the value of 40 will be subtracted by the timeleft so it's counting up to 40 seconds.
//If you look at the progess bar it moves as it keeps time.
  document.getElementById("progressBar").value = 40 - timeleft;
//the timeleft is counting by 1 up to 40 seconds.
  timeleft -= 1;
  if(timeleft <= 0) 
    clearInterval(downloadTimer);
}, 1000);
//once the time runs out a alert will pop up and tell the user it ran out of time.
//after they click okay on the alert the site will reload. code: "location.reload()"
// the 41000 means that at he 41 second the alert will appear.
	setTimeout(function(){ alert("You ran out of time!!"); location.reload(); }, 41000);
	

function playSound() {
	 document.getElementById('there-found').play();
	 //it will play the sound when the image is clicked. 
}
//when the user matches the three images it will play the sound and change the page to the location the url indicates.
function checkImages(el){
	console.log("running check images");
	//these are the images the user needs to match so it plays the sound.
	if (a.src.match("one.jpg") && b.src.match("seven.jpg") && c.src.match("nine.jpg")){
		//the sound is the scanner.mp3
		mySound.play();
			console.log("Matched images");
		//once everything above of this function occurs the page and the spaceship is clicke to check it will go to this url location. 
			document.location.href= "https://dreblu.github.io/Final-Escape-Room/";
	} else { 
	console.log("images don't match");
	//do nothing 
	}
}


