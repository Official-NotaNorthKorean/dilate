function openTab(evt, tabName) {
	var i, tabcontent, tabButtons;
	tabcontent = document.getElementsByClassName("tabcontent");
		for (i = 0; i < tabcontent.length; i++) {
			tabcontent[i].style.display = "none";
	}
	tabButtons = document.getElementsByClassName("tabButtons", "buddybutton");
		for (i = 0; i < tabButtons.length; i++) {
			tabButtons[i].className = tabButtons[i].className.replace("active");
	}
	document.getElementById(tabName).style = "display: flex; flex-direction: column; height: 100%;";
	evt.currentTarget.className += "active";
}
function openNavTab(evt, tabName) {
	var i, navTabContent, navButtons;
	navTabContent = document.getElementsByClassName("navTabContent");
		for (i = 0; i < navTabContent.length; i++) {
			navTabContent[i].style.display = "none";
		}
	navButtons = document.getElementsByClassName("homemenu", "newmuc");
		for (i = 0; i < navButtons.length; i++) {
			navButtons[i].className = navButtons[i].className.replace("active");
		}
	document.getElementById(tabName).style = "display: flex; flex-direction: column; height: 100%;";
	evt.currentTarget.className += "active";
}
