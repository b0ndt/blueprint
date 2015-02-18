module.exports = function(grunt) {
    'use strict';

    grunt.config.set('watch', {
        css: {
            files: ['work/src/**/*.scss'],
            tasks: ['sass:local', 'autoprefixer:local', 'combine_mq:local'],
            options: {
                spawn: false
            }
        },
        assemble: {
            files: ['<%= conf.assemble.templates %>/**/**/*.hbs'],
            tasks: ['assemble:local'],
            options: {
                spawn: false
            }
        }
    });
};