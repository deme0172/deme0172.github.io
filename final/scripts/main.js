var activeThumbIndex = 0;

window.onload = init;

function init() {
	document.querySelector('#red').onclick = redDiv;
	// event listener = onclick
	// # = id
	// .className = class

	document.querySelector('#orange').onclick = orangeDiv;

	document.querySelector('#yellow').onclick = yellowDiv;
	
	document.querySelector('#green').onclick = greenDiv;
	
	document.querySelector('#blue').onclick = blueDiv;
	
	document.querySelector('#purple').onclick = purpleDiv;
	
	document.querySelector('#pink').onclick = pinkDiv;

}

function redDiv() {
	document.querySelector('.header').style.backgroundColor = "#F44336";
	//Red  #F44336
	document.querySelector('.site-content').style.backgroundColor = "#B71C1C";
	//Dark Red  #B71C1C
	document.querySelector('.wrapper').style.backgroundColor = "#FFEBEE";
	//Rosy White  #FFEBEE
	document.querySelector('.site-section-two').style.backgroundColor = "#FFEBEE";
	document.querySelector('.heading-two').style.backgroundColor = "#FFEBEE"
	document.querySelector('.contact-info').style.backgroundColor = "#E57373";
	//Faded Red  #E57373
	document.querySelector('.social-media').style.backgroundColor = "#E57373";
	document.querySelector('.copyright').style.backgroundColor = "#E57373";
}

function orangeDiv() {
	document.querySelector('.header').style.backgroundColor = "#FF3D00";
	//Orange  #FF3D00
	document.querySelector('.site-content').style.backgroundColor = "#BF360C";
	//Dark Orange  #BF360C
	document.querySelector('.wrapper').style.backgroundColor = "#FFF3E0";
	//Light Orange  #FFF3E0
	document.querySelector('.site-section-two').style.backgroundColor = "#FFF3E0";
	document.querySelector('.heading-two').style.backgroundColor = "#FFF3E0";
	document.querySelector('.contact-info').style.backgroundColor = "#FFB74D";
	//Faded Orange  #FFB74D
	document.querySelector('.social-media').style.backgroundColor = "#FFB74D";
	document.querySelector('.copyright').style.backgroundColor = "#FFB74D";
}

function yellowDiv() {
	document.querySelector('.header').style.backgroundColor = "#FFEB3B";
	//Yellow  #FFEB3B
	document.querySelector('.site-content').style.backgroundColor = "#FFD600";
	//Dark Yellow  #FFD600
	document.querySelector('.wrapper').style.backgroundColor = "#FFFDE7";
	//Light Yellow  #FFFDE7
	document.querySelector('.site-section-two').style.backgroundColor = "#FFFDE7";
	document.querySelector('.heading-two').style.backgroundColor = "#FFFDE7";
	document.querySelector('.contact-info').style.backgroundColor = "#FFF176";
	//Faded Yellow  #FFF176
	document.querySelector('.social-media').style.backgroundColor = "#FFF176";
	document.querySelector('.copyright').style.backgroundColor = "#FFF176";
}

function greenDiv() {
	document.querySelector('.header').style.backgroundColor = "#4CAF50";
	//Green  #4CAF50
	document.querySelector('.site-content').style.backgroundColor = "#1B5E20";
	//Dark Green  #1B5E20
	document.querySelector('.wrapper').style.backgroundColor = "#E8F5E9";
	//Light Green  #E8F5E9
	document.querySelector('.site-section-two').style.backgroundColor = "#E8F5E9";
	document.querySelector('.heading-two').style.backgroundColor = "#E8F5E9";
	document.querySelector('.contact-info').style.backgroundColor = "#81C784";
	//Faded Green  #81C784
	document.querySelector('.social-media').style.backgroundColor = "#81C784";
	document.querySelector('.copyright').style.backgroundColor = "#81C784";
}

function blueDiv() {
	document.querySelector('.header').style.backgroundColor = "#2196F3";
	//Blue  #2196F3
	document.querySelector('.site-content').style.backgroundColor = "#0D47A1";
	//Dark Blue  #0D47A1
	document.querySelector('.wrapper').style.backgroundColor = "#E3F2FD";
	//Light Blue  #E3F2FD
	document.querySelector('.site-section-two').style.backgroundColor = "#E3F2FD";
	document.querySelector('.heading-two').style.backgroundColor = "#E3F2FD";
	document.querySelector('.contact-info').style.backgroundColor = "#64B5F6";
	//Faded Blue  #64B5F6
	document.querySelector('.social-media').style.backgroundColor = "#64B5F6";
	document.querySelector('.copyright').style.backgroundColor = "#64B5F6";
}

function purpleDiv() {
	document.querySelector('.header').style.backgroundColor = "#9C27B0";
	//Purple  #9C27B0
	document.querySelector('.site-content').style.backgroundColor = "#6A1B9A";
	//Dark Purple  #6A1B9A
	document.querySelector('.wrapper').style.backgroundColor = "#F3E5F5";
	//Light Purple  #F3E5F5
	document.querySelector('.site-section-two').style.backgroundColor = "#F3E5F5";
	document.querySelector('.heading-two').style.backgroundColor = "#F3E5F5";
	document.querySelector('.contact-info').style.backgroundColor = "#BA68C8";
	//Faded Purple  #BA68C8
	document.querySelector('.social-media').style.backgroundColor = "#BA68C8";
	document.querySelector('.copyright').style.backgroundColor = "#BA68C8";
}

function pinkDiv() {
	document.querySelector('.header').style.backgroundColor = "#E91E63";
	//Pink  #E91E63
	document.querySelector('.site-content').style.backgroundColor = "#880E4F";
	//Dark Pink  #880E4F
	document.querySelector('.wrapper').style.backgroundColor = "#FCE4EC";
	//Light Pink   #FCE4EC
	document.querySelector('.site-section-two').style.backgroundColor = "#FCE4EC";
	document.querySelector('.heading-two').style.backgroundColor = "#FCE4EC";
	document.querySelector('.contact-info').style.backgroundColor = "#F06292";
	//Faded Pink  #F06292
	document.querySelector('.social-media').style.backgroundColor = "#F06292";
	document.querySelector('.copyright').style.backgroundColor = "#F06292";
}