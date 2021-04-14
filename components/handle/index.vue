<template>
  <view class="handle">
  	<view class="handle-title">编辑图片</view>
	<view class="">
		<component :is="type"></component>
	</view>
  </view>
</template>

<script>
	import mImage from './public/image/index'
	import mTextarea from './public/textarea/index'

	export default {
		components: {
			mImage,
			mTextarea,
		},
		// props: {
		// 	value: {
		// 		type: Object,
		// 		default: function() {
		// 			return {
		// 				type: ''
		// 			}
		// 		}
		// 	}
		// },
		data() {
			return {
				type: ''
			};
		},
		methods: {
			showCurrentConfig(data) {
				this.type = data.type
			}
		},
	};
</script>

<style lang="scss" scoped>
	.handle {
		
	}
</style>
