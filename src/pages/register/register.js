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
    data() {
        return {
            action: "register"
        }
    },
    template: '<register :action="action"/>',
    created() {
        this.action = this.GetUrlParam('action')
    },
    methods: {
        GetUrlParam(paraName) {
            var url = document.location.toString();
            var arrObj = url.split("?");
            if (arrObj.length > 1) {
                var arrPara = arrObj[1].split("&");
                var arr;
                for (var i = 0; i < arrPara.length; i++) {
                    arr = arrPara[i].split("=");
                    if (arr != null && arr[0] == paraName) { return arr[1]; }
                }
                return "undefined";
            } else {
                return "undefined";
            }
        }
    }
})