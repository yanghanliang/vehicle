<template>
	<view class="handle">
    <handle-base />
    <component :is="handleDara.type | componentsName('handle')" :value="handleDara" key="gg"></component>
    <u-button style="margin-top: 10px" @click="submit">保存配置</u-button>
  </view>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import handleTask from '@/components/handle/public/task/index'
import handleBase from '@/components/handle/public/base/index'
import handleImage from '@/components/handle/public/image/index'
import handleTextarea from '@/components/handle/public/textarea/index'

export default {
  components: {
    handleBase,
    handleTask,
    handleImage,
    handleTextarea
  },
  computed: {
    ...mapState([
      'viewList',
      'currentData',
    ]),
  },
  filters: {
    componentsName (type, prefix) {
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
    },
  },
  data() {
    return {
      handleDara: {}, // 操作的数据
    }
  },
  methods: {
    submit () {
      localStorage.setItem('viewList', JSON.stringify(this.viewList))
    },
    updateImage() {
      this.form.src = 'http://127.0.0.1:54414/5f11295729666ccee93aec034b7e1bc9.jpeg'
    },
  },
}
</script>

<style lang="scss" scoped>
.handle {

}
</style>