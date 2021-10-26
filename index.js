function openTab(evt, tabName) {
	var i, tabcontent, tabButtons;
	tabcontent = document.getElementsByClassName("tabcontent");
		for (i = 0; i < tabcontent.length; i++) {
			tabcontent[i].style.display = "none";
	}
	tabButtons = document.getElementsByClassName("tabButtons");
		for (i = 0; i < tabButtons.length; i++) {
			tabButtons[i].className = tabButtons[i].className.replace("active", "");
	}
	document.getElementById(tabName).style = "display: flex; flex-direction: column; height: 100%;";
	evt.currentTarget.className += "active";
}
