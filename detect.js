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
		engine.ver = RegExp["$1"];
		engine.webkit = parseFloat(engine.ver);

		if (/Chrome\/(\S+)/.test(ua)) {
			browser.ver = RegExp["$1"];
			browser.chrome = parseFloat(browser.ver);
		} else if (/Version\/(\S+)/.test(ua)) {
			browser.ver = RegExp["$1"];
			browser.safari = parseFloat(browser.ver);
		} else {
			let safariVersion = 1;
			if (engine.webkit < 100) {
				safariVersion = 1;
			} else if (engine.webkit < 312) {
				safariVersion = 1.2;
			} else if (engine.webkit < 412) {
				safariVersion = 1.3;
			} else {
				safariVersion = 2;
			}

			browser.safari = browser.ver = safariVersion;
		}
	} else if (/KHTML\/(\S+)/.test(ua) || /Konqueror\/([^;]+)/.test(ua)) {

	} else if (/rv:([^\)]+)\) Gecko\/\d{8}/.test(ua)) {

	} else if (/MSIE ([^;]+)/.test(ua)) {

	}

	// Browser Detection
	browser.ie = engine.ie;
	browser.opera = engine.opera;

	// System Detection
	let plat = navigator.platform;
	system.win = plat.indexOf('Win') == 0;
}();

export default detect;