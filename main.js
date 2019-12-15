import Vue from 'vue'
import App from './App'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n);

const i18n = new VueI18n({
	//初始化,保证刷新页面也保留
	//locale: localStorage.getItem('locale') || 'zh-CN', 
	locale:'zh-CN', 
	messages: { 
		'zh-CN': require('./locales/zh-CN.js').lang,
		'en': require('./locales/en.js').lang
	}
})

Vue.prototype._i18n = i18n   

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	i18n,
    ...App
})
app.$mount()
