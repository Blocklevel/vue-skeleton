import Home from '../views/home/home'
import About from '../views/about/about'

export default class RouterConfig {
	static get map(): any {
		return {
			'/': {
				component: Home
			},
			'/about': {
				component: About
			}
		}
	}
}
