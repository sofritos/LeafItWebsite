//this is for the counter
var background, slider;
 var num = 0;
	function increment() {
		num++;
		document.getElementById('counter').innerHTML = num;
	}
	setInterval('increment()', 1000);


//---------------------------------------------this is for the slider------------------------------------------------------------------------

function init(){
	
	background = document.getElementById('background');
	slider = document.getElementById('slider');
	info = document.getElementById('info');
	money = document.getElementById('money');
	
	background.addEventListener('mousedown', startSlide, false);	
	background.addEventListener('mouseup', stopSlide, false);
	document.getElementById("containey").onselectstart = function(){ return false;}
}
 
function startSlide(event){
	var percent = ((( ( (event.clientX) - background.offsetLeft) / background.offsetWidth)*100).toFixed(0));
	background.addEventListener('mousemove', moveSlide, false);	
	slider.style.width = (percent) + '%';
	
	ugh(event);
}
 
function moveSlide(event){
	var percent = ((( ( (event.clientX) - background.offsetLeft) / background.offsetWidth)*100).toFixed(0));
	slider.style.width = (percent) + '%';
	document.getElementById("slider").style.cursor="move";
	
	ugh(event);
}
 
function stopSlide(event){
	var percent = ((( ( (event.clientX) - background.offsetLeft) / background.offsetWidth)*100).toFixed(0));
	
	
	background.removeEventListener('mousemove', moveSlide, false);
	slider.style.width = (percent) + '%';
	
	ugh(event);	
}

function ugh(event){

	var percent = ((( ( (event.clientX) - background.offsetLeft) / background.offsetWidth)*100).toFixed(0));
	
	var kilo =  "1 swap.";
	var moneys = 20;
	
	var x = percent;
	switch (true) {
    case (x < 5):
		kilo = "A workout heart rate monitor.";
        break;	
    case (x < 10):
		kilo = "A full tank of gas.";
        break;
    case (x < 15):
		kilo = "1 ticket to Disney.";
        break;	
    case (x < 20):
		kilo = "A new bike.";
        break;
    case (x < 25):
		kilo = "A new bike and a helmet.";
        break;	    
    case (x < 30):
		kilo = "A night out on the town.";
        break;
    case (x < 35):
		kilo = "1 new Nintendo Wii Console.";
        break;	 
    case (x < 40):
		kilo = "1 new Nintendo 3DS.";
        break;
    case (x < 45):
		kilo = "2 one-hour parasailing trips.";
        break;	        
     case (x < 50):
		kilo = "1 skydive jump.";
        break;	
    case (x < 55):
		kilo =  "A flight from Miami to Toronto, Canada";
        break;
    case (x < 60):
		kilo =  "One iPhone 5s.";
        break;
    case (x < 65):
		kilo = "39 large pizzas.";
        break;	
    case (x < 70):
		kilo = "1 PlayStation 4 Console.";
        break;	
    case (x < 75):
		kilo =  "4 brand new car tires.";
        break;
    case (x < 80):
		kilo =  'An ultra-slim 42" LED Smart HDTV.';
        break;
     case (x < 85):
		kilo = "A brand new 10' surfboard.";
        break;	
    case (x < 90):
		kilo =  "67 year subscription to Netflix.";
        break;
    case (x < 95):
		kilo = 'An ultra-slim 42" LED Smart HDTV.';
        break;	
    case (x < 100):
		kilo =  "15' trampoline.";
        break;
    default:
        kilo =  "15' trampoline.";
        break;
}

	var y = percent;
	switch (true) {
	case (y < 5):
		moneys = "30";
        break;
    case (y < 10):
		moneys = "60";
        break;
	case (y < 15):
		moneys = "90";
        break;    
    case (y < 20):
		moneys = "120";
        break;
    case (y < 25):
		moneys = "150";
        break;
	case (y < 30):
		moneys = "180";
        break;    
    case (y < 35):
		moneys = "210";
        break;
    case (y < 40):
		moneys = "240";
        break;
    case (y < 45):
		moneys = "270";
        break;
    case (y < 50):
		moneys = "300";
        break;
    case (y < 55):
		moneys = "330";
        break;
    case (y < 60):
		moneys = "360";
        break;
    case (y < 65):
		moneys = "390";
        break;
	case (y < 70):
		moneys = "420";
        break;
    case (y < 75):
		moneys = "450";
        break;
    case (y < 80):
		moneys = "480";
        break;
    case (y < 85):
		moneys = "510";
        break;
	case (y < 90):
		moneys = "540";
        break;
  	case (y < 95):
		moneys = "570";
        break;
	case (y < 100):
		moneys = "600";
        break;                
    default:
        moneys = "600";
        break;
}

	info.innerHTML = kilo;
	money.innerHTML = "$" + moneys;

}

