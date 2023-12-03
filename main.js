let isProxy=false;
function receiveMessage(event) {
	var origin = event.origin || event.originalEvent.origin; 
	if (origin === "https://proxy183743.herratech.net"){isProxy=true;
		document.getElementById('replace-me').innerText="Accessed Via Proxy";
		document.title="Herratech - Home"
	}
};
