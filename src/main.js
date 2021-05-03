import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.mixin({
  methods: {
    newWindow: link => {
      window.open(link);
    }
  },
})

new Vue({
  render: h => h(App),
}).$mount('#app')
