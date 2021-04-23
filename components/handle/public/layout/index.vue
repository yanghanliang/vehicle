<template>
  <u-form class="handle-textarea" :model="form" ref="uForm" :label-width="180">
    <u-form-item label="内容">
      <textarea class="m-textarea" maxlength="100000000" v-model="form.config" placeholder="请开始你的表演" />
    </u-form-item>
  </u-form>
</template>

<script>
import mixin from '@/components/mobileView/mixin.js'
import { mapMutations, mapState } from 'vuex'

export default {
  mixins: [mixin],
  data() {
    return {
      form: {
				config: '',
			},
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(newVal) {
        this.form.config = JSON.stringify(newVal)
      },
    },
    form: {
      deep: true,
      handler: function (newVal) {
        this.updateView(JSON.parse(newVal.config))
      },
    },
  },
	methods: {
		...mapMutations([
			'updateView',
		]),
	},
}
</script>

<style lang="scss" scoped>
.layout {
}
</style>
