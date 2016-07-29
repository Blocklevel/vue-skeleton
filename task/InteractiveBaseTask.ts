import BaseTask from "./BaseTask";
import {ITaskOptions} from "./BaseTask";
import readline = require('readline');

export default class InteractiveBaseTask extends BaseTask{

	private input:{} = {};

	protected validate(args:{}):boolean
	{
		var questions:Array<Array<string | string>> = [];
		for(let key in this.options)questions.push([key, this.options[key]]);
		this.question(questions);
		return false;
	}

	private question(questions:Array<Array<string | ITaskOptions>>):void
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

		var question:Array<string | ITaskOptions> = questions.shift();
		let setting:ITaskOptions = question[1];
		let line:string = setting.description;
		for(var key in this.input)line = line.split(`$${key}`).join(`${this.input[key]}`);
		let key:string = question[0];

		read.question(`\n> ${line}: `, (answer) =>
		{
			if(!answer && setting.defaultValue)
			{
				this.input[key] = this.input[setting.defaultValue.replace("$",'')];

			}else if(answer)
			{
				this.input[key] = answer;

			}else
			{
				if(setting.manditory)
				{
					console.log(`\n ► field "${question[0]}" is manditory...`);
					questions.unshift(question);
				}else
				{
					if(setting.placeholder)this.input[key] = setting.placeholder;
					else console.log(` field "${key}"  skipped.....`);
				}
			}
			read.close();
			this.question(questions);
		});
	}
}
