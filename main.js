let isProxy=false;
object.onload = function(){
	if(window.location.hostname.split(".")[0].startsWith("proxy")){isProxy=true;
		document.getElementById('replace-me').innerText = "Accessed Via Proxy";
	}
};