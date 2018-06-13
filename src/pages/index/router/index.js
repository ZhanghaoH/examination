import Vue from 'vue'
import Router from 'vue-router'
import knowledgeTab from '../../knowledgeTab/knowledgeTab'
import examTab from '../../examTab/examTab'
import mineTab from '../../mineTab/mineTab'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/knowledge',
        name: 'knowledge',
        component: knowledgeTab
    }, {
        path: '/examination',
        name: 'examination',
        component: examTab
    }, {
        path: '/me',
        name: 'me',
        component: mineTab
    }]
})