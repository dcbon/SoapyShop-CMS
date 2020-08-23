<template>
  <section>
    <div class="d-flex justify-content-between align-items-center pt-3 pb-3">
      <h1>Categories</h1>
      <div class="btn btn-dark" @click="toAddCategory"><span class="fas fa-folder-plus pr-2"></span>Add Category</div>
    </div>
    <div class="overflow-auto">
      <table class="table">
        <thead class="table-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="category in categories" :key="category.id">
            <th scope="row">{{ category.id }}</th>
            <td>{{ category.name }}</td>
            <td>
              <div class="btn btn-btm" href="" @click.prevent="editCategory(category.id)"><span class="fas fa-edit"></span></div>
              <div class="btn btn-btm" href="" @click.prevent="deleteCategory(category.id)"><span class="fas fa-trash"></span></div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Categories',
  computed: {
    categories () {
      return this.$store.state.categories
    }
  },
  methods: {
    toAddCategory () {
      this.$router.push({ name: 'AddCategoryPage' })
    },
    editCategory (id) {
      this.$store.dispatch('editCategory', id)
    },
    deleteCategory  (id) {
      this.$store.dispatch('deleteCategory', id)
      this.$store.dispatch('getCategories')
    }
  },
  created () {
    this.$store.dispatch('getCategories')
  }
}
</script>

<style>
</style>
