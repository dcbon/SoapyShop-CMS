<template>
  <section>
    <Header></Header>
    <div class="row p-3 ml-2 mr-2">
      <Sidebar></Sidebar>
      <div class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
        <CategoryForm></CategoryForm>
      </div>
    </div>
  </section>
</template>

<script>
import Header from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import CategoryForm from '@/components/CategoryForm.vue'
export default {
  name: 'AddCategoryPage',
  components: {
    Header, Sidebar, CategoryForm
  }
}
</script>

<style>

</style>
