<template>
    <u-image
        :src="url || item.src"
        :width="item.width"
        :height="item.height"
    >
    </u-image>
</template>

<script>
    import { mapGetters, mapState } from 'vuex'

    export default {
        name: 'mImage',
        props: {
            item: {
                type: Object,
                default: function() {
                    return {
                        width: '100%',
                        height: '300rpx',
                        src: 'https://cdn.uviewui.com/uview/example/fade.jpg'
                    }
                }
            }
        },
        computed: {
            ...mapState([
				'url',
			])
        },
        components: {
		},
        // data() {
        //     return {
        //         value: {
        //             src
        //         }
        //     }
        // }
    }
</script>

<style>
</style>
