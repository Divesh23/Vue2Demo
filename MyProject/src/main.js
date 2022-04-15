import Vue from 'vue'
import App from './App.vue'
import Form from './Form.vue'

export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})

new Vue({
  el:'#form',
  render: h => h(Form)
})
