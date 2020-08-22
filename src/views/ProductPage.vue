<template>
  <div>
    <Header></Header>
    <div class="row p-3 ml-2 mr-2">
      <Sidebar></Sidebar>
      <div class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
        <Products></Products>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import Products from '@/components/Products.vue'

export default {
  name: 'ProductPage',
  components: {
    Header, Sidebar, Products
  }
}
</script>

<style>

</style>
