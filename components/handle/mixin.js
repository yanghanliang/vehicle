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
	// computed: {
	// 	...mapState([
	// 		'currentData'
	// 	])
	// },
    methods: {
        ...mapMutations([
            'updateView',
        ]),
        // init(form) {
        //     this.form = form
		// 	console.log(form, 'form')
        // },
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