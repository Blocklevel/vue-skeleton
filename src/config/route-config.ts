import App from '../view/app'
import Home from '../view/home/home'
import Styleguide from '../view/styleguide/styleguide'
import Vuex from '../view/vuex/vuex'
import Resource from '../view/resource/resource'
import Validation from '../view/validation/validation'

export default class RouterConfig
{
	// Root route contains an App component, this way the store can be applied globally
	static get map(): any
	{
		return {
			'/': {
				component: App,

				subRoutes: {
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
					},

					'/validation': {
						component: Validation
					}
				}
			}
		}
	}
}
