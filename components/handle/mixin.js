import { mapMutations, mapState } from 'vuex'

export default {
    computed: {
        ...mapState([
            'defalutData'
        ]),
    },
    methods: {
        ...mapMutations([
            'updateData',
        ]),
        init(form) {
            this.form = form
        }
    },
    watch: {
        defalutData(newVal) {
            this.form = { ...newVal }
        },
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