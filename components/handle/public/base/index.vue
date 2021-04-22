<template>
  <u-form class="handle-image" :model="value" ref="uForm" :label-width="240">
    <u-form-item label="设置背景颜色:">
      <u-input v-model="value.backgroundColor" />
    </u-form-item>
    <u-form-item label="设置背景图:">
      <u-input v-model="value.backgroundImage" />
      <u-button type="primary">选择文件</u-button>
    </u-form-item>
    <u-form-item label="">
      <u-upload ref="uUpload" :action="action" :auto-upload="true"></u-upload>
    </u-form-item>
    <u-form-item label="">
      <u-radio-group v-model="value.backgroundType" @change="BTChange">
        <u-radio
          v-for="(item, index) in BTList"
          :key="index"
          :name="item.name"
          :disabled="item.disabled"
        >
          {{ item.name }}
        </u-radio>
      </u-radio-group>
    </u-form-item>
    <u-form-item v-if="STATUS.noScrolling === value.backgroundTypeId" label="设置背景图高度:">
      <u-input v-model="value.height" />
    </u-form-item>
  </u-form>
</template>

<script>
const STATUS = {
  roll: 0,
  noScrolling: 1,
}
// 它是独立的不用 mixin
import { mapMutations, mapState } from 'vuex'

export default {
  watch: {
    value: {
      deep: true,
      handler (newVal) {
        this.updateBaseStyle(newVal)
      }
    },
  },
  computed: {
    // 公共的方法
    ...mapState([
      'baseStyle',
    ]),
  },
  created() {
    let baseStyle = ''
    // #ifdef H5
    baseStyle = localStorage.getItem('baseStyle')
    console.log('H5')
    // #endif

    if (baseStyle) {
      baseStyle = JSON.parse(baseStyle)
      this.value = { ...baseStyle }
      // #ifdef H5
      this.updateBaseStyle(baseStyle)
      // #endif
    }
  },
  data() {
    return {
      STATUS,
      action: 'http://www.example.com/upload',
      value: {
				type: 'base',
        height: '100px',
				testPosition: '',
        backgroundType: '背景图随页面滚动',
        backgroundTypeId: STATUS.roll,
        backgroundColor: '#ddd',
				backgroundImage: 'url()',
      },
      BTList: [
        {
          value: STATUS.roll,
          name: '背景图随页面滚动',
        },
        {
          value: STATUS.noScrolling,
          name: '背景图固定',
        },
      ],
    }
  },
  methods: {
    ...mapMutations([
      'updateBaseStyle',
      'updateBaseBackgroundImage',
    ]),
    submit() {
      // this.value.src = this.$refs.uUpload.lists[0].url
      this.value.src =
        'http://127.0.0.1:54414/5f11295729666ccee93aec034b7e1bc9.jpeg'
      // this.updateView({ src: this.value.src })
    },
    BTChange(name) {
      this.value.backgroundType = name
      this.value.backgroundTypeId = this.BTList.find((item) => item.name === name).value
    }
  },
}
</script>

<style lang="scss" scoped>
.handle-image {
  width: 800upx;
}
</style>
