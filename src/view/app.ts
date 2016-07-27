import { Component, Data, Getter, Action } from 'vue-typed'

// VueValidator is installed here so it is available in all sub components
var VueValidator = require('vue-validator')
Vue.use(VueValidator)

@Component({
	template: '<router-view transition-mode="out-in"></router-view>'
})
export default class extends Vue
{

}
