<template>
  <section>
    <Header></Header>
    <div class="row p-3 ml-2 mr-2">
      <Sidebar></Sidebar>
      <div class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
        <div class="d-flex justify-content-between align-items-center pt-3 pb-3">
          <h1>Edit Category<Form></Form></h1>
        </div>
        <div class="row">
          <div class="col-6">
            <form @submit.prevent="editedCategory">
              <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" v-model="name">
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
  name: 'EditCategoryPage',
  components: {
    Header, Sidebar
  },
  data () {
    return {
      name: ''
    }
  },
  methods: {
    editedCategory () {
      const payload = this.name
      this.$store.dispatch('editedCategory', payload)
    }
  },
  created () {
    this.name = this.$store.state.editCategory.name
  }

}
</script>

<style scoped>

</style>
