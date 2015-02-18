module.exports = function (grunt) {
    'use strict';

    /**
     * Configure the cssmin task
     */
    grunt.config.set('cssmin', {
        options: {
            keepSpecialComments: 0,
            rebase: false
        },
        local: {
            expand: true,
            cwd: '<%= conf.dir.assets %>/css/',
            src: '**/*.css',
            dest: '<%= conf.dir.assets %>/css'
        },
        debug: {
            expand: true,
            cwd: '<%= conf.dir.assets %>/css/',
            src: '**/*.css',
            dest: '<%= conf.dir.assets %>/css'
        },
        release: {
            expand: true,
            cwd: '<%= conf.dir.assets %>/css/',
            src: '**/*.css',
            dest: '<%= conf.dir.assets %>/css'
        }
    });
};