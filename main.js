let isProxy=false;
document.addEventListener("DOMContentLoaded", function() {
	if(document.title.startsWith("**")){isProxy=true;
		document.getElementById('replace-me').innerText="Accessed Via Proxy";
		document.title="Herratech - Home"
	}
});
