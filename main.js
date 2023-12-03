let isProxy=false;
window.onload=function() {
	alert(document.getElementById('replace-me'));
	if(document.title.startsWith("**")){isProxy=true;
		document.getElementById('replace-me').innerText="Accessed Via Proxy";
		document.title="Herratech - Home"
	}
};
