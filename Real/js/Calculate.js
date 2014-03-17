//displays number pushed
function Calculate(num){
	$( "#input" ).append(num);
}

$(document).ready(function(){
	$("#enter").click(function(){

		$("#waiting").hide();
		$(".hidden").fadeIn();
		$(".right").fadeIn();
		$(".right2").fadeIn();

		//sidebar calculator
		var what = parseInt($("#input").text(), 10);
		var yea = what*10;
	  
		var amountofregbulbs = what;
		var howmanyhoursused = 6;
		var energycost = .117; // this is cents per kwh

		var incwattage = 60;
		var regamountperyear = getKilowatthours(amountofregbulbs,incwattage,howmanyhoursused,energycost);

		//-----------------------------------------
		var ledbulbwattage = 10;
		var ledamountperyear = getKilowatthours(amountofregbulbs,ledbulbwattage,howmanyhoursused,energycost);
		var ledsaved = regamountperyear-ledamountperyear;

		//-----------------------------------------
		var cflbulbwattage = 15;
		var cflamountperyear = getKilowatthours(amountofregbulbs,cflbulbwattage,howmanyhoursused,energycost);
		var cflsaved = regamountperyear-cflamountperyear;
		
		//this is to add commas to large numbers
		Number.prototype.formatMoney = function(c, d, t){
		var n = this, 
			c = isNaN(c = Math.abs(c)) ? 2 : c, 
			d = d == undefined ? "." : d, 
			t = t == undefined ? "," : t, 
			s = n < 0 ? "-" : "", 
			i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", 
			j = (j = i.length) > 3 ? j % 3 : 0;
		   return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
		 };

		//display the info into the table
		$(".save1:eq(0)").html("$" + roundhundred(regamountperyear).formatMoney(2));
		$(".save2:eq(0)").html("$" + roundhundred(regamountperyear*5).formatMoney(2));
		$(".save3:eq(0)").html("$" + roundhundred(regamountperyear*10).formatMoney(2));
		$(".save4:eq(0)").html("$" + roundhundred(regamountperyear*20).formatMoney(2));

		$(".save1:eq(1)").html("$" + roundhundred(ledamountperyear).formatMoney(2));
		$(".save2:eq(1)").html("$" + roundhundred(ledamountperyear*5).formatMoney(2));
		$(".save3:eq(1)").html("$" + roundhundred(ledamountperyear*10).formatMoney(2));
		$(".save4:eq(1)").html("$" + roundhundred(ledamountperyear*20).formatMoney(2));

		$(".save1:eq(2)").html("$" + roundhundred(cflamountperyear).formatMoney(2));
		$(".save2:eq(2)").html("$" + roundhundred(cflamountperyear*5).formatMoney(2));
		$(".save3:eq(2)").html("$" + roundhundred(cflamountperyear*10).formatMoney(2));
		$(".save4:eq(2)").html("$" + roundhundred(cflamountperyear*20).formatMoney(2));
		 

	});
  
	$("#clear").click(function(){
  
		$(".hidden").hide();
		$(".right").hide();
		$(".right2").hide();
		
		$("#waiting").fadeIn();
		
		$( ".result" ).html("");
 	 
  });

});

//rounds to the nearest hundred
function roundhundred(input){
	return Math.round(input*100)/100;
}

//gets the kilowatt hours from information you put in
function getKilowatthours(amountofbulbs, wattage, hours, energycost){
	return amountofbulbs*wattage/1000*hours*365*energycost;
}

//gets how much carbon is used by the kilowatt hours
function gethowmuchcarbon(kwh){
	return (kwh*.00070555)*2204.62262;
}