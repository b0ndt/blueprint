module.exports = function (grunt) {
	'use strict';

	/**
	 * Configure the compass task
	 */
	grunt.config.set('sass', {
		local: {
			options: {
				require: ['susy'],
				bundleExec: false,
				quiet: false,
				cacheLocation: './.sass-cache',
				noCache: false,
                lineNumbers: true,
                style: 'compact'
			},
			files: [{
		        expand: true,
		        cwd: '<%= conf.dir.src %>/scss/',
		        src: ['**/*.scss'],
		        dest: '<%= conf.dir.assets %>/css',
		        ext: '.css'
		      }]
		},
		debug: {
			options: {
				require: ['susy'],
				bundleExec: false,
				quiet: false,
				noCache: true,
                lineNumbers: true,
                style: 'compact'
			},
			files: [{
		        expand: true,
		        cwd: '<%= conf.dir.src %>/scss/',
		        src: ['**/*.scss'],
		        dest: '<%= conf.dir.assets %>/css',
		        ext: '.css'
		      }]
		},
		release: {
			options: {
				require: ['susy'],
				bundleExec: false,
				quiet: true,
				noCache: true,
                lineNumbers: false,
                style: 'compact'
			},
			files: [{
		        expand: true,
		        cwd: '<%= conf.dir.src %>/scss/',
		        src: ['**/*.scss'],
		        dest: '<%= conf.dir.assets %>/css',
		        ext: '.css'
		      }]
		}
	});
};