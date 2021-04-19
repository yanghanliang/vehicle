<template>
  <text :style="style">{{ value.text }}</text>
</template>

<script>
import mixin from '@/components/mobileView/mixin.js'

export default {
  mixins: [mixin],
}
</script>

<style lang="scss" scoped>
.test {
  
}
</style>
