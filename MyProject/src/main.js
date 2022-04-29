import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';

export const bus = new Vue();

Vue.directive('rainbow',{
  bind(el,binding,vnode){
    el.style.color = "#" + Math.random().toString(16).slice(2,8);
  }
})

Vue.directive('theme',{
  bind(el,binding,vnode){
    if(binding.value == 'fat'){
      el.style.maxWidth = "2000px";
    }
    else if(binding.value == 'slim'){
      el.style.maxWidth = "1200px";
    }
    if(binding.arg == 'column'){
      el.style.padding = "20px";
      el.style.background = "lightBlue";
    }
  }
})

Vue.filter('to-uppercase',function(value){
  return value.toUpperCase();
})

Vue.filter('snippet',function(value){
  return value.slice(0,100);
})

Vue.use(VueResource);
new Vue({
  el: '#app',
  render: h => h(App)
})
