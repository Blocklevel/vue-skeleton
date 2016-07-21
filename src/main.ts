import * as Vue from 'vue'
import VueStatic = vuejs.VueStatic;

import * as VueRouter from 'vue-router'

import { store } from './vuex/store'

import RouterConfig from "./config/route-config"

require('./styles/main.scss')

Vue.use(VueRouter)

var app:VueStatic = Vue.extend({
	store: store
})

var router = new VueRouter({
	history: true
})

router.map(RouterConfig.map)
router.start(app, '#app')
