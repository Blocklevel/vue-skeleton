import * as Vue from 'vue'
import VueStatic = vuejs.VueStatic;

import * as VueRouter from 'vue-router'
import * as VueResource from 'vue-resource'

import './transition/fade'

import { store } from './vuex/store'

import RouterConfig from "./config/route-config"
import Navigation from './component/navigation/navigation'

// Main styles, these styles will be applied globally, each component will get it's own styles
require('./style/main.scss')

// Install Vue Plugins
Vue.use(VueResource)
Vue.use(VueRouter)

// Extend Vue to create a named instance for our app
var app:VueStatic = Vue.extend({
	store: store,
	components: { Navigation }
})

// Define the router
var router = new VueRouter({
	history: true
})

// Map RouterConfig and start the app
router.map(RouterConfig.map)
router.start(app, '#app')
