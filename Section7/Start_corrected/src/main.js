import Vue from 'vue'
import Home from './Home.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import ServerDetails from './components/ServerDetails.vue'
import ServerList from './components/ServerList.vue'

Vue.component('start-header', Header)
Vue.component('start-footer', Footer)
Vue.component('start-server-details', ServerDetails)
Vue.component('start-server-list', ServerList)

new Vue({
  el: '#app',
  render: h => h(Home)
})
