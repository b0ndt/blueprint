module.exports = function (grunt) {
	'use strict';

	/**
	* Configure the open task
	*/
	grunt.config.set('open', {
		local:{
			path:'http://localhost:<%= connect.options.port %>/index.html'
		}
	});

};