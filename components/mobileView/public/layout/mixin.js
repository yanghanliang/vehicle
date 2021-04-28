export default {
  props: {
    data: {
      type: Object,
    },
  },
  methods: {
    click () {
      const triggerType = this.value.triggerType
      if (triggerType && triggerType === 'click') {
        this.value.handler(this.data)
      }
    }
  },
  created () {
    console.log(this.data, 'data????')
  },
}
