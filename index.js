	// JS from <stackexchange>

//	Navbar tab control
function navShow(element) {
	var tabContents = document.getElementsByClassName('tabContent');
	for (var i = 0; i < tabContents.length; i++) { 
		tabContents[i].style.display = 'none';
	}
	// change tabsX into tabs-X in order to find the correct tab content
	var tabContentIdToShow = element.id.replace(/(\d)/g, '-$1');
	document.getElementById(tabContentIdToShow).style = 'display: block; left: 72px; top: 0px; right: 0px; height: 100%; margin-top: 0px; position: fixed; /*background-color: #36393f; */ background-color: red; overflow: hidden;';
}

//	Primary tab chats tab control
function showChatTab(element) {
	var chatContents = document.getElementsByClassName('chatContent');
	for (var i = 0; i < tabContents.length; i++) {
		tabContents[i].style.display = 'none';
	}
	var tabContentIdToShow = element.id.replace(/(\d)/g, '-$1');
	document.getElementById(tabContentIdToShow).style.display = 'flex';
}
