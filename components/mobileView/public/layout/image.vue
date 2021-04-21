<template>
  <image :src="src" :style="style" mode="" />
</template>

<script>
import mixin from '@/components/mobileView/mixin.js'

export default {
  mixins: [mixin],
  props: ['data'],
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
  mounted() {
    console.log(this.data, 'data????')
  },
}
</script>

<style lang="scss" scoped>
.test {
  
}
</style>
