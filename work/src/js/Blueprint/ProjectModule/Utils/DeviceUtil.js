define(function (require) {
    "use strict";

    //#import

    var DeviceTypeConst = require('Blueprint/ProjectModule/Constants/DeviceTypeConstants');

    //@implementation

    /**
     * Device Detection
     *
     * @factory
     */
    function DeviceUtil() {

        /**
         * Instance
         *
         * @type {object}
         */
        var instance = {};

        /**
         * Operating System
         *
         * @type {undefined}
         * @private
         */
        var _os = undefined;

        /**
         * Device Type
         *
         * @type {string}
         * @private
         */
        var _type = DeviceTypeConst.DESKTOP;

        /**
         * Init
         */
        function init() {
            // Determine the device type
            var userAgent = navigator.userAgent;
            if (userAgent) {
                if (userAgent.match(/iP(a|o)d/i) || (userAgent.match(/tablet/i) && !userAgent.match(/RX-34/i)) || userAgent.match(/FOLIO/i)) {
                    // if user agent is a Tablet
                    _type = DeviceTypeConst.TABLET;
                } else if (userAgent.match(/Linux/i) && userAgent.match(/Android/i) && !userAgent.match(/Fennec|mobi|HTC Magic|HTCX06HT|Nexus One|SC-02B|fone 945/i)) {
                    // if user agent is an Android Tablet
                    _type = DeviceTypeConst.TABLET;
                } else if (userAgent.match(/Kindle/i) || (userAgent.match(/Mac OS/i) && userAgent.match(/Silk/i))) {
                    // if user agent is a Kindle or Kindle Fire
                    _type = DeviceTypeConst.TABLET;
                } else if (userAgent.match(/GT-P10|SC-01C|SHW-M180S|SGH-T849|SCH-I800|SHW-M180L|SPH-P100|SGH-I987|zt180|HTC( Flyer|_Flyer)|Sprint ATP51|ViewPad7|pandigital(sprnova|nova)|Ideos S7|Dell Streak 7|Advent Vega|A101IT|A70BHT|MID7015|Next2|nook/i) || (userAgent.match(/MB511/i) && userAgent.match(/RUTEM/i))) {
                    // if user agent is a pre Android 3.0 Tablet
                    _type = DeviceTypeConst.TABLET;
                } else if (userAgent.match(/BOLT|Fennec|Iris|Maemo|Minimo|Mobi|mowser|NetFront|Novarra|Prism|RX-34|Skyfire|Tear|XV6875|XV6975|Google Wireless Transcoder/i)) {
                    // if user agent is unique mobile User Agent
                    _type = DeviceTypeConst.MOBILE;
                } else if (userAgent.match(/Opera/i) && userAgent.match(/Windows NT 5/i) && userAgent.match(/HTC|Xda|Mini|Vario|SAMSUNG\-GT\-i8000|SAMSUNG\-SGH\-i9/i)) {
                    // if user agent is an odd Opera User Agent - http://goo.gl/nK90K
                    _type = DeviceTypeConst.MOBILE;
                } else if ((userAgent.match(/Windows (NT|XP|ME|9)/) && !userAgent.match(/mobile/i)) && !userAgent.match(/Bot|Spider|ia_archiver|NewsGator/i) || userAgent.match(/Win( ?9|NT)/i)) {
                    // if user agent is Windows Desktop
                    _type = DeviceTypeConst.DESKTOP;
                } else if (userAgent.match(/Macintosh|PowerPC/i) && !userAgent.match(/Silk/i)) {
                    // if agent is Mac Desktop
                    _type = DeviceTypeConst.DESKTOP;
                } else if (userAgent.match(/Linux/i) && userAgent.match(/X11/i) && !userAgent.match(/Charlotte/i)) {
                    // if user agent is a Linux Desktop
                    _type = DeviceTypeConst.DESKTOP;
                } else if (userAgent.match(/Solaris|SunOS|BSD/i)) {
                    // if user agent is a Solaris, SunOS, BSD Desktop
                    _type = DeviceTypeConst.DESKTOP;
                }
            }

            // Determine the operating system
            if (userAgent && userAgent.match(/\biPhone.*Mobile|\biPod|\biPad/)) {
                _os = 'iOS';
            }
        }

        /**
         * Device Type
         *
         * @returns {string}
         */
        instance.type = function type() {
            return _type;
        };

        /**
         * Operating System
         *
         * @returns {string}
         */
        instance.os = function os() {
            return _os;
        };


        /**
         * Internet Exploder Version
         */
         instance.ieVersion = function() {
            return document.documentMode ? document.documentMode : 0;
         }


        // Call init
        init.call(this);

        return instance;
    }

    //@end

    //Export
    return DeviceUtil;
});
