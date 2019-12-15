<template>
	<view class="content">{{ $t('index.Sentence') }}</view>
</template>

<script>
	export default {
		data() {
			return {};
		},
		onLoad() {
			const lang = this.$i18n.locale;
			uni.setTabBarItem({
				index: 0,
				text: this.$i18n.messages[lang].tabBar.home
			});
			uni.setTabBarItem({
				index: 1,
				text: this.$i18n.messages[lang].tabBar.me
			});
			uni.setNavigationBarTitle({
				title: this.$i18n.messages[lang].tabBar.home
			});
		},
		methods: {}
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
	}
</style>
