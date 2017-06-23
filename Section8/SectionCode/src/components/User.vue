<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <p>Name is: {{ name }}</p>
    <button class="btn btn-primary" @click="changeName">Change my name</button>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail
          :name="name"
          :reset-fn="resetName"
          @name-changed="updateName"
          ></app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from './UserDetail.vue'
import UserEdit from './UserEdit.vue'

export default {
  data () {
    return {
      name: 'Manuel'
    }
  },
  methods: {
    changeName () {
      this.name = 'Asincrono'
    },
    updateName (event) {
      this.name = event
    },
    resetName () {
      this.name = 'no name'
    }
  },
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  }
}
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>
