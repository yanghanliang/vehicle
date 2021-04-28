<template>
  <image
    mode=""
    :src="src"
    :style="style"
  />
</template>

<script>
import mixin from '@/components/mobileView/mixin.js'
import layoutMixin from '@/components/mobileView/public/layout/mixin.js'

export default {
  mixins: [mixin, layoutMixin],
  computed: {
    src () {
      return this.value.field ? this.data[this.value.field] : this.value.src
    }
  },
  watch: {
    data (newVal) {
      console.log(newVal, 'newVal-data')
    }
  },
  mounted () {
    console.log(this.data, 'data????')
  },
}
</script>

<style lang="scss" scoped>
.test {

}
</style>
