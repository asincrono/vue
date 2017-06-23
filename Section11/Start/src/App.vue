<template>
  <div class="container-fluid">
    <form v-if="!submitted" action="" @submit.prevent="submit">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <!-- Exercise 1 -->
          <!-- Create a Signup Form where you retrieve the following Information -->
          <!-- Full Name (First Name + Last Name) -->
          <!-- Mail -->
          <!-- Password -->
          <!-- Store Data? Yes/No -->
          <full-name v-model="user.fullName"></full-name>
          <div class="form-group">
            <label for="mail">Mail</label>
            <input type="email" class="form-control" name="mail" id="mail" v-model="user.mail">
          </div>
          <div class="form-group">
            <label for="password">password</label>
            <input type="password" class="form-control" name="password" id="password" v-model="user.password">
          </div>
          <div class="form-group">
            <legend>Store data</legend>
            <div class="form-check">
              <label class="form-check-label">
                <input type="radio" class="form-check-input" name="storedata" id="storedata" value="true" v-model="user.storeData"> Yes
              </label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input type="radio" class="form-check-input" name="storedadta" id="storedata" value="false" v-model="user.storeData"> No
              </label>
            </div>
          </div>
  
          <!-- Exercise 2 -->
          <!-- Only display the Form if it has NOT been submitted -->
          <!-- Display the Data Summary ONCE the Form HAS been submitted -->
  
          <!-- Exercise 3 -->
          <!-- Edit the Example from above and create a custom "Full Name" Control -->
          <!-- which still holds the First Name and Last Name Input Field -->
          <button class="btn btn-primary">Submit</button>
        </div>
      </div>
    </form>
    <hr>
    <div class="row" v-if="submitted">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name: {{ user.fullName }}</p>
            <p>Mail: {{ user.mail }} </p>
            <p>Password: {{ user.password }} </p>
            <p>Store in Database?: {{ user.storeData }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FullName from './FullName.vue'
export default {
  data () {
    return {
      user: {
        fullName: {
          firstName: '',
          lastName: ''
        },
        mail: '',
        password: '',
        storeData: false
      },
      submitted: false
    }
  },
  methods: {
    test () {
      console.log('testing')
    },
    submit () {
      this.submitted = true
    }
  },
  components: {
    fullName: FullName
  }
}
</script>

<style>

</style>
