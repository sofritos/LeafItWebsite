//Arrays of information for each resource
var he = new Array(3);
he[0] = "<p><b>Behavioral changes.</b>  Changing the way that we, as individuals, use our water resources, has a significant effect on the gallons of water saved. Using garden hoses to leave your drive way spotless, propels an important amount of unused water that you could be saving. Cleaning with a broom instead could save up to 80 gallons of fresh water! Another small and easy change is brushing your teeth with the faucet off. Leaving the water running while scrubbing those pearly whites wastes 4.5 gallons each time. </p>";
he[1] = "<p><b>Water.</b> Sprinkle wisely.Sprinklers are sold in multiple ways. Some spray a mist while moving in a circular motion, others simple shoot water out in a singular direction. Using sprinklers that distribute big drops of water instead of smaller drops would be much more effective because these mist-like water droplets usually evaporate before moisturizing the soil. </p>";
he[2] = "<p><b>Flushing money down the toilet. </b> Many have heard the expression, \"You&apos;re flushing money down the toilet.\" However, if you own a toilet that was mounted before 1992, you may be wasting a significant amount of water. Not only does this mean you are giving away your hard earned money, but you are also sending our limited fresh water into an abyss.  Purchasing a WaterSense&reg; branded toilet can shrink the extent of water used for each flush. There are many other brands that have two separate flush buttons. One for solely liquid waste, which dispenses a minimal amount of water as it flushes, and a separate button for solid waste that allots a greater volume of water to flush the toilet. </p>";

var so = new Array(3);
so[0] = "<p><b>Solar Energy.</b> Renewable Energy. Considering that the quantity of sunlight changes throughout the day and time of year, the Sun&apos;s energy is a practically unlimited resource. This provides an advantage against the traditionally used fossil fuels, which are exported by a limited number of countries.</p>";
so[1] = "<p><b>Made to fit your needs.</b> The photovoltaic panels can be scaled and combined in an infinite number of ways to provide the appropriate amount of energy for a specific location. Whether the solar system provides energy to a shopping mall or a three-bedroom home, the panels can be organized to function as necessary. Conveniently, the solar panels are propped up on movable platforms that have sensors to follow the sun as it progresses through the sky. This allows the modules to receive the maximum measure of sunlight. </p>";
so[2] = "<p><b>Remember your location</b> The Sun's rays don't always shine depending on when you are and what season it is. However, solar energy is more widespread than people think, and the solar module can be used in remote places, suburbs, and even crowded cities. </p>"; 

var pow = new Array(3);
pow[0] = "<p><b>Careful with the temperature.</b> Heating and cooling takes up about 50% of a home&apos;s energy intake. Turning down your thermostat saves 3%-5% of the heating energy for each degree below 68&deg;F (20&deg;C) during cooler weather. Similarly, keeping is higher when the weather is warmer, allows your air conditioning system to take a break and save energy. </p>";
pow[1] = "<p><b>Green machines.</b> 18% of a usual home&apos;s total energy bill is a result of appliance use. Whether it be microwaves, refrigerators, washing machines or your stove, the EPA advices that appliances beyond 10 years year should be replaced with energy-efficient models. These energy savvy appliances have an \"Energy Star\" logo, which means that the machines use 10%-50% less energy and water than their ordinary counterparts. In fact, every one in 10 homes using energy-efficient machines, is comparable to rooting 1.7 million fresh acres of trees!</p>";
pow[2] = "<p><b>Power.</b> Light up the room. Compact Fluorescent Light bulbs only use 34% of the energy used by a customary incandescent bulb. Incandescent bulbs last one tenth of the time a Compact Fluorescent Light bulb lasts. Swapping a 100-watt incandescent bulb with a 32-watt CFL can save you $30 for each bulb replaced.</p>";

