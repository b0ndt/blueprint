define(function(require) {
    "use strict";

    //#import
    var angular = require('angular');

    // Config
    var Configuration = require('configuration');

    // Modules
    var Project = require('Blueprint/ProjectModule/Context');
    // var AnotherModule = require('Blueprint/AnotherModule/Context');

    //@implementation

    /**
     * Context
     *
     * @author boris.fruendt
     *
     * @constructor
     */
    function Context() {

        var ID = 'Application';

        //Create Context and add further modules to Array
        var instance = angular.module(ID, [Project().id()]);

        // Singleton constructor
        Context = function Context() {
            return instance;
        };

        /**
         * Init
         */
        function init() {

            // Apply Config
            this.config(Configuration);
            
        }

        instance.id = function id() {
            return ID;
        };

        //Call Init
        init.call(instance);

        return instance;
    }

    return Context;
    //@end
});