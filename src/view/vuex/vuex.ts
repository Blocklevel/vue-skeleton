import { Component, Data, Getter, Action } from 'vue-typed'
import { actions } from '../../vuex/store'

import './vuex.transition'

require('./vuex.scss')

@Component({
	template: require('./vuex.html')
})
export default class extends Vue {

	@Getter(actions.getCount)
	count: number

	@Action(actions.addCount)
	increment(num:number) { }

	add() {
		this.increment(5);
	}

	ready() {
		console.log(this)
	}

}
