module.exports = function (grunt) {
	'use strict';

	/**
	* Configure the clean task
	*/
	grunt.config.set('clean', {
		local: ['<%= conf.dir.www %>/'],
		debug: ['<%= conf.dir.www %>'],
		release: ['<%= conf.dir.www %>']
	});
};