<template>
  <component :is="currentComponent" :value="value"></component>
</template>

<script>
    import mTask from '@/components/dynamic/public/task/index'
    import mImage from '@/components/dynamic/public/image/index'
    import mTextarea from '@/components/dynamic/public/textarea/index'

    export default {
        name: 'mDynamic',
        components: {
			mTask,
            mImage,
            mImage,
		},
        props: {
            value: {
                type: Object
            }
        },
        computed: {
            currentComponent() {
                console.log(this.value.type, 'this.value')
                return this.value.type
            }
        },
        methods: {
            init() {
                setTimeout(() => {
                    this.value.type = 'mImage'
                }, 5000)
            }
        },
    }
</script>

<style>
</style>
