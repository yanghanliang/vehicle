<template>
  <view class="activity">
    <view class="activity-left">
      <view
        v-for="(item, index) in typeList"
        :key="index"
        :type="item.type"
        class="al-item"
      >
        {{ item.text }}
      </view>
    </view>
    <view class="activity-content">
      <view class="ac-box">
        <view class="mobile-view">
          <m-view></m-view>
        </view>
      </view>
    </view>
    <view class="activity-right">
      <m-handle />
    </view>
  </view>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
// 视图
import mView from '@/pages/activity/view'
// 操作
import mHandle from '@/components/handle/index'

export default {
  name: 'activity',
  components: {
    mView,
    mHandle
  },
  computed: {
    ...mapState([
      'defaultData',
    ]),
    defaultConfig () {
      // const defaultData = {
      //   image: {
      //     type: 'image',
      //     width: '100%',
      //     height: '300rpx',
      //     marginTop: '',
      //     marginBottom: '',
      //     src: 'https://cdn.uviewui.com/uview/example/fade.jpg',
      //   },
      //   textarea: {
      //     type: 'textarea',
      //     text: '心朝大海，春暖花开',
      //   },
      //   task: {
      //     type: 'task',
      //     name: '任务名称',
      //     margin: '',
      //   },
      //   layout: {
      //     type: 'layout',
      //     padding: '10px',
      //     display: 'flex',
      //     borderRadius: '10px',
      //     backgroundColor: '#fff',
      //     flexDirection: 'column',
      //     children: [
      //       {
      //         type: 'text',
      //         text: 'test',
      //         field: 'name',
      //         display: 'block',
      //         marginBottom: '5px',
      //       },
      //       {
      //         type: 'view',
      //         display: 'flex',
      //         paddingBottom: '15px',
      //         borderBottom: '1px solid #dddddd8a',
      //         children: [
      //           {
      //             src: 'http://otest-oss.s3-ap-south-1.amazonaws.com/2684a0861a8468d9d6e4d5281a63301a.png',
      //             type: 'image',
      //             field: 'cover',
      //             width: '70px',
      //             height: '70px',
      //             marginRight: '10px',
      //           },
      //           {
      //             type: 'view',
      //             flex: '1',
      //             display: 'flex',
      //             flexDirection: 'column',
      //             children: [
      //               {
      //                 type: 'view',
      //                 layout: 0, // 布局，默认值： 左右
      //                 display: 'flex',
      //                 children: [
      //                   {
      //                     src: 'http://127.0.0.1:54414/insurance_logo.png',
      //                     type: 'image',
      //                     width: '22px',
      //                     height: '15px',
      //                     marginTop: '8px',
      //                     marginRight: '8px',
      //                   },
      //                   {
      //                     type: 'text',
      //                     flex: '1',
      //                     width: '50px',
      //                     wordWrap: 'break-word',
      //                     fontSize: '12px',
      //                     color: 'rgb(0, 44, 119)',
      //                     text: 'MarshMcLennan provides you with insuxrance services'
      //                   }
      //                 ]
      //               },
      //               {
      //                 type: 'view',
      //                 layout: '0', // 布局，默认值： 左右
      //                 display: 'flex',
      //                 justifyContent: 'space-between',
      //                 children: [
      //                   {
      //                     type: 'view',
      //                     layout: 1,
      //                     flex: 1,
      //                     display: 'flex',
      //                     flexDirection: 'column',
      //                     children: [
      //                       {
      //                         type: 'text',
      //                         text: 'Total income',
      //                         color: '#83898F',
      //                       },
      //                       {
      //                         type: 'text',
      //                         text: '36.00',
      //                         color: 'red',
      //                         fontWeight: 'bold',
      //                         field: 'total', // TODO 也可以放方法
      //                       }
      //                     ]
      //                   },
      //                   {
      //                     type: 'view',
      //                     layout: 1,
      //                     flex: 1,
      //                     display: 'flex',
      //                     textAlign: 'right',
      //                     flexDirection: 'column',
      //                     children: [
      //                       {
      //                         type: 'text',
      //                         text: 'period',
      //                         color: '#83898F',
      //                       },
      //                       {
      //                         type: 'text',
      //                         text: '2 days',
      //                         fontWeight: 'bold',
      //                         field: 'period', // TODO 也可以放方法
      //                       }
      //                     ]
      //                   }
      //                 ]
      //               }
      //             ]
      //           }
      //         ]
      //       },
      //       {
      //         type: 'view',
      //         display: 'flex',
      //         marginTop: '10px',
      //         justifyContent: 'space-between',
      //         children: [
      //           {
      //             type: 'view',
      //             display: 'flex',
      //             flexDirection: 'column',
      //             children: [
      //               {
      //                 type: 'view',
      //                 display: 'flex',
      //                 children: [
      //                   {
      //                     type: 'text',
      //                     text: 'Price: ',
      //                     color: '#83898F',
      //                   },
      //                   {
      //                     type: 'text',
      //                     text: ' ₹200.00',
      //                     color: '#000',
      //                     field: 'price',
      //                   }
      //                 ]
      //               },
      //               {
      //                 type: 'view',
      //                 display: 'flex',
      //                 children: [
      //                   {
      //                     type: 'text',
      //                     text: 'Remaining: ',
      //                     color: '#83898F',
      //                   },
      //                   {
      //                     type: 'text',
      //                     text: ' 100',
      //                     color: '#000',
      //                     field: 'remaining',
      //                   }
      //                 ]
      //               },
      //             ],
      //           },
      //           {
      //             margin: '0',
      //             text: 'Wanted',
      //             type: 'bottom',
      //             backgroundColor: 'rgb(255, 195, 1)',
      //           }
      //         ]
      //       }
      //     ],
      //     data: {
      //       name: '000',
      //       cover: '000',
      //       total: '000',
      //       period: '000',
      //       price: '000',
      //       remaining: '000',
      //     }
      //   }
      // }

      return this.defaultData[this.type]
    },
  },
  data () {
    return {
      isPressDown: false, // 是否按下
      isDrag: false, // 是否拖动
      parentEle: null, // 鼠标抬起时的父元素
      type: null, // 拖拽元素的类型
      componentInfo: [], // 组件信息
      typeList: [
        {
          type: 'image',
          text: '图片',
        },
        {
          type: 'textarea',
          text: '文本',
        },
        {
          type: 'task',
          text: '任务',
        },
        {
          type: 'signIn',
          text: '签到',
        },
        {
          type: 'layout',
          text: '布局',
        },
      ],
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    ...mapMutations([
      'updateData',
    ]),
    getComponentInfo () {
      const arr = []
      const componentBox = document.querySelectorAll('.component-box')
      componentBox.forEach((item, index) => {
        const itemInfo = item.getBoundingClientRect()
        arr.push({
          index: index,
          top: itemInfo.y,
          bottom: itemInfo.y + itemInfo.height,
          middle: itemInfo.y + itemInfo.height / 2,
        })
      })

      this.componentInfo = arr

      console.log(arr, 'arr????')
    },
    init () {
      const vm = this

      const My = function () {
        this.box = document.querySelector('.activity') // 最外层的盒子元素
        this.clickEleInfo = document
          .querySelector('.al-item')
          .getBoundingClientRect() // 获取点击元素的样式
        this.line = null // 提示线条
        this.clickEle = null // 开始元素
        this.isDrag = false // 拖动
        this.cloneEle = null // 克隆内容元素
        this.parentEle = null // 盒子元素
        this.isPressDown = false // 按下 默认 false || 抬起的状态
        this.end_x = 0 // 鼠标 x 轴坐标
        this.end_y = 0 // 鼠标 y 轴坐标

        this.init() // 初始化
      }

      // 初始化
      My.prototype.init = function () {
        this.pressDown() // 鼠标按下
        this.mousemove() // 鼠标移动
        this.mouseup() // 鼠标抬起事件
      }

      // 鼠标按下
      My.prototype.pressDown = function () {
        const that = this

        this.box.addEventListener('mousedown', function (event) {
          // 利用传参兼容火狐
          const e = window.event || event
          // 获取目标元素
          const target = e.target ? e.target : e.srcElement
          // 获取目标元素的类名
          const className = target.className

          // 判断鼠标按下时的元素
          if (className.includes('al-item')) {
            // 内容元素
            that.isDrag = true
            // 修改按下的状态
            that.isPressDown = true
            // 获取开始元素
            that.clickEle = target

            // 克隆需要的元素并追加到父元素中
            that.parentEle = that.clickEle.parentElement
            that.cloneEle = that.clickEle.cloneNode(true)
            that.parentEle.append(that.cloneEle)
          }
        })
      }

      // 鼠标移动
      My.prototype.mousemove = function () {
        const that = this
        window.onmousemove = function (event) {
          // 利用传参兼容火狐
          const e = window.event || event

          // 分别兼容ie和chrome
          const scrollX =
            document.documentElement.scrollLeft || document.body.scrollLeft
          const scrollY =
            document.documentElement.scrollTop || document.body.scrollTop
          // 获取 x 和 y
          that.end_x = e.clientX + scrollX
          that.end_y = e.clientY + scrollY

          // 移动组件
          that.moveComponent(e)

          // 判断是否需要移动元素
          if (that.isDrag) {
            const offsetTop = that.parentEle.getBoundingClientRect().y
            that.cloneEle.style.top =
              that.end_y - offsetTop - that.clickEleInfo.height / 2 + 'px'
            that.cloneEle.style.left =
              that.end_x -
              that.parentEle.offsetLeft -
              that.clickEleInfo.width / 2 +
              'px'
          }
        }
      }

      // 鼠标抬起事件
      My.prototype.mouseup = function () {
        const that = this
        window.onmouseup = function (event) {
          console.log(that.isDrag, 'that.isDrag')
          if (!that.isDrag) {
            return false
          }

          // 修改按下的状态
          that.isPressDown = false
          that.isDrag = false

          // 利用传参兼容火狐
          const e = window.event || event
          // 获取目标元素
          const target = e.target ? e.target : e.srcElement
          // 获取目标元素的类名
          const className = target.className
          // 获取目标元素的标签名
          vm.type = that.cloneEle.getAttribute('type')

          // 放入手机空白处
          if (['ac-mobile'].includes(className)) {
            console.log('aaaaaaaaaa')
            // 更新当前组件
            vm.updateData({
              ...vm.defaultConfig,
              position: vm.viewList.length,
            })
          }

          // 放在组件上面
          if (that.findParentEle(target, 'activity-content')) {
            console.log('bbbbbbbbb')
            vm.getComponentInfo()

            const length = vm.componentInfo.length
            let position = ''

            for (let i = 0; i < length; i++) {
              const item = vm.componentInfo[i]
              if (item.top < that.end_y && item.bottom > that.end_y) {
                console.log(item.index, 'index')
                if (that.end_y > item.middle) {
                  console.log('下面')
                  position = i + 1
                } else {
                  console.log('上面')
                  position = i
                }

                break
              }
            }

            // 更新当前组件
            if (position === 0 || position) {
              vm.updateData({
                ...vm.defaultConfig,
                position: vm.viewList.length,
                index: String(position),
              })
            }
          }

          that.cloneEle.remove()
        }
      }

      // 移动组件
      My.prototype.moveComponent = function () {
        if (!this.isDrag) {
          return false
        }

        // 设置结束坐标
        this.cloneEle.style.top = this.end_y
        this.cloneEle.style.left = this.end_x
        this.cloneEle.style.position = 'absolute'
        this.cloneEle.style.zIndex = '-1'
      }

      /**
       * 查找父元素
       * @param {object} ele  - DOM 对象
       * @param {string} className - 盒子类名
       * @return {object} parentEle  - 返回父级 DOM 对象或者 false
       */
      My.prototype.findParentEle = function (ele, className) {
        const parentEle = ele.parentElement
        let parentClassName = ''

        if (!parentEle) {
          return false
        }

        parentClassName = parentEle.className

        if (![parentClassName].includes(className)) {
          return this.findParentEle(parentEle, className)
        }

        return parentEle
      }

      new My()
    },
  }
}
</script>

<style lang="scss">
.activity {
  display: flex;

  > view {
    min-height: 400upx;
  }

  .activity-left {
    width: 200upx;
    text-align: center;
    background-color: pink;

    .al-item {
      width: 200upx;
      height: 60upx;
      line-height: 60upx;
      border-bottom: 1upx solid red;
      background-color: pink;
    }
  }

  .activity-right {
    padding: 40upx;
    height: 1200upx;
    overflow-y: auto;
    min-width: 150upx;
    border: 1upx solid #ddd;

    .ac-save {
      color: #fff;
      text-align: center;
      padding: 6upx 10upx;
      background-color: blue;
    }
  }

  .activity-content {
    flex: 1;
    overflow: hidden;

    .ac-box {
      width: 700upx;
      margin: 0 auto;
      height: 1380upx;
      overflow: hidden;
      padding: 140upx 26upx 0 24upx;
      background-repeat: no-repeat;
      background-size: 700upx 1380upx;
      background-image: url("../../static/images/activity/iPhoneX_model.png");
    }

    .mobile-view {
      overflow: auto;
      height: 1160upx;
      position: relative;
    }

    // .ac-mobile {
    //   width: 900upx;
    //   margin: 0 auto;
    //   overflow: auto;
    //   position: relative;
    //   height: 1000upx;
    //   border: 1upx solid #666;

    //   &::-webkit-scrollbar {
    //     width: 6px !important;
    //     height: 8px !important;
    //     display: block !important;
    //   }

    //   &::-webkit-scrollbar-thumb {
    //     border-radius: 5px !important;
    //     background-color: #e2e2e287 !important;
    //     -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    //     box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    //   }

    //   &::-webkit-scrollbar-thumb:hover {
    //     background-color: #ccc !important;
    //   }

    //   .component-box {
    //     position: relative;

    //     .cb-delete {
    //       display: none;
    //     }

    //     &:hover {
    //       &::before {
    //         z-index: 6;
    //         content: "";
    //         top: 50%;
    //         // left: 0;
    //         width: 100%;
    //         height: 0;
    //         position: absolute;
    //         background-color: red;
    //         border-top: 2upx dashed red;
    //         transform: translateY(-50%);
    //       }

    //       .cb-delete {
    //         z-index: 6;
    //         bottom: 40upx;
    //         right: 40upx;
    //         color: red;
    //         display: block;
    //         cursor: pointer;
    //         position: absolute;
    //         border-radius: 60upx;
    //         background-color: pink;
    //       }
    //     }
    //   }

    //   textarea {
    //     background-color: pink;
    //   }
    // }
  }
}
</style>
