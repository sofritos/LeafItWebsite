var width = $(window).width();
var once = false;
var lastwasfour = false;

//checks if resources is already shown
function oncee(){
	if(!once){
		once=true;
		resourceshow();
	}
}

//scrolls to resources
function check(o){ 
	$("html, body").animate({ scrollTop: 1500 }, 950);
}

//shows all resources when first state is clicked
function resourceshow(){
	$('#resources').show();
		$('#resources').animate({
			height: '502px'
		},950);
		$('#resources').animate({
			height: '100%'
		},0);
		
	$('.hiddenvideo').show();
		$('.hiddenvideo').animate({
			height: '520px'
		},950);
		
	$('.hide').show();
		$('.hide').animate({
			height: '420px'
		},950);
		
	$('.hidden2').show();
	$('.hidden2').animate({
			opacity: '1'
		},950);
	
	$('.linkhide').show();
	$('.linkhide').animate({
			opacity: '1'
		},950);
}

//hides resource content
function down(){
	$('#holderoftheboxes').animate({
		opacity: '0'
	},800);
}

//shows resource content by gradually fading in
function up(i){
	$("#holderoftheboxes").fadeTo(400,1);
		$('.boxes').css('opacity','0');
		$(".boxes:eq(0)").fadeTo(500,1);
		$(".boxes:eq(1)").delay(400).fadeTo(500,1);
		$(".boxes:eq(2)").delay(800).fadeTo(500,1);
		if(i==3){
			$(".boxes:eq(3)").delay(1200).fadeTo(500,1);	
		}
}

//is called upon when a state is clicked
function states(state){
	
	//changes link for the first link resource
	$('#changelink').attr('href','http://www.dsireusa.org/incentives/index.cfm?re=0&ee=0&spv=0&st=0&srp=1&state='+state);
	
	var resources = "";
	var statename = document.getElementById('resourcenode');
	
	//places info into #resourcenode
	$('#resourcenode').html("Resources that are available in "+unAbreviator(state)+" include:");

	//This is a set of if statements of the different regions grouped together
	if(state=="FL"||state=="GA"||state=="AL"||state=="MS"||state=="LA"||state=="TN"||state=="SC"||state=="NC"){
		oncee();
		changeto(1);
		check(1);
	} else if(state=="VA"||state=="WV"||state=="DC"||state=="MD"||state=="DE"||state=="NJ"||state=="CT"||state=="RI"||state=="MA"||state=="NH"||state=="VT"||state=="ME"||state=="NY"||state=="PA"){
		oncee();
		changeto(2);
		check(1);
	} else if(state=="MN"||state=="WI"||state=="IL"||state=="IN"||state=="OH"||state=="MI"){
		oncee();
		changeto(2);
		check(1);
	} else if(state=="CA"||state=="NV"||state=="UT"||state=="AZ"||state=="NM"||state=="TX"){
		oncee();
		changeto(3);
		check(2);
	} else if(state=="KY"||state=="MO"||state=="AR"||state=="IA"||state=="SD"||state=="NE"||state=="KS"||state=="CO"||state=="OK"){
		oncee();
		changeto(2);
		check(1);
	} else if(state=="WA"||state=="OR"||state=="ID"||state=="MT"||state=="ND"||state=="WY"){
		oncee();
		changeto(1);
		check(1);
	} else if(state=="AK"){
		oncee();
		changeto(2);
		check(1);
	} else if(state=="HI"){
		oncee();
		changeto(1);
		check(1);
	} else {
		oncee();
		changeto(1);
		check(1);
	}
	
}