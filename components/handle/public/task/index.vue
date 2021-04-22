<template>
  <u-form class="handle-task" :model="form" ref="uForm" :label-width="200">
    <u-form-item label="任务样式："> </u-form-item>
    <u-form-item label="更换图片">
      <u-input v-model="form.name" />
      <u-button type="primary">选择文件</u-button>
    </u-form-item>
    <u-form-item label="">
      <u-upload ref="uUpload" :action="action" :auto-upload="true"></u-upload>
    </u-form-item>
    <u-form-item label="模块间距(上右下左):"
      ><u-input v-model="form.margin"
    /></u-form-item>

    <u-form-item label="任务详情:"> </u-form-item>
    <u-form-item label="任务名称:"><u-input v-model="form.name" /></u-form-item>
    <u-form-item label="任务描述:"
      ><u-input v-model="form.describe"
    /></u-form-item>
    <u-form-item label="完成条件:">
      <u-input
        @click="conditionShow = !conditionShow"
        v-model="form.condition"
        type="select"
      />
      <u-picker
        @confirm="conditionSucess"
        mode="selector"
        v-model="conditionShow"
        :default-selector="defaultCondition"
        :range="conditionList"
        range-key="name"
      ></u-picker>
    </u-form-item>
    <u-form-item label="完成数量:"
      ><u-input v-model="form.completeNumber"
    /></u-form-item>
    <u-form-item label="数据统计周期:">
      <u-radio-group v-model="form.statistics" @change="statisticsChange">
        <u-radio
          v-for="(item, index) in statisticsList"
          :key="index"
          :name="item.name"
        >
          {{ item.name }}
        </u-radio>
      </u-radio-group>
    </u-form-item>
    <u-form-item label="奖励物品:">
      <u-input
        @click="rewardShow = !rewardShow"
        v-model="form.reward"
        type="select"
      />
      <u-picker
        @confirm="rewardSucess"
        mode="selector"
        v-model="rewardShow"
        :default-selector="defaultReward"
        :range="rewardList"
        range-key="name"
      ></u-picker>
    </u-form-item>
    <u-form-item label="奖励数量:"
      ><u-input v-model="form.rewardNumber"
    /></u-form-item>
    <u-form-item label="Go to finish 链接:"
      ><u-input v-model="form.link"
    /></u-form-item>
    <u-form-item label="奖励发放方式:">
      <u-radio-group v-model="form.mode" @change="modeChange">
        <u-radio
          v-for="(item, index) in modeList"
          :key="index"
          :name="item.name"
        >
          {{ item.name }}
        </u-radio>
      </u-radio-group>
    </u-form-item>
    <u-form-item label="联系客服链接:">
      <textarea
        v-model="form.contact"
        :disabled="form.modeId === 0"
        maxlength="300"
        placeholder="多个链接请以英文逗号,隔开"
      />
    </u-form-item>
    <u-form-item label="用户参与条件:">
      <u-input
        @click="userShow = !userShow"
        v-model="form.user"
        type="select"
      />
      <u-picker
        @confirm="userSucess"
        mode="selector"
        v-model="userShow"
        :default-selector="defaultUser"
        :range="userList"
        range-key="name"
      ></u-picker>
    </u-form-item>
    <u-form-item label="受限用户提示:"
      ><u-input v-model="form.tips"
    /></u-form-item>
  </u-form>
</template>

<script>
import mixin from '@/components/handle/mixin.js'

export default {
  mixins: [mixin],
  watch: {
    form: {
      deep: true,
      handler(newVal) {
        console.log(newVal, 'newVal')
      },
    },
  },
  computed: {
    contact() {},
  },
  data() {
    return {
      action: 'http://www.example.com/upload',
      userShow: false,
      rewardShow: false,
      defaultUser: [0],
      defaultReward: [0],
      conditionShow: false,
      defaultCondition: [0],
      form: {
        name: '',
        tips: '',
        link: '',
        mode: '系统自动发放',
        modeId: '',
        statistics: '',
        statisticsId: '',
        reward: '',
        completeNumber: '', // 完成数量
        currentNumber: '', // 当前数量
        contact: '',
        describe: '',
        condition: '',
        conditionId: '',
        user: '',
        userId: '',
        reward: '',
        rewardId: '',
        rewardNumber: '',
        isReceive: false, // 是否领取
      },
      statisticsList: [
        {
          value: 0,
          name: '自活动开始'
        },
        {
          value: 1,
          name: '包括历史数据'
        }
      ],
      userList: [
        {
          value: 0,
          name: '无限制',
        },
        {
          value: 1,
          name: '活动开始后注册的新用户',
        },
      ],
      conditionList: [
        {
          value: 0,
          name: '邀请下级用户人数达标',
        },
        {
          value: 1,
          name: '购买指定商品',
        },
        {
          value: 2,
          name: '领取收益次数',
        },
        {
          value: 3,
          name: '领取订单全部收益次数',
        },
        {
          value: 4,
          name: '充值次数',
        },
        {
          value: 5,
          name: '充值金额',
        },
        {
          value: 6,
          name: '团队充值金额',
        },
        {
          value: 7,
          name: '直属下级充值金额',
        },
        {
          value: 8,
          name: '登录APP天数',
        },
        {
          value: 9,
          name: '登录APP次数',
        },
      ],
      modeList: [
        {
          value: 0,
          name: '系统自动发放',
        },
        {
          value: 1,
          name: '客服手动发放',
        },
      ],
      rewardList: [
        {
          value: 0,
          name: '卢比'
        },
        {
          value: 1,
          name: '3天3%牛'
        },
        {
          value: 2,
          name: '5天4%牛'
        },
        {
          value: 3,
          name: '7天5%牛'
        },
        {
          value: 4,
          name: '14天6%牛'
        },
        {
          value: 5,
          name: '30天7%牛'
        },
        {
          value: 6,
          name: '60天8%牛'
        }
      ]
    }
  },
  methods: {
    userSucess([value]) {
      this.form.userId = value
      this.form.user = this.userList.find((item) => item.value === value).name
    },
    rewardSucess([value]) {
      this.form.rewardId = value
      this.form.reward = this.rewardList.find((item) => item.value === value).name
    },
    conditionSucess([value]) {
      this.form.conditionId = value
      this.form.condition = this.conditionList.find(
        (item) => item.value === value
      ).name
    },
    modeChange(name) {
      this.form.mode = name
      this.form.modeId = this.modeList.find((item) => item.name === name).value
    },
    statisticsChange(name) {
      this.form.statistics = name
      this.form.statisticsId = this.statisticsList.find((item) => item.name === name).value
    }
  },
}
</script>

<style lang="scss" scoped>
.handle-image {
  width: 800upx;
}
</style>
