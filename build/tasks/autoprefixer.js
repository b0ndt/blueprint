// using https://github.com/nDmitry/grunt-autoprefixer

module.exports = function(grunt) {
    'use strict';

    grunt.config.set('autoprefixer', {

        options: {
            browser: ["last 2 version", "Explorer >= 8", "Android >= 4"],
            map: false
        },
        local: {
            src: ['<%= conf.dir.assets %>/css/**/*.css']
        },
        debug: {
            src: ['<%= conf.dir.assets %>/css/**/*.css']
        },
        release: {
            src: ['<%= conf.dir.assets %>/css/**/*.css']
        }

    });
};