import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		vuex_version: '1.0.1',
		vuex_demo: '绛紫',
		url: '',

		defalutData: {},
		currentData: {
			position: ''
		},
		viewList: []
	},
	mutations: {
		// 更新视图及当前数据
		updateData (state, params) {
			console.log(params, 'params')
			for(let key in params) {
				state.currentData[key] = params[key]
			}

			// 更新当前数据
			state.viewList[params.position] = { ...state.currentData }
			// 更新视图
			state.viewList = [...state.viewList]
		},
		// 初始化默认数据
		initDefalutData (state, item) {
			console.log('初始化默认数据')
			state.defalutData = { ...item }
		},
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
