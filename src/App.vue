<template>
  <div id="app">
    <h3>All users</h3>
    <table id="users">
      <thead>
        <tr>
          <th>ID</th>
          <th>ROL</th>
          <th>CORREO</th>
          <th>COTRASEÑA</th>
        </tr>
      </thead>
      <tbody v-for="user in users" :key="user.idUsuario">
        <tr>
          <td>{{ user.idUsuario }}</td>
          <td>{{ user.rol }}</td>
          <td>{{ user.correo }}</td>
          <td>{{ user.contraseña }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: []
    }
  },
  mounted() {
    fetch('http://localhost:3000/orc/v1/users').then((response) => {
      return response.json()
    }).then((user) => {
      this.users.push(...user)
      console.log(this.users)
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  text-align: center;
}

table {
  width: 100%;
  box-shadow: 1px 1px 1px 1px rgb(182, 180, 180);
}

th {
  background-color: rgb(96, 138, 158);
  text-align: center;
}

#users tr:hover {
  background-color: #ddd;
}

tbody td {
  padding: 6px;
  border-top: 1px solid #ddd;
  border-collapse: separate;
}
</style>
