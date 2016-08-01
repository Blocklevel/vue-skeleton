/// <reference path="../../typings/globals/node/index.d.ts" />
import fs = require('fs');
import InteractiveBaseTask from "../src/InteractiveBaseTask";

export default class CreateVueComponent extends InteractiveBaseTask {

	/*
		build script with:
	    tsc create-vue-component.ts --module commonjs
	 */

	constructor(private inputFolder, private outputFolder, args:Array<string>, protected options:{} = null)
	{
		super(args, options);
	}

	protected logInfo():void
	{
		super.logInfo();
		console.log('[ Vue scaffold component creator ]')
	}

	protected run(args:IProps):void
	{
		var path:string = `${this.outputFolder}/${args.name}`;
		this.createFolder(path);

		let errors:number = 0;
		let done:number = 0;

		['html', 'scss', 'ts'].forEach((type:string, index:number, origin:Array<string>)=>
		{
			let blueprint:string = fs.readFileSync(`${__dirname}/${this.inputFolder}/component.${type}`, 'utf8');
			for(var key in args)blueprint = blueprint.split(`$${key}`).join(`${args[key]}`);
			let destination:string = `${path}/${args.name}.${type}`;

			fs.exists(destination, (exists:boolean)=>{
				if(exists)
				{
					console.log(`■ ${destination} already exists ! skipping...`);
					errors++;
					this.onComplete(origin.length, done, errors);
				}else
				{
					fs.writeFile(destination, blueprint, (err)=> {
						if(err)
						{
							console.log(err);
							errors++;
						}else
						{
							console.log(`► file ${destination} written....`);
							done++;
						}
						this.onComplete(origin.length, done, errors);
					});
				}
			})
		});
	}

	private onComplete(total:number, done:number, errors:number):void{

		if(!(total - errors - done))
		{
			if(errors)console.log('\ncomponent creation failed with errors..\n')
			else console.log(`\nsuccessfully created component\n`);
		}
	}
}

new CreateVueComponent(
	'/blueprint',
	'./src/component',
	 process.argv,
	{
		name:{
			description:"name of the component to be created",
			manditory:true
		},
		/*template:{
			description:"name of the template, leave blank for '$name.html'",
			defaultValue:"$name"
		},
		*/
		text:{
			description:"enter some default text for in the component",
			manditory:false,
			placeholder:"component $name is successfully created..."
		}
	}
);


class IProps {
	name:string;
}



