<template>
  <section>
    <div class="d-flex justify-content-between align-items-center py-3">
      <h1>Dashboard</h1>
      <div class="btn-group dropleft">
        <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
          Category
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li v-for="category in categories" :key="category.id" class="dropdown-item" href="#" @click.prevent="filter(category.name)">{{ category.name }}</li>
        </ul>
      </div>
    </div>
    <div class="overflow-auto" v-if="filtered">
      <div class="row">
        <div class="col-3" v-for="product in filtered" :key="product.id">
          <div class="card">
            <div class="card-header">
              <img :src="product.image_url" class="mb-1 img-fluid" alt="...">
            </div>
            <div class="card-body">
              <h5 class="card-title text-dark">{{ product.name }}</h5>
              <p class="card-text text-dark">
                <span class="fas fa-box-open text-dark mr-2"></span>{{ product.stock }}
                <span class="fas fa-tag ml-4 text-dark mr-2"></span>Rp {{ new Intl.NumberFormat('de-DE').format(product.price) }} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="overflow-auto">
      <div class="row">
        <div class="col-3" v-for="product in products" :key="product.id">
          <div class="card">
            <div class="card-header">
              <img :src="product.image_url" class="mb-1 img-fluid" alt="...">
            </div>
            <div class="card-body">
              <h5 class="card-title text-dark">{{ product.name }}</h5>
              <p class="card-text text-dark">
                <span class="fas fa-box-open text-dark mr-2"></span>{{ product.stock }}
                <span class="fas fa-tag ml-4 text-dark mr-2"></span>Rp {{ new Intl.NumberFormat('de-DE').format(product.price) }} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Dashboard',
  data () {
    return {
      filtered: [],
      data: []
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    },
    categories () {
      return this.$store.state.categories
    }
  },
  methods: {
    setData () {
      const getData = this.$store.state.products
      getData.forEach(element => {
        this.data.push(element)
      })
    },
    filter (name) {
      this.data.forEach(element => {
        if (element.Category.name === name) {
          this.filtered.push(element)
        }
      })
    }
  },
  created () {
    this.$store.dispatch('getProducts')
    this.$store.dispatch('getCategories')
  }
}
</script>

<style scoped>
.card-header,
.card {
  border-style: none !important;
}

.card {
  overflow: auto;
  height: 400px;
}

</style>
