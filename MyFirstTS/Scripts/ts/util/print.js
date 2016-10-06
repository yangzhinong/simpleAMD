define(["require", "exports", '../lib/log'], function (require, exports, log) {
    "use strict";
    function printMessage() {
        console.log('print');
        log.logMessage('log in logMessage');
    }
    exports.__esModule = true;
    exports["default"] = printMessage;
});
//# sourceMappingURL=print.js.map