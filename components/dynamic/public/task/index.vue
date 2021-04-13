<template>
  <view class="task">
  	<view class="task-title">
  		任务名称
  	</view>
    <textarea class="task-describe" value="" placeholder="任务描述" />
    <view class="task-bottom">
        <view class="tb-left">
            <image src="" mode=""></image>
            <text>奖品数量</text>
        </view>
        <view class="tb-right">
            <text>0/1</text>
            <u-button>Go to finish</u-button>
        </view>
    </view>
  </view>
</template>

<script>
export default {
	name: 'mTask'
}
</script>

<style lang="scss" scoped>
    .task {
		margin: 14upx;
		padding: 16upx;
		border-radius: 18upx;
		border: 1upx solid #ddd;

        .task-title {
			font-size: 30upx;
			font-weight: bold;
		}

		textarea {
			height: 80upx;
		}

		.task-bottom {
			display: flex;
			justify-content: space-between;

			.tb-left {
				display: flex;
				align-items: center;

				image {
					width: 150upx;
					height: 150upx;
					margin-right: 20upx;
					border-radius: 20upx;
					background-color: #666;
				}
			}

			.tb-right {
				text-align: center;
			}
		}
    }
</style>