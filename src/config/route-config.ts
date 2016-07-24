import Home from '../view/home/home'
import Styleguide from '../view/styleguide/styleguide'
import Vuex from '../view/vuex/vuex'

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
			}
		}
	}
}
