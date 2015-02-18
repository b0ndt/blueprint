define(function (require) {
	"use strict";

	//#import
	var DeviceTypeConst = require('Blueprint/ProjectModule/Constants/DeviceTypeConstants');

	//@implementation

	/**
	 * popupDirective
	 *
	 * @name popupDirective
	 * @author boris.fruendt
	 * @factory
	 */
	function popupDirective ($window, DeviceUtil) {

		/**
		 * Popup target
		 *
		 * @type {string}
		 */
		var target = '_blank';

		/**
		 * Popup parameter
		 *
		 * @type {{}}
		 */
		var parameter = {};

		/**
		 * width
		 * @type {number}
		 */
		parameter.width = 440;

		/**
		 * height
		 *
		 * @type {number}
		 */
		parameter.height = 550;

		/**
		 * scrollbar
		 *
		 * @type {string}
		 */
		parameter.scrollbars = 'yes';

		/**
		 * status
		 *
		 * @type {string}
		 */
		parameter.status = 'yes';

		/**
		 * resizable
		 * @type {string}
		 */
		parameter.resizable =  'no';

		/**
		 * screenx position
		 *
		 * @type {number}
		 */
		parameter.screenx =  20;

		/**
		 * screeny position
		 *
		 * @type {number}
		 */
		parameter.screeny =  20;

		/**
		 * location
		 *
		 * @type {number}
		 */
		parameter.location =  'no';

		/**
		 * toolbar
		 *
		 * @type {number}
		 */
		parameter.toolbars =  'no';

		/**
		 * Instance
		 *
		 * @type {object}
		 */
		var instance = {};

		/**
		 * Scope
		 *
		 * @description Directive Scope
		 * @type {boolean|object}
		 */
		instance.scope = true;

		/**
		 * Restrict
		 *
		 * @description String of subset of EACM which restricts the directive to a specific directive declaration style.
		 * @type {string}
		 */
		instance.restrict = 'A';

		/**
		 * Link
		 *
		 * @description Link function is responsible for registering DOM listeners as well as updating the DOM.
		 * It is executed after the template has been cloned. This is where most of the directive logic will be put.
		 * @param scope
		 * @param element
		 * @param attributes
		 */
		instance.link = function link (scope, element, attributes) {

			/**
			 * Namespace
			 *
			 * @type {object}
			 */
			var namespace = scope[instance.name] = {};

			/**
			 * initialize
			 *
			 */
			function init() {

				if(DeviceUtil.type() == DeviceTypeConst.MOBILE || DeviceUtil.type() == DeviceTypeConst.TABLET) {
					return;
				}

				// bind open function to scope
				namespace.open = open;
				// prevent default action
				if( (attributes.href !== '') && (attributes.href !== 'javascript:void(0);') ){
                    if(attributes.popup.length) {
                        parameter = scope.$eval(attributes.popup);
                    }
					element.bind('click', function(event){
						event.preventDefault();
						open( element.attr('href') );
					});
				}

			}

			/**
			 * open
			 *
			 * @param url
			 */
			function open(url){
				$window.open(url, target, _objectToString(parameter));
			}

			/**
			 * Object to string
			 *
			 * @param object
			 * @returns {string}
			 * @private
			 */
			function _objectToString (object) {
				var string = '';
				for (var property in object) {
					if (object.hasOwnProperty(property)) {
						string += property + '=' + object[property] + ',';
					}
				}
				return string;
			}

			// call init
			init();

		};

		return instance;
	}

	//Inject
	popupDirective.$inject = ['$window', 'DeviceUtil'];

	//Export
	return popupDirective;

	//@end
});