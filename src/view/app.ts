import { Component, Data, Getter, Action } from 'vue-typed'

var VueValidator = require('vue-validator')
Vue.use(VueValidator)

@Component({
	template: '<router-view transition-mode="out-in"></router-view>'
})
export default class extends Vue
{

}
