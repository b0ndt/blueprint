define(function(require) {
    "use strict";

    //#import
    //@implementation

    /**
     * ApplicationController
     *
     * @name ApplicationController
     * @author boris.fruendt
     *
     * @constructor
     */
    function ApplicationController(scope, $document, $window) {

        /**
         * Init
         */
        function init() {
            console.log('hello from ApplicationController!');
        }

        //Call Init
        init();
    }

    //Inject
    ApplicationController.$inject = ['$scope', '$document', '$window'];

    //Export
    return ApplicationController;

    //@end
});