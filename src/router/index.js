import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import {
    login,
} from 'page/'


const routes = [
	{
		path     : '/',
		name     : '登录a',
		hidden   : true,
		meta:{requireAuth:false},
		component: login
	}
	
]



//suipingxian分支做出的改动

export default new Router({
	routes,
	strict: process.env.NODE_ENV !== 'production',
})
