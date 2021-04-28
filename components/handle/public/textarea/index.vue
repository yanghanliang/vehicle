<template>
  <u-form class="handle-textarea" :model="form" ref="uForm" :label-width="Global.style.labelWidth">
    <u-form-item label="布局样式" :border-bottom="false" :label-style="{ fontSize: '15px' }"></u-form-item>
    <u-form-item label="编辑文本内容">
      <u-input v-model="form.text" aria-placeholder="请输入字号，默认32" />
    </u-form-item>
    <u-form-item label="设置字体大小">
      <u-input v-model="form.fontSize" />
    </u-form-item>
    <u-form-item label="设置字体颜色">
      <u-input v-model="form.color" />
    </u-form-item>
    <u-form-item label="字体是否加粗">
      <u-radio-group v-model="form.fontWeight">
        <u-radio
          v-for="(item, index) in radioList"
          :key="index"
          :name="item.value"
        >
          {{ item.name }}
        </u-radio>
      </u-radio-group>
    </u-form-item>
    <u-form-item label="文字跳转链接">
      <u-input v-model="form.href" />
    </u-form-item>
    <u-form-item label="模块上间距">
      <u-input v-model="form.marginTop"
    /></u-form-item>
    <u-form-item label="模块下间距"
      ><u-input v-model="form.marginBottom"
    /></u-form-item>
  </u-form>
</template>

<script>
import mixin from '@/components/handle/mixin.js'

export default {
  mixins: [mixin],
  data () {
    return {
      form: {
        href: '',
        text: '',
        color: '',
        fontSize: '',
        marginTop: '',
        fontWeight: '',
        marginBottom: '',
      },
      radioList: [
        {
          name: '不加粗',
          value: 'normal',
        },
        {
          name: '加粗',
          value: 'bold',
        },
      ],
      radio: '',
    }
  },
}
</script>

<style lang="scss" scoped>
.handle-textarea {
  width: 800upx;
}
</style>
