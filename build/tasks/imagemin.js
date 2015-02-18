module.exports = function (grunt) {
	'use strict';

	/**
	 * Configure the imagemin task
	 */
	grunt.config.set('imagemin', {
		debug: {
			options: {
				optimizationLevel: 7
			},
			files: [
				{
					expand: true,
					cwd: '<%= conf.dir.www %>/assets/img/',
					src: ['**/*.{png,jpg,gif}'],
					dest: '<%= conf.dir.www %>/assets/img/'
				}
			]
		},
		release: {
			options: {
				optimizationLevel: 7
			},
			files: [
				{
					expand: true,
					cwd: '<%= conf.dir.www %>/assets/img/',
					src: ['**/*.{png,jpg,gif}'],
					dest: '<%= conf.dir.www %>/assets/img/'
				}
			]
		}
	});
};