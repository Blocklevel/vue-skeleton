import App from '../page/app'
import Home from '../page/home/home'
import Styleguide from '../page/styleguide/styleguide'
import Vuex from '../page/vuex/vuex'
import Resource from '../page/resource/resource'
import Validation from '../page/validation/validation'

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
