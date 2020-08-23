<template>
  <section>
    <Header></Header>
    <div class="row p-3 ml-2 mr-2">
      <Sidebar></Sidebar>
      <div class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
        <div class="d-flex justify-content-between align-items-center pt-3 pb-3">
          <h1>Category <Form></Form></h1>
        </div>
        <div class="row">
          <div class="col-6">
            <form @submit.prevent="editedProduct">
              <div class="mb-3">
                <label for="stock" class="form-label">Category</label>
                <select v-model="category" class="form-select" aria-label="Default select example" id="category">
                  <option selected disabled >Choose category</option>
                  <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" v-model="name">
              </div>
              <div class="mb-3">
                <label for="image-url" class="form-label">Image Url</label>
                <input type="text" class="form-control" id="image-url" v-model="imgurl">
              </div>
              <div class="mb-3">
                <label for="price" class="form-label">Price</label>
                <input type="number" class="form-control" id="price" v-model="price">
              </div>
              <div class="mb-3">
                <label for="stock" class="form-label">Stock</label>
                <input type="number" class="form-control" id="stock" v-model="stock">
              </div>
              <button type="submit" class="btn btn-dark">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Header from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'
export default {
  name: 'EditProductPage',
  components: {
    Header, Sidebar
  },
  data () {
    return {
      name: '',
      imgurl: '',
      price: 0,
      stock: 0,
      category: ''
    }
  },
  computed: {
    categories () {
      return this.$store.state.categories
    }
  },
  methods: {
    editedProduct () {
      const payload = {
        name: this.name,
        image_url: this.imgurl,
        price: this.price,
        stock: this.stock,
        CategoryId: this.category
      }
      this.$store.dispatch('editedProduct', payload)
    }
  },
  created () {
    this.$store.dispatch('getCategories')
    this.name = this.$store.state.editProduct.name
    this.imgurl = this.$store.state.editProduct.image_url
    this.price = this.$store.state.editProduct.price
    this.stock = this.$store.state.editProduct.stock
    this.category = this.$store.state.editProduct.CategoryId
  }

}
</script>

<style scoped>

</style>
