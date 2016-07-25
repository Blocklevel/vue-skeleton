import Home from '../view/home/home'
import Styleguide from '../view/styleguide/styleguide'
import Vuex from '../view/vuex/vuex'
import Resource from '../view/resource/resource'

export default class RouterConfig {
	static get map(): any {
		return {
			'/': {
				component: Home
			},

			'/styleguide': {
				component: Styleguide
			},

			'/vuex': {
				component: Vuex
			},

			'/resource': {
				component: Resource
			}
		}
	}
}
