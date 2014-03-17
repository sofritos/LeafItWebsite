<!DOCTYPE html>
<head>
	<title> Edit Slider </title>
	<script src='js/jquery.js'></script>
</head>
<body>

	<?php
	
		$html = file_get_contents('js/slider.js', FILE_USE_INCLUDE_PATH);
		
		for($i = 1; $i<21; $i++){
			$begin = strpos($html, "//info".$i) + strlen("//info".$i);
			$end   = strpos($html, "//dinfo".$i);
			//kilo = "
			$text = substr($html, $begin, ($end - $begin));
			$text = str_replace('";',"",str_replace(' ', '', $text));
			$text = str_replace('kilo="',"",$text);
			$text = str_replace("kilo='","",$text);
			$text = str_replace("';","",$text);
			echo $text."<br>";
		}
	?>




</body>
</html>