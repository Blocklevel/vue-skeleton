import * as Vue from 'vue'
import * as Vuex from 'vuex'
import {MutationTree} from "~vuex/index";
import IState from '../interfaces/IState'

Vue.use(Vuex);

export const state:IState = {
	count: 0
}

export const mutations:MutationTree<IState> = {
	INCREMENT(state, num) {
		state.count += num
	}
}

export const actions = {
	getCount: (state) => {
		return state.count
	},

	addCount: ({dispatch, state}, num) => {
		dispatch('INCREMENT', num)
	}
}

export const store = new Vuex.Store({
	state,
	mutations
})