var win = new Array(2);
win[0] = "<p><b>Wind Power. </b> Less CO&#x2082; Simply put, less fossil fuel utilization results in less carbon dioxide. Green energy such as wind energy results in a huge improvement for the environment. One Megawatt of wind energy results in 2,6000 fewer tons of carbon dioxide (CO&#x2082;). 400 average-sized homes, can be powered with one Megawatt of wind energy.</p>";
win[1] = "<p><b>Cost effective energy production.</b>Though wind power is actually free, the price of wind-generated electricity is 2.5-5&cent; per kWh. This is significantly lower than is price in the 1980s of nearly 40&cent; per kWh.</p>";
win[2] = "<p><b>Free fuel.</b> Since wind can be used at it&apos;s harness site, there is no need for it to be dispatched to a processing plant resulting in free fuel. Due to the fact that wind is a local fuel, it doesn&apos;t require mining or transporting.  With fossil fuels, these two costs significantly raise their market price. Eliminating these expenses makes fuel extremely affordable.</p>";


var hydroelectric; 
var solar; 
var power;
var wind; 

//image sources of the different resources
var hydropic = "imgs2/Hydroelectric-Power-256.png";
var solarpic = "imgs2/Solar-256.png";
var powerpic = "imgs2/Power-256.png";
var windpic = "imgs2/Windmill-04-256.png";

//places info from array into variables that will be displayed on main slide
function getvariables(){
	hydroelectric = he[1];
	solar = so[0];
	power = pow[2];
	wind = win[0];
}

function changeto(i){
//i=1: hydro+wind+energy
//i=2: solar + hydro + energy
//i=3: all

getvariables();

//checks if the main container for the new boxes are empty and if they are it goes to a different function so as to not have the disappearing animation
if($("#holderoftheboxes").html()==""){
	other(i);
} else {
	//hides other divs
	down();
	//waits until after the old boxes are gone
	$("#holderoftheboxes").delay(600).queue(function(n){
		//adds new boxes
		var box1 = "<div class='boxes'><div class='center'><img src='";
			box1+=hydropic+"' />";
			box1+="<br /><p>"
			box1+=hydroelectric;
			box1+="<a class='readmore' onClick='extrainfo0("+i+");'>Read More &raquo;</a></p></div></div>";

		var box2 = "<div class='boxes'><div class='center'><img src='";
		box2+=powerpic+"' />";
		box2+="<br /><p>"
		box2+=power;
		box2+="<a class='readmore' onClick='extrainfo("+i+");'>Read More &raquo;</a></p></div></div>";
		
		if(i==1){
			var box3 = "<div class='boxes'><div class='center'><img src='";
			box3+=solarpic+"' />";
			box3+="<br /><p>"
			box3+=solar;
			box3+="<a class='readmore' onClick='extrainfo3("+i+");'>Read More &raquo;</a></p></div></div>";
			$("#holderoftheboxes").html("");
			$("#holderoftheboxes").append(box1);
			$("#holderoftheboxes").append(box2);
			$("#holderoftheboxes").append(box3);
			$(".boxes").css('width','33%');
		} else if (i==2){
			var box3 = "<div class='boxes'><div class='center'><img src='";
			box3+=windpic+"' />";
			box3+="<br /><p>"
			box3+=wind;
			box3+="<a class='readmore' onClick='extrainfo2("+i+");'>Read More &raquo;</a></p></div></div>";
			$("#holderoftheboxes").html("");
			$("#holderoftheboxes").append(box1);
			$("#holderoftheboxes").append(box2);
			$("#holderoftheboxes").append(box3);
			$(".boxes").css('width','33%');
		} else if (i==3){
			var box3 = "<div class='boxes'><div class='center'><img src='";
			box3+=solarpic+"' />";
			box3+="<br /><p>"
			box3+=solar;
			box3+="<a class='readmore' onClick='extrainfo3("+i+");'>Read More &raquo;</a></p></div></div>";
			var box4 = "<div class='boxes'><div class='center'><img src='";
			box4+=windpic+"' />";
			box4+="<br /><p>"
			box4+=wind;
			box4+="<a class='readmore' onClick='extrainfo2("+i+");'>Read More &raquo;</a></p></div></div>";
			$("#holderoftheboxes").html("");
			$("#holderoftheboxes").append(box1);
			$("#holderoftheboxes").append(box2);
			$("#holderoftheboxes").append(box3);
			$("#holderoftheboxes").append(box4);
			$(".boxes").css('width','25%');
		}
		n();
		
		//shows the new boxes
		up(i);
		
		
	});
}


}//end of function

