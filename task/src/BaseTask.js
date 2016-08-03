/// <reference path="../../typings/globals/node/index.d.ts" />
var fs = require('fs');
var BaseTask = (function () {
    function BaseTask(args, options) {
        if (options === void 0) { options = null; }
        this.options = options;
        this.init(args.slice(2));
    }
    BaseTask.prototype.init = function (properties) {
        this.logInfo();
        var args = this.parse(properties);
        if (!this.validate(args))
            return;
        this.run(args);
    };
    BaseTask.prototype.validate = function (args) {
        var isValid = true;
        for (var key in this.options) {
            if (!(key in args)) {
                console.log("EXCEPTION: arguments missing => " + key + " = " + this.options[key]);
                isValid = false;
            }
        }
        return isValid;
    };
    BaseTask.prototype.logInfo = function () {
        console.log('\n\n\n');
    };
    ;
    BaseTask.prototype.run = function (args) { };
    ;
    //make directory if not exists
    BaseTask.prototype.createFolder = function (fullPath) {
        var folders = fullPath.split('/');
        var path = '';
        while (folders.length) {
            path += folders.shift() + "/";
            fs.existsSync(path) || fs.mkdirSync(path);
        }
    };
    BaseTask.prototype.parse = function (properties) {
        var parsed = {};
        while (properties.length) {
            var value = properties.pop().split(':');
            var key = value[0];
            if (!(key in this.options)) {
                console.log("WARNING: argument' \"" + key + "\" is not supported, skipped...");
                continue;
            }
            parsed[key] = value[1];
        }
        return parsed;
    };
    return BaseTask;
})();
exports["default"] = BaseTask;
