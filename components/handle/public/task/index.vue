<template>
    <u-form class="handle-task" :model="form" ref="uForm" :label-width="180">
        <u-form-item label="更换图片">
            <u-input v-model="form.name" />
            <u-button type="primary">选择文件</u-button>
        </u-form-item>
        <u-form-item label="">
            <u-upload ref="uUpload" :action="action" :auto-upload="true" ></u-upload>
        </u-form-item>
         <u-form-item label="图片白边">
            <u-radio-group v-model="radio">
                <u-radio v-for="(item, index) in radioList" :key="index" :name="item.name" :disabled="item.disabled">
                    {{ item.name }}
                </u-radio>
            </u-radio-group>
        </u-form-item>
        <u-form-item label="模块上间距"><u-input v-model="form.name" /></u-form-item>
        <u-form-item label="模块下间距"><u-input v-model="form.name" /></u-form-item>
    </u-form>
</template>

<script>
    export default {
        data() {
			return {
                action: 'http://www.example.com/upload',
				form: {
					name: '',
				},
				radioList: [
					{
						name: '不要白边',
						disabled: false
					},
					{
						name: '要白边',
						disabled: false
					}
				],
				radio: '',
			};
		},
        methods: {
            submit() {
                
            }
        },
    }
</script>

<style lang="scss" scoped>
    .handle-image {
        width: 800upx;
    }
</style>
