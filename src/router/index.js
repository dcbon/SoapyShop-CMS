import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import ProductPage from '../views/ProductPage.vue'
import AddPage from '../views/AddPage.vue'
import CategoryPage from '../views/CategoryPage.vue'
import AddCategoryPage from '../views/AddCategoryPage.vue'
import EditProductPage from '../views/EditProduct.vue'
import EditCategoryPage from '../views/EditCategory.vue'
import UserPage from '../views/UserPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/home',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/products',
    name: 'ProductPage',
    component: ProductPage
  },
  {
    path: '/add-product',
    name: 'AddPage',
    component: AddPage
  },
  {
    path: '/categories',
    name: 'CategoryPage',
    component: CategoryPage
  },
  {
    path: '/edit-category',
    name: 'EditCategoryPage',
    component: EditCategoryPage
  },
  {
    path: '/add-category',
    name: 'AddCategoryPage',
    component: AddCategoryPage
  },
  {
    path: '/edit-product',
    name: 'EditProductPage',
    component: EditProductPage
  },
  {
    path: '/users',
    name: 'UserPage',
    component: UserPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
