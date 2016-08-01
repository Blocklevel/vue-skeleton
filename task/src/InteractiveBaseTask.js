var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BaseTask_1 = require("./BaseTask");
var readline = require('readline');
var InteractiveBaseTask = (function (_super) {
    __extends(InteractiveBaseTask, _super);
    function InteractiveBaseTask() {
        _super.apply(this, arguments);
        this.input = {};
    }
    InteractiveBaseTask.prototype.validate = function (args) {
        var questions = [];
        for (var key in this.options)
            questions.push({ key: key, options: this.options[key] });
        this.question(questions);
        return false;
    };
    InteractiveBaseTask.prototype.question = function (questions) {
        var _this = this;
        if (!questions.length) {
            this.run(this.input);
            return;
        }
        var read = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        var question = questions.shift();
        var option = question.options;
        var line = option.description;
        for (var _key in this.input)
            line = line.split("$" + _key).join("" + this.input[_key]);
        var key = question.key;
        read.question("\n> " + line + ": ", function (answer) {
            if (!answer && option.defaultValue) {
                _this.input[key] = _this.input[option.defaultValue.replace("$", '')];
            }
            else if (answer) {
                _this.input[key] = answer;
            }
            else {
                if (option.manditory) {
                    console.log("\n \u25BA field \"" + question.key + "\" is manditory...");
                    questions.unshift(question);
                }
                else {
                    if (option.placeholder)
                        _this.input[key] = option.placeholder;
                    else
                        console.log(" field \"" + key + "\"  skipped.....");
                }
            }
            read.close();
            _this.question(questions);
        });
    };
    return InteractiveBaseTask;
})(BaseTask_1["default"]);
exports["default"] = InteractiveBaseTask;
