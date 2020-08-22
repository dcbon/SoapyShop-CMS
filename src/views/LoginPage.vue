<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-4">
        <div class="card p-3 mt-4 shadow">
          <div class="card-header">
            <div class="card-img-top">
              <img src="../assets/login.svg" alt="">
            </div>
          </div>
          <div class="card-body">
            <div class="card-title text-center font-weight-bold h3 mb-3">Login</div>
            <form id="login-form" @submit.prevent="login">
              <div class="mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="login-email"
                  placeholder="Email address"
                  v-model="email"
                >
              </div>
              <div class="mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="login-password"
                  placeholder="Password"
                  v-model="password"
                >
              </div>
              <button type="submit" class="btn btn-dark btn-block mb-1 text-light">Sign In</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'LoginPage',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      const data = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', data)
    }
  }
}
</script>

<style scoped>
img {
  width: 280px;
}
</style>
