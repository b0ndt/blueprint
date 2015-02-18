module.exports = function (grunt) {
	'use strict';

	/**
	* Configure the assemble task
	*/
	grunt.config.set('assemble', {
		options: {
			engine: 'handlebars',
			ext: '.html',
			assets: '<%= conf.assemble.assets %>',
			destination: '<%= conf.assemble.destination %>',
			layout: '<%= conf.assemble.templates %>/layouts/layout.hbs',
			partials: '<%= conf.assemble.templates %>/partials/**/*.hbs',
			data: ['build/config/local/*.json'],
			pkg: {
				version: '<%= pkg.version %>',
				name: '<%= pkg.name %>',
				description: '<%= pkg.description %>',
				config: '<%= pkg.config %>'
			}
		},
		local: {
			options: {
				data: ['build/config/local/*.json'],
				collections: [
					{
						title: 'pages',
						sortorder: 'desc'
					}
				]
			},
			files: [{
				expand: true,
				cwd: '<%= conf.assemble.templates %>/pages',
				src: '**/*.hbs',
				dest: '<%= conf.dir.www %>/local/'
			}]
		},
		debug: {
			options: {
				data: ['build/config/local/*.json'],
				collections: [
					{
						title: 'pages',
						sortorder: 'desc'
					}
				]
			},
			files: [{
				expand: true,
				cwd: '<%= conf.assemble.templates %>/pages',
				src: '**/*.hbs',
				dest: '<%= conf.dir.www %>/'
			}]
		},
		release: {
			options: {
				data: ['build/config/local/*.json'],
				collections: [
					{
						title: 'pages',
						sortorder: 'desc'
					}
				]
			},
			files: [{
				expand: true,
				cwd: '<%= conf.assemble.templates %>/pages',
				src: '**/*.hbs',
				dest: '<%= conf.dir.www %>/'
			}]
		}
	});
};