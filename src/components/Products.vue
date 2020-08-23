<template>
  <section>
    <div class="d-flex justify-content-between align-items-center py-3">
      <h1>Products</h1>
      <div class="btn btn-dark mr-1" @click.prevent="toAddPage"><span class="far fa-plus-circle pr-2"></span>Product</div>
    </div>
    <div class="overflow-auto">
      <table class="table">
        <thead class="table-dark">
          <tr>
            <th scope="col">ID</th>
            <th colspan="2" scope="col" class="text-center">Product</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <th scope="row">{{ product.id }}</th>
            <td>
              <img :src="product.image_url" alt="">
            </td>
            <td>
              <tr class="badge bg-dark mb-2">{{ product.Category.name }}</tr>
              <tr class="mb-4">{{ product.name }}</tr>
              <tr class="align-items-left">
                <span class="fas fa-box-open text-dark mr-2"></span>{{ product.stock }}
                <span class="fas fa-tag ml-4 text-dark mr-2"></span>Rp {{ new Intl.NumberFormat('de-DE').format(product.price) }}
              </tr>
            </td>
            <td>
              <tr>
                <div class="btn-btm btn-block" @click.prevent="editProduct(product.id)">Edit</div>
              </tr>
              <tr>
                <div class="btn-btm btn-block" @click.prevent="deleted(product.id)">Delete</div>
              </tr>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Products',
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  methods: {
    toAddPage () {
      this.$router.push({ name: 'AddPage' })
    },
    editProduct (id) {
      this.$store.dispatch('editProduct', id)
    },
    deleted (id) {
      this.$store.dispatch('delete', id)
    }
  },
  created () {
    this.$store.dispatch('getProducts')
  }
}
</script>

<style scoped>
img {
  width: 120px;
}

.overflow-auto {
  height: 500px;
}
</style>