//function that is run if this is the first state clicked
function other(i){ 
	var box1 = "<div class='boxes'><div class='center'><img src='";
		box1+=hydropic+"' />";
		box1+="<br /><p>"
		box1+=hydroelectric;
		box1+="<a class='readmore' onClick='extrainfo0("+i+");'>Read More &raquo;</a></p></div></div>";

	var box2 = "<div class='boxes'><div class='center'><img src='";
	box2+=powerpic+"' />";
	box2+="<br /><p>"
	box2+=power;
	box2+="<a class='readmore' onClick='extrainfo("+i+");'>Read More &raquo;</a></p></div></div>";

	if(i==1){
		var box3 = "<div class='boxes'><div class='center'><img src='";
		box3+=solarpic+"' />";
		box3+="<br /><p>"
		box3+=solar;
		box3+="<a class='readmore' onClick='extrainfo3("+i+");'>Read More &raquo;</a></p></div></div>";
		$("#holderoftheboxes").html("");
		$("#holderoftheboxes").append(box1);
		$("#holderoftheboxes").append(box2);
		$("#holderoftheboxes").append(box3);
	} else if (i==2){
		var box3 = "<div class='boxes'><div class='center'><img src='";
		box3+=windpic+"' />";
		box3+="<br /><p>"
		box3+=wind;
		box3+="<a class='readmore' onClick='extrainfo2("+i+");'>Read More &raquo;</a></p></div></div>";
		$("#holderoftheboxes").html("");
		$("#holderoftheboxes").append(box1);
		$("#holderoftheboxes").append(box2);
		$("#holderoftheboxes").append(box3);
	} else if (i==3){
		var box3 = "<div class='boxes'><div class='center'><img src='";
		box3+=solarpic+"' />";
		box3+="<br /><p>"
		box3+=solar;
		box3+="<a class='readmore' onClick='extrainfo3("+i+");'>Read More &raquo;</a></p></div></div>";
		var box4 = "<div class='boxes'><div class='center'><img src='";
		box4+=windpic+"' />";
		box4+="<br /><p>"
		box4+=wind;
		box4+="<a class='readmore' onClick='extrainfo2("+i+");'>Read More &raquo;</a></p></div></div>";
		$("#holderoftheboxes").html("");
		$("#holderoftheboxes").append(box1);
		$("#holderoftheboxes").append(box2);
		$("#holderoftheboxes").append(box3);
		$("#holderoftheboxes").append(box4);
		$(".boxes").css('width','25%');
	}
	$('.boxes').css('opacity','0');
		$(".boxes:eq(0)").delay(1000).fadeTo(500,1);
		$(".boxes:eq(1)").delay(1400).fadeTo(500,1);
		$(".boxes:eq(2)").delay(1800).fadeTo(500,1);
		if(i==3){
			$(".boxes:eq(3)").delay(2200).fadeTo(500,1);	
			
		}
}

