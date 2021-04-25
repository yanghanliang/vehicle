import Vue from 'vue'
import Vuex from 'vuex'

import task from '@/store/defaultData/task.js'
import image from '@/store/defaultData/image.js'
import layout from '@/store/defaultData/layout.js'
import textarea from '@/store/defaultData/textarea.js'

console.log(image, 'image???')

Vue.use(Vuex)

const STATUS = {
  roll: 0,
  noScrolling: 1,
}

const store = new Vuex.Store({
  state: {
    viewList: [
      // {
      // 	type: 'image',
      // 	width: '100%',
      // 	height: '300rpx',
      // 	marginTop: '10px',
      // 	marginBottom: '',
      // 	src: 'https://cdn.uviewui.com/uview/example/fade.jpg',
      // },
      // {
      //   type: 'textarea',
      //   text: 'hsadgsadsgadsadsagdsgsadsadadgshdgsadgsadgsagdsagdsadsajdgsaj',
      // },
      // {
      //   type: 'task',
      // },
    ],
    defaultData: {
      task,
      image,
      layout,
      textarea,
    },
    currentData: {
      position: '',
    },
		position: '',
    backgroundImage: '', // 公共的背景图片
    baseStyle: {
      type: 'base',
      height: '100px',
      testPosition: '',
      backgroundColor: '#ddd',
      backgroundImage: 'url()',
      backgroundTypeId: STATUS.roll,
      backgroundType: '背景图随页面滚动',
    },
  },
  mutations: {
    // 更新视图及当前数据
    updateData(state, params) {
      console.log(params, 'params')
      state.currentData = {
        type: state.currentData.type,
      }
      for (let key in params) {
        state.currentData[key] = params[key]
      }

      // 需要更换位置的才会有 index
      if (params.index) {
        // 重置数据状态
        delete state.currentData.index
				// 插入数据
        state.viewList.splice(params.index, 0, { ...state.currentData })
				console.log(JSON.stringify(state.viewList), 'state.viewList????', params.index, state.currentData)
				// 更新当前数据的位置
        state.currentData.position = params.index
        return false
      }
      console.log(params.position, 'params.position')
      // 更新当前数据
      state.viewList[params.position] = { ...state.currentData }
      // 更新视图
      state.viewList = [...state.viewList]
      // 重置 index
      // delete
      console.log(state.viewList, 'state.viewList')
      console.log(state.currentData, 'state.currentData')
      // console.log(state.viewList, 'state.viewList-更新视图')
    },
    // 只更新视图
    updateView(state, params) {
			// 这里不能直接更新当前数据，会出现递归更新，导致页面卡死
      const position = state.currentData.position
      state.viewList[position] = { ...params, position }
      state.viewList = [...state.viewList]
    },
    // 删除组件
    deleteComponent(state, index) {
      setTimeout(() => {
        state.viewList.splice(index, 1)
        state.viewList = [...state.viewList]
        // 重置当前组件
        state.currentData = {}
      })
    },
    // 更新 viewList
    updateViewList(state, viewList) {
      state.viewList = [...viewList]
    },
		// 更新默认配置
		updateDefaultData (state) {
			state.defaultData[state.currentData.type] =  { ...state.viewList[state.currentData.position] }
			console.log(state.defaultData, 'state.defaultData', state.currentData.type, state.currentData)
			uni.showToast({
				title: '更新默认配置成功',
				duration: 2000
			});
		},
    // 更新 公共样式
    updateBaseStyle (state, item) {
      for (const key in item) {
        state.baseStyle[key] = item[key]
      }
      
      state.baseStyle = { ...state.baseStyle }
      console.log(state.baseStyle, 'state.baseStyle??')
    }
  },
})

export default store
