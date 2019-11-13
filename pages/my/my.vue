<template>
	<view class="content">
		<text>{{ $t('my.Sentence') }}</text>

		<view class="nonelogin" @click="gologin">{{ $t('my.exit') }}</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	onLoad() {
		uni.setNavigationBarTitle({
			title: this.$i18n.messages[this.$i18n.locale].tabBar.me
		});
	},
	methods: {
		gologin() {
			uni.reLaunch({
				url: '../login/login'
			});
		}
	}
};
</script>

<style>
.content {
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 42upx;
	color: #eabb76;
	position: absolute;
	flex-direction: column;
}
.nonelogin {
	width: 540upx;
	height: 45px;
	line-height: 45px;
	text-align: center;
	font-size: 30upx;
	margin: 20px auto;
	background: #eabb76;
	color: #fff;
	border-radius: 10upx;
}
</style>
