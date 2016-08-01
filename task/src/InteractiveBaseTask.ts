import BaseTask from "./BaseTask";
import {ITaskOptions} from "./BaseTask";
import readline = require('readline');

export default class InteractiveBaseTask extends BaseTask{

	private input:{} = {};

	protected validate(args:{}):boolean
	{
		var questions:Array<{key:string, options:ITaskOptions}> = [];
		for(let key in this.options)questions.push({key:key, options:this.options[key]});
		this.question(questions);
		return false;
	}

	private question(questions:Array<{key:string, options:ITaskOptions}>):void
	{
		if(!questions.length)
		{
			this.run(this.input);
			return;
		}

		let read = readline.createInterface({
			input: process.stdin,
			output: process.stdout
		});

		var question:{key:string, options:ITaskOptions} = questions.shift();

		let option:ITaskOptions = question.options;
		let line:string = option.description;
		for(var _key in this.input)line = line.split(`$${_key}`).join(`${this.input[_key]}`);
		let key:string = question.key;

		read.question(`\n> ${line}: `, (answer) =>
		{
			if(!answer && option.defaultValue)
			{
				this.input[key] = this.input[option.defaultValue.replace("$",'')];

			}else if(answer)
			{
				this.input[key] = answer;

			}else
			{
				if(option.manditory)
				{
					console.log(`\n ► field "${question.key}" is manditory...`);
					questions.unshift(question);
				}else
				{
					if(option.placeholder)this.input[key] = option.placeholder;
					else console.log(` field "${key}"  skipped.....`);
				}
			}
			read.close();
			this.question(questions);
		});
	}
}
