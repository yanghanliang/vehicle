<template>
  <view class="layout-box">
    <m-layout
      v-for="(item, index) in value.data"
      :value="value"
      :data="item"
      :key="index"
    />
  </view>
</template>

<script>
import mixin from '@/components/mobileView/mixin.js'
import mLayout from '@/components/mobileView/public/layout/index'

export default {
  name: 'layoutBox',
  mixins: [mixin],
  components: {
    mLayout,
  },
}
</script>

<style lang="scss" scoped>
.layout-box {

}
</style>
