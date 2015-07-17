/**
*	In this file all the application logic is put.
*/

// JSLint, include this before tests
// var window, navigator, $, device, cordova, document, jQuery, share, toast, togglePanel, initServiceSettings, resetPanelState, panelMenu, panelMenuRight, panelHandling, pressEffectHeader, pressEffectFooter, isDeviceReady, androidServiceHandler, setTimeout, toggleImmersive;

// clear to first boot state
function clearFirstBoot() {
	window.localStorage.clear();
	navigator.app.exitApp();
}

// get the systemspecs
function getSystemSpecs() {
	var $content = $('#systemSpecs'),
		tag;
	if (window.phonegapExcluded === false) {
		tag =	'<p id="systemSpecs">' +
				'Device model: ' + device.model + '<br />' +
				'Device platform: ' + device.platform + ' ' + device.version + '<br />' +
				'PhoneGap version: ' + cordova.version + '<br />' +
				'jQuery version: ' + jQuery.fn.jquery + '<br />' +
				'jQuery Mobile version: ' + $.mobile.version + '<br />' +
				'</p>';
	} else {
		tag =	'<p id="systemSpecs">' +
				'Operating System: ' + navigator.platform + '<br />' +
				'Browser: ' + navigator.appName + ' ' + navigator.appVersion + '<br />' +
				'jQuery version: ' + jQuery.fn.jquery + '<br />' +
				'jQuery Mobile version: ' + $.mobile.version + '<br />' +
				'</p>';
	}
	$content.replaceWith(tag);
}

// show Uri Message in app
function showUriMessage() {
	$('#uriMessage').empty().append(window.localStorage.getItem("uriMessage"));
}

// load other page content with use of loading animation
function loadOtherPageContent() {
	var content = $("#otherPageContent");
	content.empty().append(window.loadingAnimation);
	setTimeout(function () {
		content.empty().append("<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sollicitudin nibh id neque vulputate, eu convallis ligula faucibus. Maecenas tincidunt, magna id convallis accumsan, est magna pulvinar magna, quis commodo augue tellus imperdiet mauris. Proin fermentum ante eget molestie porta. Sed tempor adipiscing interdum. Cras sed sollicitudin justo. Etiam rutrum tristique lacus. In venenatis augue nibh. Aliquam erat volutpat. Cras rhoncus nulla urna, dignissim hendrerit neque sagittis iaculis. Pellentesque euismod mauris lacus, vitae ullamcorper lectus porta volutpat. Pellentesque euismod consequat gravida. Cras ac risus tristique, varius nunc auctor, pellentesque nisi. Vestibulum arcu mi, rhoncus non ultricies vel, iaculis eget nisl. Vivamus faucibus dignissim justo, a euismod mauris commodo vitae. Sed ac mollis tortor. Cras egestas nunc eget magna tincidunt, vel tempor leo iaculis.</p>");
	}, 2000);
}


// assign click events to elements
function htmlClickEventHandlers(id, action) {
	/** use action "menu" when using app icon as side panel (#panelMenu...)
	*	use action "back" when using app icon as back
	*/
	// every page
	$('#headerTitle' + id).off("click").on("click",
		function () {
			if (action !== "back") {
				togglePanel('#panelMenu' + id);
			} else {
				window.history.back();
			}
		});
	$('#headerShare' + id).off("click").on("click",
		function () {
			share(window.localStorage.getItem('shareTagSubject'), window.localStorage.getItem('shareTagText'));
		});
	$('#headerShare' + id).on("taphold",
		function () {
			toast("Share", "short");
		});
	$('#headerOverflow' + id).off("click").on("click",
		function () {
			togglePanel('#panelMenuRight' + id);
		});
	// specific page...
	if (id === "Index") {
		$('#clearFirstBoot').off("click").on("click",
			function () {
				clearFirstBoot();
			});
	} else if (id === "Second") {
		// do nothing
	} else if (id === "Other") {
		$('#footerPrev').off("click").on("click",
			function () {
				toast("Previous", "short");
			});
		$('#footerNext').off("click").on("click",
			function () {
				toast("Next", "short");
			});
		$('#footerSave').off("click").on("click",
			function () {
				toast("Save", "short");
			});
		$('#footerDelete').off("click").on("click",
			function () {
				toast("Delete", "short");
			});
	} else if (id === "Service") {
		initServiceSettings();
	}
	// every page but...
	if (id !== "Other") {
		$('#footerShare' + id).off("click").on("click",
			function () {
				share(window.localStorage.getItem('shareTagSubject'), window.localStorage.getItem('shareTagText'));
			});
		$('#footerShare' + id).on("taphold", function () {
			toast("Share", "short");
		});
		$('#footerToast' + id).off("click").on("click", function () {
			toast('This is a toast message', 'short');
		});
		$('#footerToast' + id).on("taphold", function () {
			toast("Toast", "short");
		});
	}
}

