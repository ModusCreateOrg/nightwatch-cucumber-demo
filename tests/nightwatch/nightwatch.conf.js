	var seleniumServer = require('selenium-server')
	var phantomjs = require('phantomjs-prebuilt')
	var nightwatchCucumber = require('nightwatch-cucumber')

	// Handles the runner, location of feature files and step definitions,
	// and closing of nightwatch
	var nightwatchCucumberConf = {
		runner: 'nightwatch',
		featureFiles: 'features',
		stepDefinitions: 'step_definitions',
		closeSession: 'afterFeature'
	}

	module.exports = {
		// Loads nightwatch-cucumber configuration into main nightwatch.js conf file
		src_folders: [nightwatchCucumber(nightwatchCucumberConf)],
		custom_commands_path: '',
		custom_assertions_path: '',
		page_objects_path: '',
		live_output: false,
		disable_colors: false,

		// Sets configuration for Selenium Server
		selenium: {
			start_process: true,
			server_path: seleniumServer.path,
			host: '127.0.0.1',
			port: 4444
		},

		// Sets config options for different testing environments defined by the user
		test_settings: {
			default: {
				launch_url: 'http://moduscreate.com',
				silent: true,
				desiredCapabilities: {
					browserName: 'chrome',
					javascriptEnabled: true,
					acceptSslCerts: true
				},
				'screenshots': {
					enabled: true,
					on_error: true,
					on_failure: true,
					path: '/screenshots'
				}
			},
			firefox: {
				desiredCapabilities: {
					browserName: 'firefox',
					javascriptEnabled: true,
					acceptSslCerts: true
				}
			}
		}

	}