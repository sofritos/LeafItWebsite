<?php
	
	if(isset($_POST['textt'])&&!empty($_POST['textt'])){ 
		
		$html = file_get_contents('index.html');
		$begin = strpos($html, "<!-- Change Start -->") + strlen("<!-- Change Start -->");
		$end   = strpos($html, "<!-- Change End -->");
		$text = substr($html, $begin, ($end - $begin));
		$all = explode($text, $html);
		$output = $all[0]."\n".$_POST['textt']."\n".$all[1];
		
		file_put_contents('index.html', $output);
		
	
	}
	
?>