module.exports = function(grunt) {
    'use strict';

    /**
     * Task to run a local server for development purposes
     */
    grunt.registerTask('local', function(target) {

        // Load the target configuration an save in grunt config
        var conf = grunt.file.readJSON('build/config/local/config.json');
        grunt.config('conf', conf);

        // force option to prevent aborting of tasks
        grunt.option('force', true);

        var tasks = [
            'clean:local',
            'sass:local',
            'autoprefixer:local',
            //'combine_mq:local',
            'assemble:local',
            'connect:local',
            'open:local'
        ];

        tasks.push('watch');

        // Run all grunt tasks
        grunt.task.run(tasks);
    });
};