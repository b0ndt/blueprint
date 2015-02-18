module.exports = function (grunt) {
    'use strict';

    /**
     * Build a deployment version
     */
    grunt.registerTask('build', function (target) {

        if (typeof target == 'undefined') {
            grunt.log.error('Error. You must pass a target name.');
        }
        else if (target == 'debug' || target == 'release') {

            // Load the target configuration and save in grunt config
            var conf = grunt.file.readJSON('build/config/build-' + target + '/config.json');
            grunt.config('conf', conf);

            // Build a debug version
            if (target == 'debug') {
                grunt.task.run([
                    'clean:debug',
                    'sass:debug',
                    'autoprefixer:debug',
                    'combine_mq:debug',
                    'assemble:debug',
                    'copy:debug',
                    'imagemin:debug'
                ]);
            }

            // Build a release version
            if (target == 'release') {
                grunt.task.run([
                    'clean:release',
                    'sass:release',
                    'autoprefixer:release',
                    'combine_mq:release',
                    'cssmin:release',
                    'assemble:release',
                    'requirejs:release',
                    'copy:release',
                    'imagemin:release'
                ]);
            }

        }
        else {
            grunt.log.error('Error. Target name for build task can be "debug" or "release".');
        }
    });
};