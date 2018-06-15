import Vue from 'vue'
import feedback from './feedback.vue'
import '../../base/app.less'
Vue.config.productionTip = false

new Vue({
    el: '#feedback',
    components: {
        feedback
    },
    template: '<feedback/>'
})