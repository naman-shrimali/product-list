import Vue from 'vue'
import VueRouter from 'vue-router'
import VuePapaParse from 'vue-papa-parse'
Vue.use(VuePapaParse)
import Home from '../views/Home.vue'
import Product_Card from '../views/Product_Card_Manager.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product_card/:id',
    name: 'Product_Card',
    component: Product_Card
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router


