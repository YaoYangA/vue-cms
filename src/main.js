// 入口文件
import Vue from 'vue'

import app from './App.vue'
    

import { Header } from 'mint-ui'


import 'mint-ui/lib/style.css'
// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

Vue.component(Header.name, Header)

var vm = new Vue({
    el: '#app',
    render: c => c(app)
})