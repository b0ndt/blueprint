module.exports = function (grunt) {
	'use strict';

	// Load all grunt tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
	grunt.loadNpmTasks('assemble');

	// Init the grunt configuration
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json')
	});

	// Load the main tasks
	grunt.loadTasks('build/');

	// Load subtasks
	grunt.loadTasks('build/tasks/');

	// Default task
	grunt.registerTask('default', 'local');

};