<template>
  <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
    <router-link to="/home"><a class="ls navbar-brand col-md-3 col-lg-2 mr-0 px-3 lb">SoapyShop</a></router-link>
    <ul class="navbar-nav px-3">
      <li class="nav-item text-light">
        <a class="nav-link" href="#" @click.prevent="logout">Sign out</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style scoped>
.ls {
  letter-spacing: 2px;
}

a {
  text-decoration: none !important;
  color:whitesmoke !important;
}

a:link {
  color:whitesmoke !important;
}

a:visited {
  color:whitesmoke !important;
}
</style>
