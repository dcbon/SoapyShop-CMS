<template>
  <section>
    <div class="d-flex justify-content-between align-items-center pt-3 pb-3">
      <h1>Product Form</h1>
    </div>
    <div class="col-6 justify-content-center">
      <form @submit.prevent="addProduct">
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
  </section>
</template>

<script>
export default {
  name: 'ProductForm',
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
    addProduct () {
      const payload = {
        name: this.name,
        image_url: this.imgurl || 'https://cdn.eurekabookhouse.co.id/ebh/product/all/112815900-no-image-available-icon-flat-vector1.jpg',
        price: this.price,
        stock: this.stock,
        CategoryId: this.category
      }
      console.log(payload, '===data form')
      this.$store.dispatch('addProduct', payload)
    }
  },
  created () {
    this.$store.dispatch('getCategories')
    this.name = ''
    this.imgurl = ''
    this.price = 0
    this.stock = 0
    this.category = ''
  }
}
</script>

<style>

</style>
