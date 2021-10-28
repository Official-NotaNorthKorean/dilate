function primeTopShowTab(element) {
	var tabContents = document.getElementsByClassName('tabContent');
	for (var i = 0; i < tabContents.length; i++) { 
		tabContents[i].style.display = 'none';
	}
	// change tabsX into tabs-X in order to find the correct tab content
	var tabContentIdToShow = element.id.replace(/(\d)/g, '-$1');
	document.getElementById(tabContentIdToShow).style.display = 'flex';
}

function navShow(element) {
	var tabContents = document.getElementsByClassName('navContent');
	for (var i = 0; i < tabContents.length; i++) { 
		tabContents[i].style.display = 'none';
	}
	// change tabsX into tabs-X in order to find the correct tab content
	var tabContentIdToShow = element.id.replace(/(\d)/g, '-$1');
	document.getElementById(tabContentIdToShow).style = 'display: block; left: 72px; top: 0px; right: 0px; height: 100%; position: fixed; background-color: #36393f; overflow: hidden;';
}
