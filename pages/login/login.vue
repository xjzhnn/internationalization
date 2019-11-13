<template>
	<view class="login-page">
		<view class="login-header">
			<image class="bac" src="../../static/timg.jpg" />
			<image class="logo" src="../../static/logo.png" />
			<view class="lanuage" @click="selectlang()">{{$t('login.language')}}>></view>
		</view>
		<view class="logo-input">
			<view class="input-box">
				<image class="input-icon" src="../../static/shiwu-shouji拷贝.png" />
				<input class="input" :placeholder="$t('login.inputUserName')"  placeholder-class="placeholder" />
			</view>
			<view class="input-box">
				<image class="input-icon" src="../../static/mima.png" />
				<input class="input" :password="passwordStatus" :placeholder="$t('login.password')" placeholder-class="placeholder" />
			    <image class="input-icon-rt" src="../../static/eye.png"  @click="changePassword"/>
			</view>
		</view>
		
	

		<view class="submit" @click="login">
			<text class="submit-text">{{$t('login.login')}}</text>
		</view>

		<view class="tip">
			<view >
				<text class="tip-text">{{$t('login.forget')}}</text>
			</view>
			<view >
				<text class="tip-text">{{$t('login.registration')}}</text>
			</view>
		</view>
		<view class="model" v-if="modelStatus">
			 <view class="selectlanguage">
				 <view @click="handove('zh-CN')">{{$t('login.simplified')}}</view>
				 <!-- <view @click="handove('zh-TW')">繁体中文</view> -->
				 <view  @click="handove('en')">{{$t('login.english')}}</view>
			 </view>
		</view>
       
	</view>
</template>

<script>
	export default {
		data() {
			return {
               passwordStatus:true,
			   modelStatus:false
			}
		},
		methods: {
			selectlang(){
				this.modelStatus=!this.modelStatus
			},
			handove(item){
				 this.$i18n.locale = item;
				  localStorage.setItem('locale', item);
				 this.modelStatus=!this.modelStatus;
			},
			
			login() {
				uni.switchTab({
					url: '../index/index'
				})	
			},
			changePassword(){
				this.passwordStatus=!this.passwordStatus
			}
		}
	}
</script>

<style>
	/* page {
		min-height: 567px;
		height: 100%;
		width: 100%;
	} */
	.model {
		width: 100%;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.6);
		position: fixed;
		left: 0;
		top: 0;
		z-index: 100;
	}
    .selectlanguage{
		width:393upx;
		height: 400upx;
		top:50%;
		left: 50%;
		transform: translate(-50%,-50%);
		position: absolute;
		background: #fff;
		z-index: 99;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding:50upx 0;
		border-radius: 20upx;
	}
	 .selectlanguage view{
		 height: 100upx;
		 line-height: 100upx;
		 color: #EABB76;
	 }
	.login-page {
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
    .login-header{
		position: relative;
		height: 252upx;
		width:100%;
	}
	.lanuage{
		position: absolute;
		right: 12px;
		top: 12px;
		color: #fff;
		font-size: 28upx;
	}
	.login-page .bac {
		height: 252upx;
		width: 750upx;
	}
	.login-page .logo {
		height: 144upx;
		width: 144upx;
		border-radius: 50%;
		left: 50%;
		transform: translateX(-50%);
		bottom: -77upx;
		position: absolute;
	}
    .logo-input{
		margin-top:180upx;
	}
	.login-page .input-box {
		height: 80upx;
		width: 543upx;
		font-size: 26rpx;
		border-radius: 10upx;
		margin-bottom: 30upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		border-bottom: 1px solid #eee;
	}

	.login-page .input-box .input-icon {
		height: 38upx;
		width: 28upx;
		margin-right: 20upx;
	}
    .login-page .input-box .input-icon-rt {
    	height: 42upx;
    	width: 42upx;
    }
	.login-page .input-box .input {
		height: 80upx;
		font-size: 26rpx;
		color: #333333;
		flex: 1;
	}

	.login-page .input-box .placeholder {
		font-size: 24rpx;
		color: #cccccc;
	}

	.login-page .submit {
		height: 80upx;
		width: 543upx;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 10upx;
		margin-top: 20upx;
		background-color: #e3bf00;
	}

	.login-page .submit .submit-text {
		color: #FFFFFF;
		font-size: 28rpx;
	}

	.login-page .tip {
		width: 533upx;
		display: flex;
		margin-top: 40upx;
		padding: 0 5upx;
		justify-content: space-between;
	}

	.login-page .tip .tip-text {
		color: #e3bf00;
		font-size: 28rpx;
	}
</style>
