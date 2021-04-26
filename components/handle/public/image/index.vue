<template>
  <u-form class="handle-image" :model="form" ref="uForm" :label-width="Global.style.labelWidth">
    <u-form-item label="图片样式" :border-bottom="false" :label-style="{ fontSize: '15px' }"></u-form-item>
    <u-form-item label="更换图片">
      <u-input v-model="form.src" />
      <u-button type="primary">选择文件</u-button>
    </u-form-item>
    <u-form-item label="">
      <u-upload
        ref="uUpload"
        :action="action"
        :show-progress="false"
        :auto-upload="true"
        @on-success="onSuccess"
      >
      </u-upload>
    </u-form-item>
    <u-form-item label="图片白边">
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
    <u-form-item label="模块外间距">
      <u-input v-model="form.margin" placeholder="上右下左，以空格隔开，例：10px 20px 30px 40px" />
    </u-form-item>
    <u-form-item label="模块内间距">
      <u-input v-model="form.margin" placeholder="上右下左，以空格隔开，例：10px 20px 30px 40px" />
    </u-form-item>
		<u-button style="margin-top: 10px" @click="submit">更新图片</u-button>
  </u-form>
</template>

<script>
import mixin from '@/components/handle/mixin.js'

export default {
  mixins: [mixin],
  data() {
    return {
      action: 'http://47.98.182.149:3001/uploadFile',
      form: {
        src: '',
        margin: '',
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
      this.form.src =
        'http://127.0.0.1:54414/5f11295729666ccee93aec034b7e1bc9.jpeg'
    },
    onSuccess(data, index, lists, name) {
      console.log(data, index, lists, name, 'data, index, lists, name')
    },
  },
}
</script>

<style lang="scss" scoped>
.handle-image {
  width: 800upx;
}
</style>