//--------------------------------------------------------------------------------------------------------------------------------------Extra Info for Power
function extrainfo(i){
	$('.boxes:eq(0)').animate({
		opacity: '0'
	},400);
	$('.boxes:eq(0)').animate({
		width: '0',
		height: '0'
	},500);
	$('.boxes:eq(2)').animate({
		opacity: '0'
	},400);
	$('.boxes:eq(2)').animate({
		width: '0',
		height: '0'
	},500);
	$('.boxes:eq(0)').hide(0);
	$('.boxes:eq(2)').hide(0);
	$('.boxes:eq(1) a').html("");
	if(i==3){
		$('.boxes:eq(3)').animate({
			opacity: '0'
		},400);
		$('.boxes:eq(3)').animate({
			width: '0',
			height: '0'
		},500);
		$('.boxes:eq(3)').hide(0);
	}
	
	var box2 = "<div class='boxes'><div class='center'><img src='";
		box2+=powerpic+"' />";
		box2+="<br /><p>"
		box2+=pow[0];
		box2+="</p></div></div>";
		
	var box3 = "<div class='boxes'><div class='center'><img src='";
		box3+=powerpic+"' />";
		box3+="<br /><p>"
		box3+=pow[1];
		box3+="</p><a class='backbutton' onClick='changeto("+i+");check(0);'>Go Back &raquo;</a></div></div>";

	setTimeout(function(){
		$("#holderoftheboxes").append(box2);
		$("#holderoftheboxes").append(box3);
		$(".boxes:eq(0)").remove();
		$(".boxes:eq(1)").remove();
		if(i==3){
			$(".boxes:eq(1)").remove();
			$(".boxes").animate({
			width: '33%'
			},200);
		}
		$(".boxes:eq(1)").css('opacity','0');
		$(".boxes:eq(2)").css('opacity','0');
			$(".boxes:eq(1)").animate({
				opacity: '1'
			},500);
			$(".boxes:eq(2)").delay(400).animate({
				opacity: '1'
			},500);		
	},900);
	
}

//------------------------------------------------------------------------------------------------------------------------------ Extra info for Hydroelectric
function extrainfo0(i){

	$('.boxes:eq(1)').animate({
		opacity: '0'
	},400);
	$('.boxes:eq(1)').animate({
		width: '0',
		height: '0'
	},500);
	$('.boxes:eq(2)').animate({
		opacity: '0'
	},400);
	$('.boxes:eq(2)').animate({
		width: '0',
		height: '0'
	},500);
	$('.boxes:eq(1)').hide(0);
	$('.boxes:eq(2)').hide(0);
	$('.boxes:eq(0) a').html("");
	if(i==3){
		$('.boxes:eq(3)').animate({
			opacity: '0'
		},400);
		$('.boxes:eq(3)').animate({
			width: '0',
			height: '0'
		},500);
		$('.boxes:eq(3)').hide(0);
	}
	var box2 = "<div class='boxes'><div class='center'><img src='";
		box2+=hydropic+"' />";
		box2+="<br /><p>"
		box2+=he[0];
		box2+="</p></div></div>";
		
	var box3 = "<div class='boxes'><div class='center'><img src='";
		box3+=hydropic+"' />";
		box3+="<br /><p>"
		box3+=he[2];
		box3+="</p><a class='backbutton' onClick='changeto("+i+");check(0);'>Go Back &raquo;</a></div></div>";

	setTimeout(function(){
		$("#holderoftheboxes").append(box2);
		$("#holderoftheboxes").append(box3);
		$(".boxes:eq(1)").remove();
		$(".boxes:eq(1)").remove();
		if(i==3){
			$(".boxes:eq(1)").remove();
			$(".boxes").animate({
			width: '33%'
			},200);
		}
		$(".boxes:eq(1)").css('opacity','0');
		$(".boxes:eq(2)").css('opacity','0');
		$(".boxes:eq(1)").animate({
			opacity: '1'
		},500);
		$(".boxes:eq(2)").delay(400).animate({
			opacity: '1'
		},500);
	
	},900);
	
}

