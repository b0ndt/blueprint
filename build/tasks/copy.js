module.exports = function (grunt) {
    'use strict';

    /**
     * Configure the copy task
     */
    grunt.config.set('copy', {
        debug: {
            files: [
                {
                    expand: true,
                    cwd: '<%= conf.dir.work %>/',
                    src: ['assets/img/**'],
                    dest: '<%= conf.dir.www %>'
                },
                {
                    expand: true,
                    cwd: '<%= conf.dir.work %>/',
                    src: ['assets/font/**'],
                    dest: '<%= conf.dir.www %>'
                },
                {
                    expand: true,
                    cwd: '<%= conf.dir.work %>/',
                    src: ['src/js/**'],
                    dest: '<%= conf.dir.www %>'
                },
                {
                    expand: true,
                    cwd: '<%= config.dir.work %>/',
                    src: ['lib/js/**'],
                    dest: '<%= conf.dir.www %>'
                }
            ]
        },
        release: {
            files: [
                {
                    expand: true,
                    cwd: '<%= conf.dir.work %>/',
                    src: ['assets/img/**'],
                    dest: '<%= conf.dir.www %>'
                },
                {
                    expand: true,
                    cwd: '<%= conf.dir.work %>/',
                    src: ['assets/font/**'],
                    dest: '<%= conf.dir.www %>'
                }
            ]
        }
    });
};