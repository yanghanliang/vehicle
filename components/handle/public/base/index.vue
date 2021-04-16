<template>
  <u-form class="handle-image" :model="value" ref="uForm" :label-width="180">
    <u-form-item label="设置背景颜色">
      <u-input v-model="value.backgroundColor" />
    </u-form-item>
    <u-form-item label="设置背景图">
      <u-input v-model="value.backgroundImage" />
      <u-button type="primary">选择文件</u-button>
    </u-form-item>
    <u-form-item label="">
      <u-upload ref="uUpload" :action="action" :auto-upload="true"></u-upload>
    </u-form-item>
    <u-form-item label="">
      <u-radio-group v-model="radio">
        <u-radio
          v-for="(item, index) in radioList"
          :key="index"
          :name="item.name"
          :disabled="item.disabled"
        >
          {{ item.name }}
        </u-radio>
      </u-radio-group>
    </u-form-item>
  </u-form>
</template>

<script>
import { mapMutations } from 'vuex'
import mixin from '@/components/mobileView/mixin.js'

export default {
  mixins: [mixin],
  watch: {
    style(newVal) {
      console.log(newVal, 'newVal')
      this.updateBaseStyle(newVal)
    }
  },
  data() {
    return {
      action: 'http://www.example.com/upload',
      value: {
				type: 'base',
				testPosition: '',
				backgroundColor: '',
				backgroundImage: 'url()',
      },
      radioList: [
        {
          name: '不要白边',
          disabled: false,
        },
        {
          name: '要白边',
          disabled: false,
        },
      ],
      radio: '',
    }
  },
  methods: {
    ...mapMutations([
      'updateBaseStyle'
    ]),
    submit() {
      // this.value.src = this.$refs.uUpload.lists[0].url
      this.value.src =
        'http://127.0.0.1:54414/5f11295729666ccee93aec034b7e1bc9.jpeg'
      // this.updateView({ src: this.value.src })
    },
  },
}
</script>

<style lang="scss" scoped>
.handle-image {
  width: 800upx;
}
</style>
