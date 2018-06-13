// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import register from './register.vue'
import '../../base/app.less'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#register',
  components: {
    register
  },
  template: '<register/>'
})
