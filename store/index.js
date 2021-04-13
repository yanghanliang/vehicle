import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		vuex_version: '1.0.1',
		vuex_demo: '绛紫',
		url: '',
	},
	mutations: {
		setImagesUrl (state, url) {
			console.log(url, 'url')
			state.url = url
		}
	},
	getters: {
		yyuu: state => {
			return state.vuex_demo
		},
		getTodoById: (state) => {
			return state.vuex_demo.length + 1
		}
	}
})

export default store
