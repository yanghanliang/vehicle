import ATTRIBUTE from '@/components/mobileView/style.js'

export default {
  props: {
    // value 参数名不能随意更改
    value: {
      type: Object,
      default: function () {
        return {
          width: '100%',
          height: '300rpx',
          src: 'https://cdn.uviewui.com/uview/example/fade.jpg',
        }
      },
    },
  },
  computed: {
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

      console.log(temp, 'style')
      return temp
    },
  },
  methods: {
    // init() {
    //   this.value = {}
    // },
  },
}