// initialize page variables and elements on create
function initPageVarsOnCreate(id) {
	// every page
	// every page but...
	if (id !== "LandingPage") {
		// nothing needed atm
	}
	if (id === "Index") {
		htmlClickEventHandlers(id, "menu");
	} else if (id !== "LandingPage") {
		htmlClickEventHandlers(id, "back");
	}
	// specific page...
	if (id === "LandingPage") {
		// do nothing
	} else if (id === "Index") {
		// do nothing
	} else if (id === "Other") {
		htmlClickEventHandlers(id, "menu");
		// do nothing
	} else if (id === "UriMessage") {
		// do nothing
	} else if (id === "Service") {
		// do nothing
	} else if (id === "Immersive") {
		// do nothing
	}
}

// initialize page variables on beforeshow
function initPageVarsOnShow(id) {
	// every page...
	window.localStorage.setItem("divIdGlobal", id);
	// every page but...
	if (id !== "LandingsPage") {
		resetPanelState();
		window.localStorage.setItem("shareTagSubject", 'jpHolo');
		window.localStorage.setItem("shareTagText", '#jpHolo, an application template based on PhoneGap, by Joram #Teusink https://github.com/teusink/jpHolo');
		panelMenu(id);
		panelMenuRight(id);
		panelHandling();
	}
	if (id === "Index") {
		pressEffectHeader(true, "menu");
	} else if (id !== "LandingsPage") {
		pressEffectHeader(true, "back");
	}
	// specific page...
	if (id === "LandingPage") {
		isDeviceReady("", "InitApp"); // TODO
		isDeviceReady("", "InitUri"); // TODO
	} else if (id === "Index") {
		pressEffectFooter(true, true);
	}
}

// below is to tie page events to pages so that the 2 functions above (initPageVarsOn...) will execute

// detect swiperight to open left panel upon swiperight
$(document).off('swiperight').on('swiperight', function (event) {
	if (window.localStorage.getItem("pageNaveType") === "menu") {
		var w = window,
			d = document,
			e = d.documentElement,
			g = d.getElementsByTagName('body')[0],
			x = w.innerWidth || e.clientWidth || g.clientWidth,
			y = w.innerHeight || e.clientHeight || g.clientHeight;
		// check if there are no open panels, otherwise ignore swipe
		if (checkOpenPanels() === false && event.swipestart.coords[0] < x / 5) {
			togglePanel('#panelMenu' + window.localStorage.getItem("divIdGlobal"));
		}
	}
});

// store important vars, like previous page id
function startBeforeShowVars(data) {
	window.localStorage.setItem("previousPageId", data.prevPage.attr("id"));
}

// #landingPage
$(document).on('pagebeforeshow', '#landingPage', function (event, data) {
	startBeforeShowVars(data);
	initPageVarsOnShow('LandingPage');
});
$(document).on('pagecreate', '#landingPage', function () {
	initPageVarsOnCreate('LandingPage');
});

// #indexPage
$(document).on('pagebeforeshow', '#indexPage', function (event, data) {
	startBeforeShowVars(data);
	initPageVarsOnShow('Index');
});
$(document).on('pagecreate', '#indexPage', function () {
	initPageVarsOnCreate('Index');
});

