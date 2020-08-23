<template>
  <section>
    <div class="d-flex justify-content-between align-items-center pt-3 pb-3">
      <h1>Add Category<Form></Form></h1>
    </div>
    <div class="row">
      <div class="col-6">
        <form @submit.prevent="addCategory">
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" id="name" v-model="name">
          </div>
          <button type="submit" class="btn btn-dark">Submit</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CategoryForm',
  data () {
    return {
      name: ''
    }
  },
  methods: {
    addCategory () {
      const payload = this.name
      this.$store.dispatch('addCategory', payload)
    }
  }

}
</script>

<style scoped>

</style>
