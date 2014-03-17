<!DOCTYPE html>
<head>
<script src='jquery-1.10.1.min.js'></script>
<link href='regular.css' rel='stylesheet'/>
<style>
	button {
		background-color: lightgray;
		border: none;
		margin: 0;
		padding: 5px 10px;
		color: #ffffff;
		background-color: #3498db;
		border-color: #3498db;
		border-radius: 2px;
	}
	
	button:hover {
		cursor: pointer;
		background-color: #5dade2;
	}
	
	iframe {
		margin-top: 2px;
	}
	body {
		padding: 0 20px;
	}
	h2 {
		margin: 0;
		padding: 0;
		margin-bottom: 15pt;
	}
</style>
</head>
<body>

<h2>Change Element Inside Index.html</h2>

<div id='here'>
<button type="button" class="btn-bold"><b>B</b></button>
<button type="button" class="btn-italics"><i>I</i></button>
<button type="button" class="btn-underline"><u>U</u></button>

<button type="button" class="btn-lefta">j-l</button>
<button type="button" class="btn-centera">j-c</button>
<button type="button" class="btn-righta">j-r</button>

<button type="button" class="btn-h1">h1</button>
<button type="button" class="btn-h2">h2</button>
<button type="button" class="btn-h3">h3</button>
<button type="button" class="btn-h4">h4</button>
<button type="button" class="btn-p">p</button>
<br>

</div>
<form method="POST" action='change.php'>
	<textarea style='display: none;' name='textt' cols='70' rows='10'>
		
		<?php	
			$html = file_get_contents('index.html');
			$begin = strpos($html, "<!-- Change Start -->") + strlen("<!-- Change Start -->");
			$end   = strpos($html, "<!-- Change End -->");
			$text = substr($html, $begin, ($end - $begin));
			echo htmlspecialchars($text);
			$all = explode($text, $html);
		?>
	
	</textarea>
	</br>
	<input type='submit' value='Submit'/>
</form>


<script>
$(document).ready(function(){

newIframe = document.createElement('iframe');
newIframe.width = '700';newIframe.height = '250';
newIframe.style.border = '1px solid black';
newIframe.style.resize = 'both';
newIframe.src = 'about:blank'; 
document.getElementById('here').appendChild(newIframe);
var myContent = '<!DOCTYPE html>'
    + '<html><head><title>My dynamic document</title><link href="regular.css" rel="stylesheet"/></head>'
    + '<body style="padding-right: 20px;" contenteditable="true">'+$('textarea').val()+'</body></html>';

newIframe.contentWindow.document.open('text/html', 'replace');
newIframe.contentWindow.document.write(myContent);
newIframe.contentWindow.document.close();

	//document.getElementById('iframee').document.open('text/html', 'replace');
	//document.getElementById('iframee').document.write('<body contenteditable="true">yeahh</body>');
	//document.getElementById('iframee').document.close();
	$('body').on('click', '.btn-bold', function(){
		newIframe.contentWindow.document.execCommand('bold', false, null); 
		newIframe.contentWindow.focus();
	});
	$('body').on('click', '.btn-italics', function(){
		newIframe.contentWindow.document.execCommand('italic', false, null); 
		newIframe.contentWindow.focus();
	});
	$('body').on('click', '.btn-underline', function(){
		newIframe.contentWindow.document.execCommand('underline', false, null); 
		newIframe.contentWindow.focus();
	});
	
	$('body').on('click', '.btn-lefta', function(){
		newIframe.contentWindow.document.execCommand('justifyleft', false, null); 
		newIframe.contentWindow.focus();
	});
	$('body').on('click', '.btn-centera', function(){
		newIframe.contentWindow.document.execCommand('justifycenter', false, null); 
		newIframe.contentWindow.focus();
	});
	$('body').on('click', '.btn-righta', function(){
		newIframe.contentWindow.document.execCommand('justifyright', false, null); 
		newIframe.contentWindow.focus();
	});
	
	$('body').on('click', '.btn-h1', function(){
		newIframe.contentWindow.document.execCommand('formatBlock', false, '<h1>'); 
		newIframe.contentWindow.focus();
	});
	$('body').on('click', '.btn-h2', function(){
		newIframe.contentWindow.document.execCommand('formatBlock', false, '<h2>'); 
		newIframe.contentWindow.focus();
	});
	$('body').on('click', '.btn-h3', function(){
		newIframe.contentWindow.document.execCommand('formatBlock', false, '<h3>'); 
		newIframe.contentWindow.focus();
	});
	$('body').on('click', '.btn-h4', function(){
		newIframe.contentWindow.document.execCommand('formatBlock', false, '<h4>'); 
		newIframe.contentWindow.focus();
	});
	
	$('body').on('click', '.btn-p', function(){
		newIframe.contentWindow.document.execCommand('formatBlock', false, '<p>'); 
		newIframe.contentWindow.focus();
	});
	
	newIframe.contentWindow.document.onkeyup = function(evt) {
		inner = newIframe.contentWindow.document.body.innerHTML;
		$('textarea').val(inner);
	};
	
	setTimeout(function(){
	newIframe.contentWindow.document.execCommand('formatBlock', false, '<p>');
	newIframe.contentWindow.focus();
	}, 500);
	//inner = newIframe.contentWindow.document.body.innerHTML;
	//$('textarea').val(inner);
});
</script>

</body>
</html>