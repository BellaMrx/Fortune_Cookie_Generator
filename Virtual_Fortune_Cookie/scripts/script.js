//in HTML this.onclick=null => means only click once possible
function openVC() {
	
	// change start image to image with quote by clicking on it
	var body = document.querySelector("img.closeCookie");
	body.style.animation = "shake 0.8s";			//animation
	//delay of display when clicked by button with timeout
	setTimeout (() => {
	body.src = "/Virtual_Fortune_Cookie/images/fortune-cookie-text1.png";
	body.style.width = "800px";
	body.style.height = "425px";
	body.style.text_align = "center";
	body.style.margin = "0px", "auto";
	body.style.padding = "0px";
	body.style.position = "relative";
	body.style.borderRadius = "100px";


// selection of quotes listed with array
var quote = new Array();
quote[0] = "Don’t hold onto thingsthat require a tight grip.";
quote[1] = "Look how far you've come.";
quote[2] = "Sitting in silence with you is all the noise I need.";
quote[3] = "Every good and perfect gift is from above.";
quote[4] = "Be careful who you trust. Salt and sugar look the same.";
quote[5] = "She lives the poetry she cannot write. (Oscar Wilde)";

//random quote is selected
var options = Math.floor(Math.random()*quote.length);
//reproduces random quote
document.getElementById("cookieText").innerHTML = quote[options];

//final sentence,farewell is generated
document.getElementById("goodbyeText").innerHTML = "Thank you for your visit. You are welcome to visit us again.";
//time of the timeout
}, 1000);
};


