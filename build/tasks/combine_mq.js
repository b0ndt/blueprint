module.exports = function (grunt) {
    'use strict';

    /**
     * Configure the combine_mq task
     */
    grunt.config.set('combine_mq', {
        options: {
            beautify: false
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