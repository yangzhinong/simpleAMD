define("lib/log",["require","exports"],function(e,o){"use strict";function i(e){console.log(e)}o.logMessage=i}),define("util/print",["require","exports","../lib/log"],function(e,o,i){"use strict";function n(){console.log("print"),i.logMessage("log in logMessage")}o.__esModule=!0,o["default"]=n}),define("OneTwoThree",["require","exports"],function(e,o){"use strict";o.__esModule=!0,o["default"]="123"}),define("app",["require","exports","lib/log","util/print","./OneTwoThree"],function(e,o,i,n,t){"use strict";i.logMessage("my name is yzn"),n["default"](),console.log(t["default"])});