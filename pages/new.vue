<template>
  <section class="container">
    <div>
      <h1>new.vue</h1>

      <button v-on:click="pleaseWork">Please Work</button>

      <div>{{message}}</div>

      <form id="register-form">
        <input type="text" v-model="username" placeholder="Username" required>
        <input type="password" v-model="password" placeholder="Password" required>
        <button v-on:click="register">Register</button>
      </form>

      <div>{{valid}}</div>

    </div>
  </section>
</template>

<script>

import * as newStuff from '../server/controllers/test'

export default {
  data () {
    return {
      message: '',
      username: '',
      password: '',
      valid: '' // Hello Vue.js!
    }
  },
  methods: {
    pleaseWork () {
      this.message = 'Hello ' + newStuff.newWork() + '!'
      console.log(this.message)
    },
    register () {
      let person = this.username
      let usernameCheck = newStuff.userLookup(person)

      if (usernameCheck !== "YAY") {
        this.valid = 'Username taken'
      } else {
        this.valid = 'Username free baby'
      } 

    }
  }
}
</script>


<style>

</style>
