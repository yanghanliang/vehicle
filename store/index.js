import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		currentData: {
			position: ''
		},
		viewList: [],
	},
	mutations: {
		// 更新视图及当前数据
		updateData (state, params) {
			console.log(params, 'params')
			state.currentData = {
				type: state.currentData.type
			}
			for(let key in params) {
				state.currentData[key] = params[key]
			}

			// 更新当前数据
			state.viewList[params.position] = { ...state.currentData }
			// // 更新视图
			// state.viewList = [...state.viewList]

			console.log(state.viewList, 'state.viewList-更新视图')
		},
		// 只更新视图
		updateView (state, params) {
			const position = state.currentData.position
			state.viewList[position] = { ...params, position }
			state.viewList = [...state.viewList]
		}
	},
	getters: {
	}
})

export default store
