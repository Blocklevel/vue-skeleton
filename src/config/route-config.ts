import Home from '../view/home/home'
import Styleguide from '../view/styleguide/styleguide'

export default class RouterConfig {
	static get map(): any {
		return {
			'/': {
				component: Home
			},
			'/styleguide': {
				component: Styleguide
			}
		}
	}
}
