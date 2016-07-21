import { Component, Data, Getter, Action } from 'vue-typed'

@Component({
	template: '<div>about</div>'
})
export default class extends Vue {
	ready() {
		alert('about ready')
	}
}
