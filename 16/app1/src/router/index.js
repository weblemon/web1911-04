import Vue from 'vue'
import VueRouter from 'vue-router'

// import Home from "../pages/Home"
// import Detail from "../pages/Detail"

Vue.use(VueRouter)

function getPage(name) {
  return () => import(`../pages/${name}`)
}

const routes = [
  {
    path: "/",
    component: getPage("Home")
  },
  {
    path: "/detail",
    component: getPage("Detail")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
