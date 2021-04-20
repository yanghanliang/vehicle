<template>
  <u-form class="handle-image" :model="value" ref="uForm" :label-width="180">
    <u-form-item label="边距">
      <u-input v-model="value.padding" />
    </u-form-item>
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
// 它是独立的不用 mixin
import { mapMutations } from 'vuex'
import ATTRIBUTE from '@/components/mobileView/style.js'

export default {
  watch: {
    style(newVal) {
      this.updateBaseStyle(newVal)
    }
  },
  computed: {
    // 公共的方法
    style() {
      let temp = ''

      for (let key in this.value) {
        if (ATTRIBUTE.includes(key) && this.value[key]) {
          temp +=
            key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase() +
            ': ' +
            this.value[key] +
            '; '
        }
      }

      return temp
    },
  },
  created() {
    this.updateBaseStyle(this.style)
  },
  data() {
    return {
      action: 'http://www.example.com/upload',
      value: {
				type: 'base',
        padding: '10px',
				testPosition: '',
        backgroundColor: '#ddd',
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
