<template>
  <u-button :style="style" @click="click" :plain="true" shape="circle" size="mini">{{ value.text }}</u-button>
</template>

<script>
import mixin from '@/components/mobileView/mixin.js'
import layoutMixin from '@/components/mobileView/public/layout/mixin.js'

export default {
  name: 'mBottom',
  mixins: [mixin, layoutMixin],
}
</script>

<style lang="scss" scoped>
.test {

}
</style>
