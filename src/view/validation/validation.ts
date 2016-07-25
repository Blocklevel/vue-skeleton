import { Component, Data, Getter, Action } from 'vue-typed'

require('./validation.scss')

@Component({
	template: require('./validation.html')
})
export default class extends Vue
{
	public $validation;

	@Data()
	comment: string

	ready()
	{

	}
}
