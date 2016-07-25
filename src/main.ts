import * as Vue from 'vue'
import VueStatic = vuejs.VueStatic;

import * as VueRouter from 'vue-router'
import * as VueResource from 'vue-resource'

import './transition/fade'

import { store } from './vuex/store'

import RouterConfig from "./config/route-config"

import Navigation from './component/navigation/navigation'

require('./style/main.scss')

Vue.use(VueResource)
Vue.use(VueRouter)

var app:VueStatic = Vue.extend({
	store: store,
	components: { Navigation }
})

var router = new VueRouter({
	history: true
})

router.map(RouterConfig.map)
router.start(app, '#app')
