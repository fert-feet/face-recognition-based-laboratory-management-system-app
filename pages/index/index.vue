<template>
	<view class="container">

		<u-button type="success" text="月落"></u-button>
	</view>
</template>

<script>
	import UButton from "../../uni_modules/uview-ui/components/u-button/u-button.vue";

  export default {
    components: {UButton},
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui'
			}
		},
		methods: {

		}
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>
