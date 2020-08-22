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
            <th scope="col">Email</th>
            <th scope="col">Join Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>john@mail.com</td>
            <td>08-08-20</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Users'
}
</script>

<style scoped>
</style>
