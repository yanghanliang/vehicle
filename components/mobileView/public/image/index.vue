<template>
<!-- :width="value.width"
    :height="value.height" -->
  <u-image
    :src="value.src"
    :style="style"
  >
  </u-image>
</template>

<script>
import mixin from '@/components/mobileView/mixin.js'

export default {
  name: 'mImage',
  mixins: [mixin],
}
</script>

<style></style>
