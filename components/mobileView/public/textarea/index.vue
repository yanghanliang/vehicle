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
}
</script>

<style lang="scss" scoped>
.m-textarea {
    width: 100%;
}
</style>
