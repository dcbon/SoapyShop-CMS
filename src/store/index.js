import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex)

// const baseURL = 'https://soapyshop.herokuapp.com'
const baseURL = 'https://localhost:3000'

export default new Vuex.Store({
  state: {
    categories: [],
    products: [],
    users: [],
    editCategory: {},
    editProduct: {}
  },
  mutations: {
    setCategories (state, data) {
      state.categories = data.categories
      // console.log(state.categories, '======state');
    },
    setProducts (state, data) {
      state.products = data.products
      // console.log(state.products, '===state');
    },
    setUsers (state, data) {
      state.users = data.users
    },
    setEditProduct (state, data) {
      state.editProduct = data
    },
    removeEditProduct (state) {
      state.editProduct = {}
    },
    setEditCategory (state, data) {
      state.editCategory = data
    },
    removeEditCategory (state) {
      state.editCategory = {}
    }
  },
  actions: {
    login (context, data) {
      axios({
        url: baseURL + '/users/login',
        method: 'POST',
        data: data
      })
        .then(({ data }) => {
          console.log(data)
          localStorage.setItem('access_token', data.access_token)
          router.push({ name: 'HomePage' })
          Vue.notify({
            group: 'foo',
            type: 'success',
            title: 'Signed in!',
            text: 'Welcome Back'
          })
        })
        .catch(err => {
          const errs = err.response.data.msg
          errs.forEach(element => {
            Vue.notify({
              group: 'foo',
              type: 'error',
              title: 'Error!',
              text: element
            })
          })
        })
    },
    logout () {
      localStorage.clear()
      router.push({ name: 'LoginPage' })
    },
    getUsers (context) {
      axios({
        url: baseURL + '/users',
        method: 'GET',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('setUsers', data)
        })
        .catch(err => {
          const errs = err.response.data.msg
          errs.forEach(element => {
            Vue.notify({
              group: 'foo',
              type: 'error',
              title: 'Error!',
              text: element
            })
          })
        })
    },
    getCategories (context) {
      axios({
        url: baseURL + '/categories',
        method: 'GET',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('setCategories', data)
        })
        .catch(err => {
          const errs = err.response.data.msg
          errs.forEach(element => {
            Vue.notify({
              group: 'foo',
              type: 'error',
              title: 'Error!',
              text: element
            })
          })
        })
    },
    getProducts (context) {
      axios({
        url: baseURL + '/products',
        method: 'GET',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('setProducts', data)
        })
        .catch(err => {
          const errs = err.response.data.msg
          errs.forEach(element => {
            Vue.notify({
              group: 'foo',
              type: 'error',
              title: 'Error!',
              text: element
            })
          })
        })
    },
    addProduct (context, data) {
      console.log(data, '====addProduct')
      axios({
        url: baseURL + '/products',
        method: 'POST',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          name: data.name,
          image_url: data.image_url,
          price: data.price,
          stock: data.stock,
          CategoryId: data.CategoryId
        }
      })
        .then(() => {
          router.push({ name: 'ProductPage' })
          Vue.notify({
            group: 'foo',
            type: 'success',
            title: 'Product Added!',
            text: 'Successfully add product'
          })
        })
        .catch(err => {
          console.log(err.response.data)
          const errs = err.response.data.msg
          errs.forEach(element => {
            Vue.notify({
              group: 'foo',
              type: 'error',
              title: 'Error!',
              text: element
            })
          })
        })
    },
    addCategory (context, data) {
      // console.log(data, '====addCategory');
      axios({
        url: baseURL + '/categories',
        method: 'POST',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          name: data
        }
      })
        .then(() => {
          router.push({ name: 'CategoryPage' })
          Vue.notify({
            group: 'foo',
            type: 'success',
            title: 'Category Added!',
            text: 'Successfully add category'
          })
        })
        .catch(err => {
          console.log(err.response.data)
          const errs = err.response.data.msg
          errs.forEach(element => {
            Vue.notify({
              group: 'foo',
              type: 'error',
              title: 'Error!',
              text: element
            })
          })
        })
    },
    editProduct (context, id) {
      this.state.products.forEach(element => {
        if (element.id === id) {
          context.commit('setEditProduct', element)
          router.push({ name: 'EditProductPage' })
        }
      })
    },
    editedProduct (context, data) {
      console.log(data, '=====edited')
      const id = this.state.editProduct.id
      axios({
        url: baseURL + '/products/' + id,
        method: 'PUT',
        headers: {
          access_token: localStorage.access_token
        },
        data: data
      })
        .then(() => {
          context.commit('removeEditProduct')
          router.push({ name: 'ProductPage' })
          Vue.notify({
            group: 'foo',
            type: 'success',
            title: 'Edited!',
            text: 'Successfully edit Product'
          })
        })
        .catch(err => {
          const errs = err.response.data.msg
          errs.forEach(element => {
            Vue.notify({
              group: 'foo',
              type: 'error',
              title: 'Error!',
              text: element
            })
          })
        })
    },
    editCategory (context, id) {
      this.state.categories.forEach(element => {
        if (element.id === id) {
          context.commit('setEditCategory', element)
          router.push({ name: 'EditCategoryPage' })
        }
      })
    },
    editedCategory (context, data) {
      const id = this.state.editCategory.id
      axios({
        url: baseURL + '/categories/' + id,
        method: 'PUT',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          name: data
        }
      })
        .then(() => {
          context.commit('removeEditCategory')
          router.push({ name: 'CategoryPage' })
          Vue.notify({
            group: 'foo',
            type: 'success',
            title: 'Edited!',
            text: 'Successfully edit category'
          })
        })
        .catch(err => {
          const errs = err.response.data.msg
          errs.forEach(element => {
            Vue.notify({
              group: 'foo',
              type: 'error',
              title: 'Error!',
              text: element
            })
          })
        })
    },
    delete (context, id) {
      axios({
        url: baseURL + '/products/' + id,
        method: 'DELETE',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(() => {
          router.push({ name: 'ProductPage' })
          Vue.notify({
            group: 'foo',
            type: 'success',
            title: 'Deleted!',
            text: 'Successfully delete product'
          })
        })
        .catch(err => {
          const errs = err.response.data.msg
          errs.forEach(element => {
            Vue.notify({
              group: 'foo',
              type: 'error',
              title: 'Error!',
              text: element
            })
          })
        })
    },
    deleteCategory (context, id) {
      axios({
        url: baseURL + '/categories/' + id,
        method: 'DELETE',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(() => {
          router.push({ name: 'CategoryPage' })
          Vue.notify({
            group: 'foo',
            type: 'success',
            title: 'Deleted!',
            text: 'Successfully delete category'
          })
        })
        .catch(err => {
          const errs = err.response.data.msg
          errs.forEach(element => {
            Vue.notify({
              group: 'foo',
              type: 'error',
              title: 'Error!',
              text: element
            })
          })
        })
    }
  },
  modules: {
  }
})
