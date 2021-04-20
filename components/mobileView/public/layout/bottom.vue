<template>
  <u-button :style="style" :plain="true" shape="circle" size="mini">{{ value.text }}</u-button>
</template>

<script>
import mixin from '@/components/mobileView/mixin.js'

export default {
  name: 'mBottom',
  mixins: [mixin],
}
</script>

<style lang="scss" scoped>
.test {
  
}
</style>
