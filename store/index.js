import Vue from 'vue'
import Vuex from 'vuex'

import { uToast } from 'uview-ui';

Vue.use(Vuex)

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
      image: {
        type: 'image',
        width: '100%',
        height: '300rpx',
        marginTop: '',
        marginBottom: '',
        src: 'https://cdn.uviewui.com/uview/example/fade.jpg',
      },
      textarea: {
        type: 'textarea',
        text: '心朝大海，春暖花开',
      },
      task: {
        type: 'task',
        margin: '',
        name: '任务名称',
				completeNumber: 5,
				describe: '任务描述',
				contact: 'http://www.baidu.com',
      },
      layout: {
        type: 'layout',
        padding: '10px',
        display: 'flex',
        borderRadius: '10px',
        backgroundColor: '#fff',
        flexDirection: 'column',
        children: [
          {
            type: 'text',
            text: 'test',
            field: 'name',
            display: 'block',
            marginBottom: '5px',
          },
          {
            type: 'view',
            display: 'flex',
            paddingBottom: '15px',
            borderBottom: '1px solid #dddddd8a',
            children: [
              {
                src:
                  'http://otest-oss.s3-ap-south-1.amazonaws.com/2684a0861a8468d9d6e4d5281a63301a.png',
                type: 'image',
                field: 'cover',
                width: '70px',
                height: '70px',
                marginRight: '10px',
              },
              {
                type: 'view',
                flex: '1',
                display: 'flex',
                flexDirection: 'column',
                children: [
                  {
                    type: 'view',
                    layout: 0, // 布局，默认值： 左右
                    display: 'flex',
                    children: [
                      {
                        src: 'http://127.0.0.1:54414/insurance_logo.png',
                        type: 'image',
                        width: '22px',
                        height: '15px',
                        marginTop: '8px',
                        marginRight: '8px',
                      },
                      {
                        type: 'text',
                        flex: '1',
                        width: '50px',
                        wordWrap: 'break-word',
                        fontSize: '12px',
                        color: 'rgb(0, 44, 119)',
                        text:
                          'MarshMcLennan provides you with insuxrance services',
                      },
                    ],
                  },
                  {
                    type: 'view',
                    layout: '0', // 布局，默认值： 左右
                    display: 'flex',
                    justifyContent: 'space-between',
                    children: [
                      {
                        type: 'view',
                        layout: 1,
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        children: [
                          {
                            type: 'text',
                            text: 'Total income',
                            color: '#83898F',
                          },
                          {
                            type: 'text',
                            text: '36.00',
                            color: 'red',
                            fontWeight: 'bold',
                            field: 'total', // TODO 也可以放方法
                          },
                        ],
                      },
                      {
                        type: 'view',
                        layout: 1,
                        flex: 1,
                        display: 'flex',
                        textAlign: 'right',
                        flexDirection: 'column',
                        children: [
                          {
                            type: 'text',
                            text: 'period',
                            color: '#83898F',
                          },
                          {
                            type: 'text',
                            text: '2 days',
                            fontWeight: 'bold',
                            field: 'period', // TODO 也可以放方法
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'view',
            display: 'flex',
            marginTop: '10px',
            justifyContent: 'space-between',
            children: [
              {
                type: 'view',
                display: 'flex',
                flexDirection: 'column',
                children: [
                  {
                    type: 'view',
                    display: 'flex',
                    children: [
                      {
                        type: 'text',
                        text: 'Price: ',
                        color: '#83898F',
                      },
                      {
                        type: 'text',
                        text: ' ₹200.00',
                        color: '#000',
                        field: 'price',
                      },
                    ],
                  },
                  {
                    type: 'view',
                    display: 'flex',
                    children: [
                      {
                        type: 'text',
                        text: 'Remaining: ',
                        color: '#83898F',
                      },
                      {
                        type: 'text',
                        text: ' 100',
                        color: '#000',
                        field: 'remaining',
                      },
                    ],
                  },
                ],
              },
              {
                margin: '0',
                text: 'Wanted',
                type: 'bottom',
                backgroundColor: 'rgb(255, 195, 1)',
              },
            ],
          },
        ],
        data: {
          name: '000',
          cover: 'https://fanyi-cdn.cdn.bcebos.com/static/translation/img/header/logo_e835568.png',
          total: '000',
          period: '000',
          price: '000',
          remaining: '000',
        },
      },
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
      })
    },
    // 更新 viewList
    updateViewList(state, viewList) {
      state.viewList = [...viewList]
    },
    // 更新 公共样式
    updateBaseStyle(state, style) {
      state.baseStyle = { ...style }
    },
    // 更新公共背景图片滚动类型
    updateBaseBackgroundImage(state, backgroundImage) {
      state.backgroundImage = backgroundImage
      console.log(state.backgroundImage, 'state.baseBackgroundImagestate.baseBackgroundImage')
    },
		// 更新默认配置
		updateDefaultData (state) {
			state.defaultData[state.currentData.type] =  { ...state.viewList[state.currentData.position] }
			console.log(state.defaultData, 'state.defaultData', state.currentData.type, state.currentData)
			uni.showToast({
				title: '更新默认配置成功',
				duration: 2000
			});
		}
  },
  getters: {
    viewListCopy(state) {
      return state.viewList
    },
  },
})

export default store
