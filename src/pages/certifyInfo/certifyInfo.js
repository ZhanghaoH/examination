// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import certify from './certifyInfo.vue'
import '../../base/app.less'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#certify',
    components: {
        certify
    },
    template: '<certify/>'
})