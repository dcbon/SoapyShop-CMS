<template>
  <div>
    <Header></Header>
    <div class="row p-3 ml-2 mr-2">
      <Sidebar></Sidebar>
      <div class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
        <Users></Users>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import Users from '@/components/User.vue'

export default {
  name: 'UserPage',
  components: {
    Header, Sidebar, Users
  }
}
</script>

<style>

</style>
