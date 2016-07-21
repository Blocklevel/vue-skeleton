
import { Component, Data, Getter, Action } from 'vue-typed'

@Component({
	template: require('./home.html')
})
export default class {
	created() {
		console.log('home created')
	}

	ready() {
		console.log('home ready')
	}
}
