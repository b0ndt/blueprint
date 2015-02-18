module.exports = function (grunt) {
	'use strict';

	/**
	* Configure the requirejs task
	*/
	grunt.config.set('requirejs', {
		release: {
			options: {
				name: 'application',
				optimize: 'uglify',
				wrap: {
					startFile: '<%= conf.dir.work %>/lib/js/require/require.min.js'
				},
				baseUrl: '<%= conf.dir.work %>/src/js',
				mainConfigFile: '<%= conf.dir.work %>/src/js/Application.js',
				out: '<%= conf.dir.www %>/assets/js/script.js'
			}
		}
	});

};