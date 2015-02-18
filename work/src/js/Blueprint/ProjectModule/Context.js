define(function(require) {
    "use strict";

    //#import

    // Core
    var angular = require('angular');

    // Controller
    var ApplicationController = require('Blueprint/ProjectModule/Controller/ApplicationController');

    // Directives
    var PopupDirective = require('Blueprint/ProjectModule/Directives/PopupDirective');

    // Models

    // Services

    // Utils
    var DeviceUtil = require('Blueprint/ProjectModule/Utils/DeviceUtil');


    //@implementation

    /**
     * ProjectContext
     *
     * @name ProjectContext
     * @author boris.fruendt
     *
     * @returns {angular.module}
     * @constructor
     */
    function ProjectContext() {

        /**
         * Module ID
         *
         * @type {string}
         * @const
         */
        var ID = 'Project';

        /**
         * Instance
         *
         * @type {angular.module}
         */
        var instance = angular.module(ID, []);

        // Singleton constructor
        ProjectContext = function ProjectContext() {
            return instance;
        };

        /**
         * Init
         */
        function init() {

            // Map Controller
            instance.controller('Application', ApplicationController);

            // Map Directives
            instance.directive('popup', PopupDirective);

            // Map Models
            // Map Services
            // Map Utils
            instance.factory('DeviceUtil', DeviceUtil);
        }

        /**
         * Get module id
         *
         * @returns {string}
         */
        instance.id = function id() {
            return ID;
        };

        //Call Init
        init();

        return instance;
    }

    //Export
    return ProjectContext;

    //@end
});