//----------------------------------------------------------------------------------------------------------------------------------- Extra info for wind
function extrainfo2(i){
	$('.boxes:eq(1)').animate({
		opacity: '0'
	},400);
	$('.boxes:eq(1)').animate({
		width: '0',
		height: '0'
	},500);
	$('.boxes:eq(0)').animate({
		opacity: '0'
	},400);
	$('.boxes:eq(0)').animate({
		width: '0',
		height: '0'
	},500);
	$('.boxes:eq(1)').hide(0);
	$('.boxes:eq(0)').hide(0);
	$('.boxes:eq(2) a').html("");
	if(i==3){
		$('.boxes:eq(2)').animate({
			opacity: '0'
		},400);
		$('.boxes:eq(2)').animate({
			width: '0',
			height: '0'
		},500);
		$('.boxes:eq(2)').hide(0);
		$('.boxes:eq(3) a').html("");
	}
	var box2 = "<div class='boxes'><div class='center'><img src='";
		box2+=windpic+"' />";
		box2+="<br /><p>"
		box2+=win[1];
		box2+="</p></div></div>";
		
	var box3 = "<div class='boxes'><div class='center'><img src='";
		box3+=windpic+"' />";
		box3+="<br /><p>"
		box3+=win[2];
		box3+="</p><a class='backbutton' onClick='changeto("+i+");check(0);'>Go Back &raquo;</a></div></div>";

	setTimeout(function(){
		$("#holderoftheboxes").append(box2);
		$("#holderoftheboxes").append(box3);
		$(".boxes:eq(0)").remove();
		$(".boxes:eq(0)").remove();
		if(i==3){
			$(".boxes:eq(0)").remove();
			$(".boxes").animate({
			width: '33%'
			},200);
		}
		$(".boxes:eq(1)").css('opacity','0');
		$(".boxes:eq(2)").css('opacity','0');
		$(".boxes:eq(1)").animate({
			opacity: '1'
		},500);
		$(".boxes:eq(2)").delay(400).animate({
			opacity: '1'
		},500);
	
	},900);
	
}

//----------------------------------------------------------------------------------------------------------------------------------- Extra info for solar
function extrainfo3(i){
	$('.boxes:eq(1)').animate({
		opacity: '0'
	},400);
	$('.boxes:eq(1)').animate({
		width: '0',
		height: '0'
	},500);
	$('.boxes:eq(0)').animate({
		opacity: '0'
	},400);
	$('.boxes:eq(0)').animate({
		width: '0',
		height: '0'
	},500);
	$('.boxes:eq(1)').hide(0);
	$('.boxes:eq(0)').hide(0);
	$('.boxes:eq(2) a').html("");
	if(i==3){
		$('.boxes:eq(3)').animate({
			opacity: '0'
		},400);
		$('.boxes:eq(3)').animate({
			width: '0',
			height: '0'
		},500);
		$('.boxes:eq(3)').hide(0);
		$('.boxes:eq(2) a').html("");
	}
	var box2 = "<div class='boxes'><div class='center'><img src='";
		box2+=solarpic+"' />";
		box2+="<br /><p>"
		box2+=so[1];
		box2+="</p></div></div>";
		
	var box3 = "<div class='boxes'><div class='center'><img src='";
		box3+=solarpic+"' />";
		box3+="<br /><p>"
		box3+=so[2];
		box3+="</p><a class='backbutton' onClick='changeto("+i+");check(0);'>Go Back &raquo;</a></div></div>";

	setTimeout(function(){
		$("#holderoftheboxes").append(box2);
		$("#holderoftheboxes").append(box3);
		$(".boxes:eq(0)").remove();
		$(".boxes:eq(0)").remove();
		if(i==3){
			$(".boxes:eq(1)").remove();
			$(".boxes").animate({
			width: '33%'
			},200);
		}
		$(".boxes:eq(1)").css('opacity','0');
		$(".boxes:eq(2)").css('opacity','0');
		$(".boxes:eq(1)").animate({
			opacity: '1'
		},500);
		$(".boxes:eq(2)").delay(400).animate({
			opacity: '1'
		},500);
		
	},900);
	
}