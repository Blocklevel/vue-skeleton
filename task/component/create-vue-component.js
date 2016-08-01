var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../../typings/globals/node/index.d.ts" />
var fs = require('fs');
var InteractiveBaseTask_1 = require("../src/InteractiveBaseTask");
var CreateVueComponent = (function (_super) {
    __extends(CreateVueComponent, _super);
    /*
        build script with:
        tsc create-vue-component.ts --module commonjs
     */
    function CreateVueComponent(inputFolder, outputFolder, args, options) {
        if (options === void 0) { options = null; }
        _super.call(this, args, options);
        this.inputFolder = inputFolder;
        this.outputFolder = outputFolder;
        this.options = options;
    }
    CreateVueComponent.prototype.logInfo = function () {
        _super.prototype.logInfo.call(this);
        console.log('[ Vue scaffold component creator ]');
    };
    CreateVueComponent.prototype.run = function (args) {
        var _this = this;
        var path = this.outputFolder + "/" + args.name;
        this.createFolder(path);
        var errors = 0;
        var done = 0;
        ['html', 'scss', 'ts'].forEach(function (type, index, origin) {
            var blueprint = fs.readFileSync(__dirname + "/" + _this.inputFolder + "/component." + type, 'utf8');
            for (var key in args)
                blueprint = blueprint.split("$" + key).join("" + args[key]);
            var destination = path + "/" + args.name + "." + type;
            fs.exists(destination, function (exists) {
                if (exists) {
                    console.log("\u25A0 " + destination + " already exists ! skipping...");
                    errors++;
                    _this.onComplete(origin.length, done, errors);
                }
                else {
                    fs.writeFile(destination, blueprint, function (err) {
                        if (err) {
                            console.log(err);
                            errors++;
                        }
                        else {
                            console.log("\u25BA file " + destination + " written....");
                            done++;
                        }
                        _this.onComplete(origin.length, done, errors);
                    });
                }
            });
        });
    };
    CreateVueComponent.prototype.onComplete = function (total, done, errors) {
        if (!(total - errors - done)) {
            if (errors)
                console.log('\ncomponent creation failed with errors..\n');
            else
                console.log("\nsuccessfully created component\n");
        }
    };
    return CreateVueComponent;
})(InteractiveBaseTask_1["default"]);
exports["default"] = CreateVueComponent;
new CreateVueComponent('/blueprint', './src/component', process.argv, {
    name: {
        description: "name of the component to be created",
        manditory: true
    },
    /*template:{
        description:"name of the template, leave blank for '$name.html'",
        defaultValue:"$name"
    },
    */
    text: {
        description: "enter some default text for in the component",
        manditory: false,
        placeholder: "component $name is successfully created..."
    }
});
var IProps = (function () {
    function IProps() {
    }
    return IProps;
})();
