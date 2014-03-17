<?php

	
	$full = $_POST['g1'].",".$_POST['g2'].",".$_POST['g3'];
	$file = fopen("cms/stateinfo.txt","w");
	fwrite($file,$full);
	fclose($file);
	
	
	$file4 = file_get_contents('cms/topresources.txt', FILE_USE_INCLUDE_PATH);
		echo $file4; 
	
		$file2 = file_get_contents('cms/stateinfo.txt', FILE_USE_INCLUDE_PATH);
		
		$groups = explode(",", $file2);
			
		$g1 = explode(" ", $groups[0]);
		$g2 = explode(" ", $groups[1]);
		$g3 = explode(" ", $groups[2]);
		
		$result = "\nif(";
		
		for($i = 0; $i<count($g1); $i++){
			if($i==0){
				$result.='state=="'.$g1[$i];
			} else {
				$result.='"||state=="'.$g1[$i];
			}
		}
		
		$result.='"){ oncee();changeto(1);check(1);} else if(';
			
		for($i = 0; $i<count($g2); $i++){
			if($i==0){
				$result.='state=="'.$g2[$i];
			} else {
				$result.='"||state=="'.$g2[$i];
			}
		}
		
		$result.='"){ oncee();changeto(2);check(1);} else if(';
		
		for($i = 0; $i<count($g3); $i++){
			if($i==0){
				$result.='state=="'.$g3[$i];
			} else {
				$result.='"||state=="'.$g3[$i];
			}
		}
		
		$result.='"){ oncee();changeto(3);check(1);}}';
		
		$file = fopen("js/resources.js","w");
		fwrite($file,$file4.$result);
		fclose($file);
		
		echo $result;
		echo "<script>window.location = 'CCMS.php';</script>";

?>