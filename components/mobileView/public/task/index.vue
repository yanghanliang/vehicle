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
        <text>{{ value.currentNumber }}/{{ value.completeNumber }}</text>
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
      // 未完成
      if (this.value.currentNumber < this.value.completeNumber) {
        return uni.reLaunch({ url: this.value.link })
      }

      // 手动触发
      if (this.form.modeId === 1) {
        return uni.reLaunch({ url: this.value.contact })
      }
    }
  },
  computed: {
    type () {
      // 未完成
      if (this.value.currentNumber < this.value.completeNumber) {
        return 'primary'
      }

      // 未领取
      if (!this.value.isReceive) {
        return 'success'
      }

      // 已完成已领取
      return 'default'
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
