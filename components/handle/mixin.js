import { mapMutations, mapState } from 'vuex'

export default {
	props: {
		value: {
			type: Object,
			default: function() {
				return {}
			}
		}
	},
    methods: {
        ...mapMutations([
            'updateData',
        ]),
        init(form) {
            this.form = form
			console.log(form, 'form')
        }
    },
    watch: {
		value: {
			immediate: true,
			handler (newVal) {
				this.form = Object.assign(this.form, newVal)
				console.log(newVal, '更新handleData')
			}
		},
        form: {
            deep: true,
            handler: function(newVal) {
                this.updateData({
                    ...newVal,
                    position: this.currentData.position,
                })
                console.log(newVal, 'handle改变时更新view')
            }
        }
    },
}