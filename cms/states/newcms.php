<!DOCTYPE html>
<head>
	
	<title>Cristian CMS</title>
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
	
	</script>
	<style>
		
		#group1, #group2 {
			width: 200px;
			height: 200px;
			background-color: lightgray;
			margin: 5px;
		}
		
		.states {
			width: 30px;
			height: 30px;
			background-color: white;
			margin: 10px;
		}
		
	</style>
	
</head>
<body>

	<div ondrop='drop(event)' ondragover="allowDrop(event)" id='group1'>
		<div id='fl' draggable='true' ondragstart="drag(event)" class='states'>FL</div>
		<div id='ga' draggable='true' ondragstart="drag(event)" class='states'>GA</div>
	</div>
	
	<div ondrop='drop(event)' ondragover="allowDrop(event)" id='group2'>
		<div id='al' draggable='true' ondragstart="drag(event)" class='states'>AL</div>
		<div id='mo' draggable='true' ondragstart="drag(event)" class='states'>MO</div>
	</div>
 
</body>
</html>