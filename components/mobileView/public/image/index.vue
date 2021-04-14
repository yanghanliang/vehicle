<template>
    <u-image
        :src="value.src"
        :width="value.width"
        :height="value.height"
        :style="style"
    >
        {{ style }}
    </u-image>
</template>

<script>
    import mixin from '@/components/mobileView/mixin.js'

    export default {
        name: 'mImage',
        mixins: [mixin],
        props: {
            // value 参数名不能随意更改
            value: {
                type: Object,
                default: function() {
                    return {
                        width: '100%',
                        height: '300rpx',
                        src: 'https://cdn.uviewui.com/uview/example/fade.jpg',
                    }
                }
            }
        },
        watch: {
            style (newVal) {
                console.log(newVal, 'style')
            }
        },
        data() {
            return {
            }
        },
        components: {
		},
    }
</script>

<style>
</style>
