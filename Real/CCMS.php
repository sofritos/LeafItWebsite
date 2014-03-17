<!DOCTYPE html>
<head>

	<title>Cristian CMS</title>
	<link href='CMS.css' rel='stylesheet'/>
	<script src='js/jquery.js'></script>
	
</head>
<body>

	<h1>Cristian CMS</h1>
	
	<script>
		$(document).ready(function(){
			var input = "<?php $file = file_get_contents('cms/stateinfo.txt', FILE_USE_INCLUDE_PATH);echo $file; ?>";
			
			groups = input.split(",");
			
			displayGroups();
			
			all = groups[0].split(" ").concat(groups[1].split(" ")).concat(groups[2].split(" "));
			console.log(all);
			
			
			allstates = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'];
			
			
			winnow = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'];
			remwinnow = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'];
			
			for(var u = 0; u<all.length; u++){
				var index = winnow.indexOf(all[u]);
				if (index > -1) {
					winnow.splice(index, 1);
				}
			}
			
			for(var t = 0; t<winnow.length; t++){
				var index = remwinnow.indexOf(winnow[t]);
				if (index > -1) {
					remwinnow.splice(index, 1);
				}
			}
			
			for(var i = 0; i<remwinnow.length; i++){
				$('#selecttt').append("<option value='"+remwinnow[i]+"'>"+remwinnow[i]+"</option>");
			}
			
			for(var i = 0; i<winnow.length; i++){
				$('#selectt').append("<option value='"+winnow[i]+"'>"+winnow[i]+"</option>");
			}
			
		});
		
		function displayGroups(){
			$('#group1').html(groups[0]);
			$('#group2').html(groups[1]);
			$('#group3').html(groups[2]);
		}
	</script>
	
	
	<style>
		textarea {
			background-color: lightgray;
			resize: none;
			user-select: none;
			-webkit-user-select: none;
		}
	</style>
	
	<div id='add'>
		<p>Add State</p>
		<select id='selectt' name='states'></select>
		<select id='groupp' name='groupp'>
			<option value='Solar'>Solar</option>
			<option value='Wind'>Wind</option>
			<option value='All'>All</option>
		</select>
		<input onClick='addob();' id='addbutton' type='submit' value='Add'/>
		</br></br>
	</div>
	
	<script>
		
		function addob(){
			
			var addoption = $('#selectt option:selected').text();
			var addgroup = $('#groupp option:selected').text();
			
			if(addgroup == 'Solar'){
				groups[0]+= " "+addoption;
			} else if(addgroup == 'Wind'){
				groups[1]+= " "+addoption;
			} else if(addgroup == 'All'){
				groups[2]+= " "+addoption;
			}
			
			displayGroups();
			
			all = groups[0].split(" ").concat(groups[1].split(" ")).concat(groups[2].split(" "));
			
			var index = winnow.indexOf(addoption);
			if (index > -1) {
				winnow.splice(index, 1);
			}
			
			$('#selecttt').html("");
			$('#selectt').html("");
			
			for(var i = 0; i<winnow.length; i++){
				$('#selectt').append("<option value='"+winnow[i]+"'>"+winnow[i]+"</option>");
			}
			
			remwinnow2 = allstates.slice(0);
			
			for(var u = 0; u<all.length; u++){
				var index = remwinnow2.indexOf(all[u]);
				if (index > -1) {
					remwinnow2.splice(index, 1);
				}
			}
			
			remwinnow = allstates.slice(0);
			
			for(var u = 0; u<remwinnow2.length; u++){
				var index = remwinnow.indexOf(remwinnow2[u]);
				if (index > -1) {
					remwinnow.splice(index, 1);
				}
			}
			
			for(var i = 0; i<remwinnow.length; i++){
				$('#selecttt').append("<option value='"+remwinnow[i]+"'>"+remwinnow[i]+"</option>");
			}			
			
		}
		
	</script>
	
	<div id='remove'>
		<p>Remove State</p>
		<select id='selecttt' name='statess'></select>
		<input onClick='removeob();' id='removebutton' type='submit' value='Remove'/>
		</br></br>
	</div>
	
	<script>
		
		function removeob(){
			var removeoption = $('#selecttt option:selected').text();
			//console.log(removeoption);
			
			var main0 = groups[0].split(" ");
			var main1 = groups[1].split(" ");
			var main2 = groups[2].split(" ");
			
			var index = main0.indexOf(removeoption);
			if (index > -1) {
				main0.splice(index, 1);
			}
			var index = main1.indexOf(removeoption);
			if (index > -1) {
				main1.splice(index, 1);
			}
			var index = main2.indexOf(removeoption);
			if (index > -1) {
				main2.splice(index, 1);
			}
			
			groups[0] = arrayToString(main0);
			groups[1] = arrayToString(main1);
			groups[2] = arrayToString(main2);
			
			displayGroups();
			
			all = groups[0].split(" ").concat(groups[1].split(" ")).concat(groups[2].split(" "));
			
			var index = remwinnow.indexOf(removeoption);
			if (index > -1) {
				remwinnow.splice(index, 1);
			}
			
			$('#selecttt').html("");
			$('#selectt').html("");
			
			for(var i = 0; i<remwinnow.length; i++){
				$('#selecttt').append("<option value='"+remwinnow[i]+"'>"+remwinnow[i]+"</option>");
			}
			
			winnow = allstates.slice(0);
			
			for(var u = 0; u<all.length; u++){
				var index = winnow.indexOf(all[u]);
				if (index > -1) {
					winnow.splice(index, 1);
				}
			}
			
			for(var i = 0; i<winnow.length; i++){
				$('#selectt').append("<option value='"+winnow[i]+"'>"+winnow[i]+"</option>");
			}
		
		}
		
		function arrayToString(array){
			var arraystring = '';
			for(var i = 0; i<array.length; i++){
				
				arraystring+=array[i];
				
				if(i == array.length-1){
					break;
				} else {
					arraystring+=" ";
				}
			}
			return arraystring;
		}
		
	</script>
	
	<form method='post' action='update.php'>
		<p>Solar Power</p>
		<textarea readonly id='group1' name='g1' rows="5" cols="60"></textarea>
		<p>Wind Energy</p>
		<textarea readonly id='group2' name='g2' rows="5" cols="60"></textarea>
		<p>All Resources</p>
		<textarea readonly id='group3' name='g3' rows="5" cols="60"></textarea>
		</br>
		<input type='submit' value='Update'/>
	</form>
	
	<script>
		//complete = groups[0]+","+groups[1]+","+groups[2];
	</script>
	
	<!--
	// <= PHP 5
	//$file = file_get_contents('cms/people.txt', true);
	// > PHP 5
	<form>
		<h2>Water 1</h2>
		<textarea rows="15" cols="60"></textarea></br>
		<input type='submit' value='Submit'/>
	</form>
	<form>
		<h2>Water 2</h2>
		<textarea rows="15" cols="60"></textarea></br>
		<input type='submit' value='Submit'/>
	</form>
	<form>
		<h2>Water 3</h2>
		<textarea rows="15" cols="60"></textarea></br>
		<input type='submit' value='Submit'/>
	</form>
	-->
</body>
</html>