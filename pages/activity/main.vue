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
          class="component-box"
        >
          <view class="cb-delete" @click="deleteComponent(index)">删除</view>
          <component ref="mobileView" :value="item" :is="item.type | componentsName('view')" :key="item.type + index + Math.random()"></component>
        </view>
      </view>
    </view>
    <view class="activity-right">
      <component :is="handleDara.type | componentsName('handle')" :value="handleDara" key="gg"></component>
    </view>
  </view>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
// 视图
import viewTask from '@/components/mobileView/public/task/index'
import viewImage from '@/components/mobileView/public/image/index'
import viewTextarea from '@/components/mobileView/public/textarea/index'
// 操作
import handleTask from '@/components/handle/public/task/index'
import handleImage from '@/components/handle/public/image/index'
import handleTextarea from '@/components/handle/public/textarea/index'

export default {
  name: 'activity',
  components: {
    viewTask,
    viewImage,
    viewTextarea,
    handleTask,
    handleImage,
    handleTextarea
  },
  computed: {
    ...mapState([
      'vuex_demo',
      'currentData',
      'viewList',
    ]),
    defaultConfig () {
      const defaultData = {
        image: {
          type: 'image',
          width: '100%',
          height: '300rpx',
          marginTop: '10px',
          marginBottom: '',
          src: 'https://cdn.uviewui.com/uview/example/fade.jpg',
        },
        textarea: {
          type: 'textarea',
          text: 'hsadgsadsgadsadsagdsgsadsadadgshdgsadgsadgsagdsagdsadsajdgsaj',
        },
        task: {
          type: 'task',
        },
      }

      return defaultData[this.type]
    },
  },
  filters: {
    componentsName (type, prefix) {
      console.log(type, 'typetypetypetypetypetype')
      if (type) {
        return prefix + type.slice(0, 1).toLocaleUpperCase() + type.slice(1)
      }

      return 'handleImage'
    }
  },
  watch: {
    currentData: {
      deep: true,
      handler (newVal, oldVal) {
        this.handleDara = { ...newVal }
      }
    }
  },
  data () {
    return {
      handleDara: {}, // 操作的数据
      isPressDown: false, // 是否按下
      isDrag: false, // 是否拖动
      parentEle: null, // 鼠标抬起时的父元素
      type: null, // 拖拽元素的类型
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
      ],
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    ...mapMutations([
      'updateData',
      'deleteComponent',
    ]),
    showCurrentConfig (item, index) {
      // if (index !== this.currentData.position) {
      //   console.log(item, 'item??????')
      // }

      // this.currentData.data = item
      // this.currentData.position = index

      const params = {
        ...item,
        position: index,
      }
      this.updateData(params)
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

          if (['ac-mobile'].includes(className)) {
            // target.append(that.cloneEle)
            that.cloneEle.remove()

            console.log('**********')

            // 追加默认配置
            // vm.viewList.push(vm.defaultConfig)

            // vm.currentData.data = { ...vm.defaultConfig }
            // vm.currentData.position = vm.viewList.length
            // 更新当前组件
            vm.updateData({
              ...vm.defaultConfig,
              position: vm.viewList.length,
            })
          }
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

      .component-box {
        position: relative;

        .cb-delete {
          display: none;
        }

        &:hover {
          &::before {
            z-index: 6;
            content: "";
            top: 50%;
            // left: 0;
            width: 100%;
            height: 0;
            position: absolute;
            background-color: red;
            border-top: 2upx dashed red;
            transform: translateY(-50%);
          }

          .cb-delete {
            z-index: 6;
            bottom: 40upx;
            right: 40upx;
            color: red;
            display: block;
            cursor: pointer;
            position: absolute;
            border-radius: 60upx;
            background-color: pink;
          }
        }
      }
    }
  }
}
</style>
