import { Component, Data, Getter, Action } from 'vue-typed'

require('./$name.scss')

@Component({
	name: '$name',
	template: require('./$name.html')
})
export default class extends Vue
{
	ready()
	{
	}
}
