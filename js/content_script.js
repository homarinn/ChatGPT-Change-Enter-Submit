(function() {
	'use strict';

	const userAgent = window.navigator.userAgent.toLowerCase();
	document.addEventListener('keydown', (e) => {
			if (e.target.tagName !== 'TEXTAREA') {
					return;
			}

			let withKey;

			if (userAgent.indexOf("windows nt") !== -1) {
					withKey = e.ctrlKey;
			}

			if (userAgent.indexOf("mac os x") !== -1) {
					withKey = e.metaKey;
			}

			if (e.code == "Enter" && !withKey) {
					e.stopPropagation();
			}
	}, { capture: true });
})();