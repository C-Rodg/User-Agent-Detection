const detect = function(){

	// Engines
	let engine = {
		gecko : 0,
		ie : 0,
		khtml : 0,
		opera : 0,
		webkit : 0,

		ver : null
	};

	// Browsers
	let browsers = {
		chrome : 0,
		firefox : 0,
		ie : 0,
		konq : 0,
		opera : 0,
		safari : 0,

		ver : null
	};

	// System
	let system = {
		mac : false,
		win : false,
		x11 : false,

		android : false,
		ipad : false,
		ipod : false,
		iphone : false,
		ios : false,
		nokiaN : false,
		winMobile : false,

		ps : false,
		wii : false
	};

	let ua = navigator.userAgent;

	// Engine Detection
	if (window.opera) {
		engine.ver = browser.ver = window.opera.version();
		engine.opera = browser.opera = parseFloat(engine.ver);
	} else if (/AppleWebKit\/(\S+)/.test(ua)) {

	} else if (/KHTML\/(\S+)/.test(ua) || /Konqueror\/([^;]+)/.test(ua)) {

	} else if (/rv:([^\)]+)\) Gecko\/\d{8}/.test(ua)) {

	} else if (/MSIE ([^;]+)/.test(ua)) {

	}

	// Browser Detection
}();

export default detect;