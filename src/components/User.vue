<template>
  <section>
    <div class="d-flex justify-content-between align-items-center pt-3 pb-3">
      <h1>Users</h1>
    </div>
    <div class="overflow-auto">
      <table class="table">
        <thead class="table-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Join Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <th scope="row">{{ user.id }}</th>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.createdAt.slice(0, 10) }} at {{ user.createdAt.slice(11, 19) }}</td>
            <td>
              <div class="btn btn-btm" href="" @click.prevent="deleteUser(user.id)"><span class="fas fa-trash"></span></div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Users',
  computed: {
    users () {
      return this.$store.state.users
    }
  },
  methods: {
    deleteUser (id) {
      this.$store.dispatch('deleteUser', id)
    }
  },
  created () {
    this.$store.dispatch('getUsers')
  }
}
</script>

<style scoped>
</style>
