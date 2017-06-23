<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>
        <form action="" @submit.prevent="submit">
          <div class="form-group">
            <label for="username">Username</label>
            <input class="form-control" type="text" v-model="userData.name" id="username" name="username">
          </div>
          <div class="form-group">
            <label for="useremail">Email</label>
            <input class="form-control" type="email" v-model="userData.email" id="useremail" name="useremail">
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <ul class="list-group">
            <li class="list-group-item" v-for="data in retrievedData" :key="data.id">
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      url: 'https://vue-resource-test-6a198.firebaseio.com/data.json',
      userData: {
        name: '',
        email: ''
      },
      retrievedData: []
    }
  },
  methods: {
    submit () {
      this.$http.post(this.url, this.userData)
        .then(response => console.log(response))
        .catch(error => console.error(error))
    },
    getData () {
      this.$http.get(this.url)
        .then(response => response.json())
        .then(jsonData => console.log(jsonData))
        .catch(error => console.error(error))
    }
  }
}
</script>

<style>

</style>
