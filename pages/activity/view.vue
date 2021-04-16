<template>
  <view class="ac-mobile">
    <view
      v-for="(item, index) in viewList"
      :key="item.type + index"
      @click="showCurrentConfig(item, index)"
      class="component-box"
    >
      <view class="cb-delete" @click="deleteComponent(index)">删除</view>
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

export default {
  components: {
    viewTask,
    viewImage,
    viewTextarea,
  },
  computed: {
    ...mapState(['viewList']),
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
    const viewList = localStorage.getItem('viewList')
    console.log(viewList, 'viewList')
    if (viewList) {
      this.updateViewList(JSON.parse(viewList))
    }
  },
}
</script>

<style lang="scss" scoped>
.ac-mobile {
  width: 900upx;
  margin: 0 auto;
  overflow: auto;
  position: relative;
  height: 1000upx;
  border: 1upx solid #666;

  @media screen and (max-width: 600px) {
    width: auto;
  }

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

  textarea {
    background-color: pink;
  }
}
</style>
