<template>
  <u-collapse>
		<u-collapse-item title="基础样式" :open="true">
      <u-form class="handle-image" :model="form" ref="uForm" :label-width="Global.style.labelWidth">
        <u-form-item label="设置背景颜色:">
          <u-input @input="updateBaseStyle({ backgroundColor: form.backgroundColor })" v-model="form.backgroundColor" />
        </u-form-item>
        <u-form-item label="设置背景图:">
          <u-col span="9">
            <u-input v-model="form.backgroundImage" @input="updateBaseStyle({ backgroundImage: form.backgroundImage })" />
          </u-col>
          <u-col span="3">
            <u-button type="primary">选择文件</u-button>
          </u-col>
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
        <u-form-item label="">
          <u-radio-group v-model="form.backgroundType" @change="BTChange">
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
        <u-form-item v-if="STATUS.noScrolling === form.backgroundTypeId" label="设置背景图高度:">
          <u-input @input="updateBaseStyle({ height: form.height })" v-model="form.height" />
        </u-form-item>
      </u-form>
		</u-collapse-item>
	</u-collapse>
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
    baseStyle: {
      immediate: true,
      handler (newVal) {
        console.log(newVal, 'handle-base???')
        this.form = { ...newVal }
      }
    },
    src (newVal) {
      this.form.backgroundImage = `url(${newVal})`
      this.updateBaseStyle({ backgroundImage: this.form.backgroundImage })
      if (1 === 1)
      console.log(this.form.backgroundImage, 'this.form.backgroundImage')
    }
  },
  computed: {
    // 公共的方法
    ...mapState([
      'baseStyle',
    ]),
  },
  created() {
    // let baseStyle = ''
    // // #ifdef H5
    // baseStyle = localStorage.getItem('baseStyle')
    // console.log('H5')
    // // #endif

    // if (baseStyle) {
    //   baseStyle = JSON.parse(baseStyle)
    //   this.value = { ...baseStyle }
    //   // #ifdef H5
    //   this.updateBaseStyle(baseStyle)
    //   // #endif
    // }
  },
  data() {
    return {
      STATUS,
      action: 'http://47.98.182.149:3001/uploadFile',
      form: {
				// type: 'base',
        // height: '100px',
				// testPosition: '',
        // backgroundType: '背景图随页面滚动',
        // backgroundTypeId: STATUS.roll,
        // backgroundColor: '#ddd',
				// backgroundImage: 'url()',
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
      src: '',
    }
  },
  methods: {
    ...mapMutations([
      'updateBaseStyle',
    ]),
    submit() {
      // this.value.src = this.$refs.uUpload.lists[0].url
      this.value.src =
        'http://127.0.0.1:54414/5f11295729666ccee93aec034b7e1bc9.jpeg'
      // this.updateView({ src: this.value.src })
    },
    BTChange(name) {
      this.form.backgroundType = name
      this.form.backgroundTypeId = this.BTList.find((item) => item.name === name).value

      this.updateBaseStyle({
        backgroundType: this.form.backgroundType,
        backgroundTypeId: this.form.backgroundTypeId,
      })
    },
    onSuccess (data, index, lists, name) {
      console.log(data, index, lists, name, 'data, index, lists, name')
      this.src = 'http://47.98.182.149:3001/' + data.url
    }
  },
}
</script>

<style lang="scss" scoped>
.handle-image {
  width: 800upx;
}
</style>
