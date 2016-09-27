var Loggers;
(function (Loggers) {
    function printMessage() {
        console.log('print');
    }
    Loggers.printMessage = printMessage;
})(Loggers || (Loggers = {}));
var Loggers;
(function (Loggers) {
    function logMessage() {
        console.log("log");
    }
    Loggers.logMessage = logMessage;
})(Loggers || (Loggers = {}));
/// <reference path="print.ts" />
/// <reference path="log.ts" />
Loggers.logMessage();
Loggers.printMessage();
