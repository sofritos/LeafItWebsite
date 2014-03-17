<!DOCTYPE html>
<head>
	
	<title>Cristian CMS</title>
	<script src='js/jquery.js'></script>
	<script>
		
		function allowDrop(ev){
			ev.preventDefault();
		}
		
		function drag(ev){
			ev.dataTransfer.setData("Text", ev.target.id);
		}
		
		function drop(ev){
			ev.preventDefault();
			var data = ev.dataTransfer.getData("Text");
			ev.target.appendChild(document.getElementById(data))
		}
		
		$(document).ready(function(){
			var input = "<?php $file = file_get_contents('cms/stateinfo.txt', FILE_USE_INCLUDE_PATH);echo $file; ?>";
			
			var splitt = input.split(',');
			var group2 = splitt[0].split(' ');
			var group3 = splitt[1].split(' ');
			var group4 = splitt[2].split(' ');
			
			all = splitt[0].split(" ").concat(splitt[1].split(" ")).concat(splitt[2].split(" "));
			winnow = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'];
			
			for(var u = 0; u<all.length; u++){
				var index = winnow.indexOf(all[u]);
				if (index > -1) {
					winnow.splice(index, 1);
				}
			}
			
			for(var i = 0; i<winnow.length; i++){
				$('#group1').append("<div id='"+winnow[i]+"' draggable='true' ondragstart='drag(event)' class='states'>"+winnow[i]+"</div>");
			}
			
			for(var i = 0; i<group2.length; i++){
				$('#group2').append("<div id='"+group2[i]+"' draggable='true' ondragstart='drag(event)' class='states'>"+group2[i]+"</div>");
			}
			
			for(var i = 0; i<group3.length; i++){
				$('#group3').append("<div id='"+group3[i]+"' draggable='true' ondragstart='drag(event)' class='states'>"+group3[i]+"</div>");
			}
			
			for(var i = 0; i<group4.length; i++){
				$('#group4').append("<div id='"+group4[i]+"' draggable='true' ondragstart='drag(event)' class='states'>"+group4[i]+"</div>");
			}
			
			//<div id='fl' draggable='true' ondragstart="drag(event)" class='states'>FL</div>
			
		});
	
	</script>
	<style>
		
		#container {
			width: 1000px;
			margin: 130px auto 0;
		}
		
		#group1, #group2, #group3, #group4 {
			width: 240px;
			height: 400px;
			background-color: lightgray;
			float: left;
			margin: 5px;
			font-family: calibri;
		}
		
		.states {
			width: 30px;
			height: 30px;
			background-color: white;
			margin: 5px;
			float: left;
			text-align: center;
			overflow: hidden;
		}
		
		.holder {
			
		}
		
		.info {
			font-family: calibri;
			position: absolute;
			margin-top: -40px;
			font-size: 20pt;
			width: 240px;
			text-align: center;
		}
		
		.submitbutton {
			border: 0;
			background-color: #3EB7BB;
			color: white;
			font-size: 13pt;
			padding: 10px 25px;
			margin-top: 10px;
		}

		.submitbutton:hover {
			background-color: #2F9194;
			cursor: pointer;
		}
		
	</style>
	
</head>
<body>
<a href='cmsv2/index.html'><div style='position: absolute; right: 10px; top: 0; margin-top: 0px;' class='submitbutton'>Go Back &raquo;</div></a>

	<div id='container'>
	<div class='holder' ondrop='drop(event)' ondragover="allowDrop(event)" id='group1'>
		<div class='info'>Unset</div>
		<!--<div id='fl' draggable='true' ondragstart="drag(event)" class='states'>FL</div>
		<div id='ga' draggable='true' ondragstart="drag(event)" class='states'>GA</div>-->
	</div>
	
	<div class='holder' ondrop='drop(event)' ondragover="allowDrop(event)" id='group2'>
		<div class='info'>Solar Power</div>
	</div>
	
	<div class='holder' ondrop='drop(event)' ondragover="allowDrop(event)" id='group3'>
		<div class='info'>Wind Energy</div>
	</div>
	
	<div class='holder' ondrop='drop(event)' ondragover="allowDrop(event)" id='group4'>
		<div class='info'>ALL</div>
	</div>
	
	<div style='clear:both'></div>
	<input id='submitform' type='submit' class='submitbutton' value='Update'/>
	</div>
	
	<script>
		
		$('#submitform').click(function(){
			
			var finishedtext = "";
			
			var groupp2 = $('#group2 div');
			for(var i = 1; i<groupp2.length; i++){
				finishedtext+=$("#group2 div").eq(i).html();
				if(i!=groupp2.length-1){
					finishedtext+=" ";
				}
			}
			
			if(groupp2.length>1){
				finishedtext+=",";
			}
			
			var groupp3 = $('#group3 div');
			for(var i = 1; i<groupp3.length; i++){
				finishedtext+=$("#group3 div").eq(i).html();
				if(i!=groupp3.length-1){
					finishedtext+=" ";
				}
			}
			
			var groupp4 = $('#group4 div');
			if(groupp3.length>1&&groupp4.length>1){
				finishedtext+=",";
			}
			
			for(var i = 1; i<groupp4.length; i++){
				finishedtext+=$("#group4 div").eq(i).html();
				if(i!=groupp4.length-1){
					finishedtext+=" ";
				}
			}
			
			//console.log(finishedtext);
			
			$('#updatetext').val(finishedtext);
			document.getElementById("updatestates").submit();
			
		});
	
	</script>
	
	<form id='updatestates' style='display: none;' method='post' action='updatestates.php'>
		<input id='updatetext' name='wholetext' type='text'/>
	</form>
	
	
</body>
</html>