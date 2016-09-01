import Vue from 'vue'
import App from './App'
import List from './components/List'
import Keen from 'keen-ui'

Vue.use(Keen)

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App, List }
})
