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
		//info1
		kilo = "A workout heart rate monitor.";
        //dinfo1
		break;	
    case (x < 10):
		//info2
		kilo = "A full tank of gas.";
        //dinfo2
		break;
    case (x < 15):
		//info3
		kilo = "1 ticket to Disney.";
        //dinfo3
		break;	
    case (x < 20):
		//info4
		kilo = "A new bike.";
		//dinfo4
		break;
    case (x < 25):
		//info5
		kilo = "A new bike and a helmet.";
        //dinfo5
		break;	    
    case (x < 30):
		//info6
		kilo = "A night out on the town.";
        //dinfo6
		break;
    case (x < 35):
		//info7
		kilo = "1 new Nintendo Wii Console.";
        //dinfo7
		break;	 
    case (x < 40):
		//info8
		kilo = "1 new Nintendo 3DS.";
        //dinfo8
		break;
    case (x < 45):
		//info9
		kilo = "2 one-hour parasailing trips.";
        //dinfo9
		break;	        
     case (x < 50):
		//info10
		kilo = "1 skydive jump.";
        //dinfo10
		break;	
    case (x < 55):
		//info11
		kilo =  "A flight from Miami to Toronto, Canada";
        //dinfo11
		break;
    case (x < 60):
		//info12
		kilo =  "One iPhone 5s.";
        //dinfo12
		break;
    case (x < 65):
		//info13
		kilo = "39 large pizzas.";
        //dinfo13
		break;	
    case (x < 70):
		//info14
		kilo = "1 PlayStation 4 Console.";
        //dinfo14
		break;	
    case (x < 75):
		//info15
		kilo =  "4 brand new car tires.";
        //dinfo15
		break;
    case (x < 80):
		//info16
		kilo =  'An ultra-slim 42" LED Smart HDTV.';
        //dinfo16
		break;
     case (x < 85):
		//info17
		kilo = "A brand new 10' surfboard.";
        //dinfo17
		break;	
    case (x < 90):
		//info18
		kilo =  "67 year subscription to Netflix.";
        //dinfo18
		break;
    case (x < 95):
		//info19
		kilo = 'An ultra-slim 42" LED Smart HDTV.';
        //dinfo19
		break;	
    case (x < 100):
		//info20
		kilo =  "15' trampoline.";
        //dinfo20
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

