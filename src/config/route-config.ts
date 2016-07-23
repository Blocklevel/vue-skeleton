import Home from '../view/home/home'
import About from '../view/about/about'

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
