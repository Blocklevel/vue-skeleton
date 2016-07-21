import { Component, Data, Getter, Action } from 'vue-typed'
import { actions } from '../vuex/store'

@Component({
	name: 'app',
	template: '<div id="foo"><div class="text">{{text}} {{ count }} <button @click="increment(1)">add</button></div></div>'
})
export default class App extends Vue {

	@Data()
	text: string

	constructor() {
		super()
		this.text = 'foo'
	}

	@Getter(actions.getCount)
	count: number

	@Action(actions.addCount)
	increment(num:number) { }

	add() {
		this.increment(5);
	}
}
