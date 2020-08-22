<template>
  <div class="col-md-3 col-lg-2 bg-light sidebar">
    <div class="position-sticky p-3">
      <ul class="nav flex-column ml-2">
        <li class="nav-item mt-2 text-dark"><router-link :to="{ name: 'HomePage' }"><span class="fas fa-home mr-2"></span>Dashboard</router-link></li>
        <li class="nav-item mt-2"><router-link :to="{ name: 'ProductPage' }"><span class="fas fa-shopping-cart mr-2"></span>Products</router-link></li>
        <li class="nav-item mt-2"><router-link :to="{ name: 'CategoryPage' }"><span class="fas fa-list-alt mr-2"></span>Categories</router-link></li>
        <li class="nav-item mt-2"><router-link :to="{ name: 'UserPage' }"><span class="fas fa-users mr-2"></span>Users</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: #2a363b !important;
}

a:link {
  color: #2a363b !important;
}

a:visited {
  color: #2a363b !important;
}

a:hover {
  color: #ae6378 !important;
}
</style>
