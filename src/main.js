import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import LazyLoad from './components/lazyload.min'

Vue.use(VueResource)
window.LazyLoad = LazyLoad
/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
