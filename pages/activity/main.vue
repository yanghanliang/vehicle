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
      <view class="ac-mobile">
        <view
          v-for="(item, index) in viewList"
          :key="item.type + index"
          @click="showCurrentConfig(item, index)"
        >
          <component ref="mobileView" :value="item" :is="item.type" :key="item.type + index + Math.random()"></component>
        </view>
      </view>
    </view>
    <view>pppp {{ vuex_demo }}</view>
    <view class="activity-right">
      <m-handle ref="handle" />
    </view>
  </view>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

import mHandle from '@/components/handle/index'

import mTask from '@/components/mobileView/public/task/index'
import mImage from '@/components/mobileView/public/image/index'
import mTextarea from '@/components/mobileView/public/textarea/index'

export default {
  name: 'activity',
  components: {
    mHandle,

    mTask,
    mImage,
    mTextarea,
  },
  computed: {
    ...mapState([
      'vuex_demo',
      'currentData',
      'viewList',
    ]),
    defaultConfig () {
      const defaultData = {
        mImage: {
          type: 'mImage',
          width: '100%',
          height: '300rpx',
          marginTop: '',
          marginBottom: '',
          src: 'https://cdn.uviewui.com/uview/example/fade.jpg',
        },
        mTextarea: {
          type: 'mTextarea',
          text: 'hsadgsadsgadsadsagdsgsadsadadgshdgsadgsadgsagdsagdsadsajdgsaj',
        },
        mTask: {
          type: 'mTask',
        },
      }

      return defaultData[this.type]
    },
  },
  watch: {
    viewList (newVal, oldVal) {
      console.log(newVal, 'newVal-main')
    }
  },
  data () {
    return {
      //   currentData: {
      //     data: null,
      //     position: null,
      //   },
      isPressDown: false, // 是否按下
      isDrag: false, // 是否拖动
      parentEle: null, // 鼠标抬起时的父元素
      type: null, // 拖拽元素的类型
      typeList: [
        {
          type: 'mImage',
          text: '图片',
        },
        {
          type: 'mTextarea',
          text: '文本',
        },
        {
          type: 'mTask',
          text: '任务',
        },
        {
          type: 'mSignIn',
          text: '签到',
        },
      ],
    //   viewList: [
    //     {
    //     	type: 'mImage',
    //     	width: '100%',
    //     	height: '300rpx',
    //     	src: 'https://cdn.uviewui.com/uview/example/fade.jpg'
    //     },
    //     {
    //     	type: 'mTextarea',
    //     	value: ''
    //     },
    //     {
    //     	type: 'mTask',
    //     }
    //   ],
    }
  },
  mounted () {
    this.init()
    console.log(this.$store.getters.yyuu, '123333')
    console.log(this.getTodoById, 'ppppp')
  },
  methods: {
    ...mapMutations([
      'updateData',
      'initDefalutData',
    ]),
    showCurrentConfig (item, index) {
      if (index !== this.currentData.position) {
        console.log(item, 'item??????')
        this.initDefalutData(item)
      }

      this.currentData.data = item
      this.currentData.position = index

      const params = {
        ...item,
        position: index,
      }
      this.updateData(params)

      console.log('点击组件', this.$refs)
      this.$refs.handle.showCurrentConfig(item)
    },
    save () {
      const html = document.getElementsByTagName('html')[0].outerHTML
      const formdata = new FormData()
      formdata.append('file', html)

      axios({
        method: 'post',
        url: 'http://localhost:3001/testData',
        data: formdata, // 必须是 FormData 对象
        headers: { 'Content-Type': 'multipart/form-data' },
      })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
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
          // 修改按下的状态
          that.isPressDown = true

          // 利用传参兼容火狐
          const e = window.event || event
          // 获取目标元素
          const target = e.target ? e.target : e.srcElement
          // 获取目标元素的类名
          const className = target.className
          console.log(className, 'className')

          // 判断鼠标按下时的元素
          if (className.includes('al-item')) {
            // 内容元素
            that.isDrag = true
            // 获取开始元素
            that.clickEle = target

            // 克隆需要的元素并追加到父元素中
            that.parentEle = that.clickEle.parentElement
            that.cloneEle = that.clickEle.cloneNode(true)
            that.cloneEle.addClass = 'al-clone'
            console.log(that.cloneEle, 'that.cloneEle')
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

          // 移动提示线条
          that.moveTipLine(e)

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
            that.cloneEle.style.zIndex = -1
          }
        }
      }

      // 鼠标抬起事件
      My.prototype.mouseup = function () {
        const that = this
        window.onmouseup = function (event) {
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

          console.log(vm.type, '????', target)
          if (['ac-mobile'].includes(className)) {
            // target.append(that.cloneEle)
            that.cloneEle.remove()

            // 追加默认配置
            vm.viewList.push(vm.defaultConfig)
            console.log(vm.viewList, '????')
          }
        }
      }

      // 移动提示线条
      My.prototype.moveTipLine = function () {
        if (!this.isDrag) {
          return false
        }

        // 设置结束坐标
        this.cloneEle.style.top = this.end_y
        this.cloneEle.style.left = this.end_x
        this.cloneEle.style.position = 'absolute'
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
    width: 150upx;
    text-align: center;
    background-color: pink;

    .al-item,
    .al-clone {
      width: 150upx;
      height: 60upx;
      line-height: 60upx;
      border-bottom: 1upx solid red;
      background-color: pink;
    }
  }

  .activity-right {
    padding: 40upx;
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

    .ac-mobile {
      width: 900upx;
      min-height: 1000upx;
      margin: 0 auto;
      position: relative;
      border: 1upx solid #666;

      textarea {
        background-color: pink;
      }
    }
  }
}
</style>
