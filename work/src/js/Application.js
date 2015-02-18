/**
 * Require config
 */
requirejs.config({
    paths: {
        // Libraries
        'lib': '../../lib/js',
        'angular': '../../lib/js/angular/angular.min',
        // Shortcut
        'assets': '../assets'
    },
    shim: {
        'angular': {
            'exports': 'angular'
        }
    }
});

/**
 * Bootstrap app
 */
require(['angular', 'context'], function(angular, Context) {

    // Create new Context
    var context = Context();

    // Bootstrap App
    angular.bootstrap(document, [context.id()]);
});