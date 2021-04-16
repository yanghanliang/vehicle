<template>
  <u-form class="handle-image" :model="form" ref="uForm" :label-width="180">
    <u-form-item label="设置背景颜色">
      <u-input v-model="form.marginTop" />
    </u-form-item>
    <u-form-item label="设置背景图">
      <u-input v-model="form.src" />
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
import mixin from '@/components/handle/mixin.js'

export default {
  mixins: [mixin],
  data() {
    return {
      action: 'http://www.example.com/upload',
      form: {
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
    submit() {
      // this.form.src = this.$refs.uUpload.lists[0].url
      this.form.src =
        'http://127.0.0.1:54414/5f11295729666ccee93aec034b7e1bc9.jpeg'
      // this.updateView({ src: this.form.src })
    },
  },
}
</script>

<style lang="scss" scoped>
.handle-image {
  width: 800upx;
}
</style>
