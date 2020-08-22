<template>
  <div>
    <Header></Header>
    <div class="row p-3 ml-2 mr-2">
      <Sidebar></Sidebar>
      <div class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
        <Products></Products>
        <Categories></Categories>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import Products from '@/components/Products.vue'
import Categories from '@/components/Category.vue'

export default {
  name: 'Home',
  components: {
    Header, Sidebar, Products, Categories
  }
}
</script>

<style>

</style>
