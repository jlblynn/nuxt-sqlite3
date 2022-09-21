<template>
  <section class="container">
    <div>
      <h1>login.vue</h1>

      <router-link to="/">Home</router-link>
      <router-link to="/register">Register</router-link>

      <form id="login-form">
        <input type="text" v-model="username" placeholder="Username" required>
        <input type="password" v-model="password" placeholder="Password" required>
        <button v-on:click="login">Login</button>
      </form>

    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
      username: '',
      password: '',
      error: null
    }
  },
  methods: {
    login () {
      axios.post('/login', {
        username: this.username,
        password: this.password
      })
      .then(response => {
        //console.log(response)
        window.alert(response);
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
