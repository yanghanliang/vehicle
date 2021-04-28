<template>
  <text :style="style" space="nbsp">{{ text }}</text>
</template>

<script>
import mixin from '@/components/mobileView/mixin.js'
import layoutMixin from '@/components/mobileView/public/layout/mixin.js'

export default {
  mixins: [mixin, layoutMixin],
  computed: {
    text () {
      return this.value.field ? this.data[this.value.field] : this.value.text
    }
  },
}
</script>

<style lang="scss" scoped>
.test {

}
</style>
