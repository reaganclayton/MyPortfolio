import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.mixin({
  methods: {
    newWindow: link => {
      window.open(link);
    }
  },
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
