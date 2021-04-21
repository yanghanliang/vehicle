<template>
  <view class="task" :style="style">
    <view class="task-title">{{ value.name }}</view>
    <textarea class="task-describe" :value="value.describe" placeholder="任务描述" />
    <view class="task-bottom">
      <view class="tb-left">
        <image src="" mode=""></image>
        <text>奖品数量</text>
      </view>
      <view class="tb-right">
        <text>0/{{ value.completeNumber }}</text>
        <u-button :type="type" shape="circle" @click="jump">Go to finish</u-button>
      </view>
    </view>
  </view>
</template>

<script>
import mixin from '@/components/mobileView/mixin.js'

export default {
  name: 'mTask',
  mixins: [mixin],
  methods: {
    jump () {
      uni.reLaunch({ url: this.value.contact })
      console.log(this.value.contact, 'this.value.href')
    }
  },
  computed: {
    type () {
      return 'success'
    }
  }
}
</script>

<style lang="scss" scoped>
.task {
  padding: 16upx;
  border-radius: 18upx;
	background-color: #fff;

  .task-title {
    font-size: 30upx;
    font-weight: bold;
  }

  textarea {
    height: 80upx;
		font-size: 24upx;
    color: #999;
  }

  .task-bottom {
    display: flex;
    justify-content: space-between;

    .tb-left {
      display: flex;
      align-items: center;

      image {
        width: 120upx;
        height: 120upx;
        margin-right: 20upx;
        border-radius: 20upx;
        background-color: #999;
      }
    }

    .tb-right {
			color: #999;
      text-align: center;
    }
  }
}
</style>
