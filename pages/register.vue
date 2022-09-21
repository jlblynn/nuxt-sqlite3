<template>
  <section class="container">
    <div>
      <h1>register.vue</h1>

      <router-link to="/">Home</router-link>
      <router-link to="/login">Login</router-link>

      <form id="register-form">
        <input type="text" v-model="username" placeholder="Username" required>
        <input type="password" v-model="password" placeholder="Password" required>
        <button v-on:click="register">Register</button>
      </form>

    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      username: '',
      password: '',
      error: null
    }
  },
  methods: {
    register () {
      axios.post('/register', {
        username: this.username,
        password: this.password
      })
      .then(response => {
        return console.log(response.data)
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
}
</script>

<style>

</style>
