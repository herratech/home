let isProxy=false;
window.onload=function() {
	alert(window.frameElement);
	if(parent.document.title.startsWith("**")){isProxy=true;
		document.getElementById('replace-me').innerText="Accessed Via Proxy";
		document.title="Herratech - Home"
	}
};
