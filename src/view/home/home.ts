import { Component, Data, Getter, Action } from 'vue-typed'

require('./home.scss')

@Component({
	template: require('./home.html')
})
export default class extends Vue
{
	created()
	{
		console.log('home created')
	}

	ready()
	{
		console.log('home ready')
	}
}
