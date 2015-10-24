var webdriverio = require('webdriverio'),
		By = webdriverio.by,
		until = webdriverio.until;

var options = {
    desiredCapabilities: {
        browserName: 'firefox'
    }
};

webdriverio
		// startup functions
    .remote(options)
    .init()
    .url('http://iconosquare.com/')

		// log in
		.click('.login_header_mobile')
		.setValue('#id_username', 'wafflethefatbunny')
		.setValue('#id_password', 'bruin111')
		.click('input.button-green')

		// search
		.setValue('#getSearch', 'dbgameday')


		// shutdown functions
		.pause(2000)
    .end();
