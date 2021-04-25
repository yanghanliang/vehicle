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
            'updateView',
        ]),
    },
    watch: {
		value: {
			immediate: true,
			handler (newVal) {
				this.form = { ...newVal }
			}
		},
        form: {
            deep: true,
            handler: function(newVal) {
                this.updateView({
                    ...newVal,
                })
            }
        }
    },
}
