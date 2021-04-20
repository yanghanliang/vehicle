<template>
  <view :style="style">
    <template v-for="(item, index) in value.children">
      <layout-children
        v-if="item.children && item.type === 'view'"
        :key="item.type + index"
        :value="item"
      >
      </layout-children>
      <component
        v-else
        :is="item.type | componentsName('layout')"
        :key="item.type + index"
        :value="item"
      >
      </component>
    </template>
  </view>
</template>

<script>
import mixin from '@/components/mobileView/mixin.js'

// import layoutView from '@/components/mobileView/public/layout/view'
import layoutText from '@/components/mobileView/public/layout/text'
import layoutImage from '@/components/mobileView/public/layout/image'
import layoutBottom from '@/components/mobileView/public/layout/bottom'

export default {
  name: 'layoutChildren',
  mixins: [mixin],
  components: {
    // layoutView,
    layoutText,
    layoutImage,
    layoutBottom,
  },
  filters: {
    componentsName(type, prefix) {
      if (type) {
        return prefix + type.slice(0, 1).toLocaleUpperCase() + type.slice(1)
      }

      return 'handleImage'
    },
  },
}
</script>

<style lang="scss" scoped></style>
