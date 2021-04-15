import { mapMutations, mapState } from 'vuex'

export default {
    // computed: {
    //     ...mapState([
    //         'defalutData'
    //     ]),
    // },
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
		// defalutData: {
		// 	deep: true,
		// 	handler: function (newVal) {
		// 		this.form = { ...newVal }
		// 		console.log('默认数据改变；额')
		// 	}
		// },
        form: {
            deep: true,
            handler: function(newVal) {
                console.log(newVal, 'newVal-text')
                this.updateData({
                    ...newVal,
                    position: this.currentData.position,
                })
            }
        }
    },
}