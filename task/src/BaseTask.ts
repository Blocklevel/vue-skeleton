/// <reference path="../../typings/globals/node/index.d.ts" />
import fs = require('fs');

export interface ITaskOptions
{
	manditory:boolean;
	placeholder:string;
	description:string
	defaultValue:string;
}

export default class BaseTask {

	constructor(args:Array<string>, protected options:{} = null)
	{
		this.init(args.slice(2));
	}

	protected init(properties:Array<string>)
	{
		this.logInfo();
		let args:{} = this.parse(properties);
		if(!this.validate(args))return;
		this.run(args);
	}

	protected validate(args:{}):boolean
	{
		var isValid:boolean = true;
		for(var key in this.options){
			if(!(key in args))
			{
				console.log(`EXCEPTION: arguments missing => ${key} = ${this.options[key]}`);
				isValid = false;
			}
		}
		return isValid;
	}

	protected logInfo():void{
		console.log('\n\n\n')
	};
	protected run(args:{}):void{};

	//make directory if not exists
	protected createFolder(fullPath:string):void
	{
		var folders:Array<string> = fullPath.split('/');
		var path:string = '';

		while(folders.length)
		{
			path += `${folders.shift()}/`;
			fs.existsSync(path) || fs.mkdirSync(path);
		}
	}

	private parse(properties:Array<string>):{}
	{
		let parsed:{} = {};
		while(properties.length)
		{
			var value:Array<string> = properties.pop().split(':');
			let key:string = value[0];
			if(!(key in this.options))
			{
				console.log(`WARNING: argument' "${key}" is not supported, skipped...`);
				continue;
			}
			parsed[key] = value[1];
		}
		return parsed;
	}
}


