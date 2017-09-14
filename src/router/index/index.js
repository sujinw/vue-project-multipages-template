import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

/*
 * code split
 */
// const ComponentName = (resolve) => {
//   import('components/componentname').then((module) => {
//     resolve(module)
//   })
// }
import Hello from 'components/hello/hello'

export default new Router({
  routes: [
    {
      path: '/hello',
      component: Hello
    }
  ]
})
