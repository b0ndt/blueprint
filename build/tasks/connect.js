// Directory mounting
var mountFolder = function (connect, dir) {
	return connect.static(require('path').resolve(dir));
};

module.exports = function (grunt) {
	'use strict';

	/**
	* Configure the connect task
	*/
	grunt.config.set('connect', {
		options:{
			port: '<%= conf.server.port %>',
			hostname: '*',
			dir: {
				temp: '<%= conf.dir.www %>/local',
				work: '<%= conf.dir.work %>'
			}
		},
		local:{
			options:{
				middleware:function (connect,options) {
					var opt = this.options();

					return [
						mountFolder(connect, opt.dir.temp),
						mountFolder(connect, opt.dir.work)
					];
				}
			}
		}
	});
};