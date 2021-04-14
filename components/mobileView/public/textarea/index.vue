<template>
  <textarea
    :style="style"
    class="m-textarea"
    :value="value.text"
    placeholder=""
  />
</template>

<script>
import mixin from '@/components/mobileView/mixin.js'

export default {
  name: 'mTextarea',
  mixins: [mixin],
  props: {
    // value 参数名不能随意更改
    value: {
      type: Object,
      default: function () {
        return {
          text: '会计师的福克斯打法胜多负少咖啡胶囊深刻的烦恼就开始的福克斯的房价开始的咖啡机山东济南福克斯的',
        }
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.m-textarea {
  width: 100%;
}
</style>
