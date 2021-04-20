<template>
  <view class="ac-mobile" :style="baseStyle">
    <view
      v-for="(item, index) in viewList"
      :key="item.type + index"
      @click="showCurrentConfig(item, index)"
      class="component-box"
    >
      <u-icon class="cb-delete" size="40" color="#fff" name="trash" @click="deleteComponent(index)"></u-icon>
      <component
        :value="item"
        :is="item.type | componentsName('view')"
        :key="item.type + index + Math.random()"
      ></component>
    </view>
  </view>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
// 视图
import viewTask from '@/components/mobileView/public/task/index'
import viewImage from '@/components/mobileView/public/image/index'
import viewTextarea from '@/components/mobileView/public/textarea/index'
import viewLayout from '@/components/mobileView/layout'

export default {
  components: {
    viewTask,
    viewImage,
    viewTextarea,

    viewLayout,
  },
  computed: {
    ...mapState([
      'viewList',
      'baseStyle',
    ]),
  },
  filters: {
    componentsName (type, prefix) {
      if (type) {
        return prefix + type.slice(0, 1).toLocaleUpperCase() + type.slice(1)
      }

      return 'handleImage'
    },
  },
  methods: {
    ...mapMutations(['updateData', 'deleteComponent', 'updateViewList']),
    showCurrentConfig (item, index) {
      const params = {
        ...item,
        position: index,
      }
      this.updateData(params)
    },
  },
  created () {
    let viewList = ''
    // #ifdef H5
    viewList = localStorage.getItem('viewList')
    console.log('H5')
    // #endif

    // #ifndef H5
    console.log('除了H5')
    // viewList = uni.getStorageSync('viewList')
    viewList = [
      {
        type: 'image',
        width: '100%',
        height: '300rpx',
        marginTop: '',
        marginBottom: '',
        src: 'https://cdn.uviewui.com/uview/example/fade.jpg',
        position: 0,
      },
      {
        type: 'image',
        width: '100%',
        height: '300rpx',
        marginTop: '',
        marginBottom: '',
        src: 'http://127.0.0.1:54414/5f11295729666ccee93aec034b7e1bc9.jpeg',
        position: 1,
      },
      { type: 'textarea', text: '心朝大海，春暖花开', position: 2, index: '2' },
    ]
    // #endif

    if (viewList) {
      // #ifdef H5
      this.updateViewList(JSON.parse(viewList))
      // #endif

      // #ifndef H5
      this.updateViewList(viewList)
      // #endif
    }
  },
}
</script>

<style lang="scss" scoped>
.ac-mobile {
  min-height: 100%;

  &::-webkit-scrollbar {
    width: 6px !important;
    height: 8px !important;
    display: block !important;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px !important;
    background-color: #e2e2e287 !important;
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #ccc !important;
  }

  .component-box {
    cursor: default;
    position: relative;

    .cb-delete {
      display: none;
    }

    &:hover {
      &::before {
        z-index: 6;
        content: '';
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
        top: 0;
        right: 0;
        z-index: 6;
        padding: 10upx;
        display: block;
        cursor: pointer;
        position: absolute;
        background-color: rgba(0, 0, 0, 0.2);
      }
    }
  }

  textarea {
    background-color: pink;
  }
}
</style>
