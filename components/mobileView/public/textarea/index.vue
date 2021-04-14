<template>
    <textarea :value="item.text" placeholder="" />
</template>

<script>
    export default {
        name: 'mTextarea',
        props: {
            item: {
                type: Object,
                default: function() {
                    return {
                        text: 'hsadgsadsgadsadsagdsgsadsadadgshdgsadgsadgsagdsagdsadsajdgsaj'
                    }
                }
            }
        },
        components: {
		},
    }
</script>

<style>
</style>
