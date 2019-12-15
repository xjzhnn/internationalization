<script>
	export default {
		onLaunch: function() {
			const locale=uni.getStorageSync('locale') || 'zh-CN';
			this._i18n.locale = locale;
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
