<template>
  <div>
    <Header></Header>
    <div class="row p-3 ml-2 mr-2">
      <Sidebar></Sidebar>
      <div class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
        <Dashboard></Dashboard>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import Dashboard from '@/components/Dashboard.vue'

export default {
  name: 'Home',
  components: {
    Header, Sidebar, Dashboard
  }
}
</script>

<style>

</style>
