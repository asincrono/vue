<template>
  <form action="" @submit.prevent="emit">
    <div class="form-group">
      <label for="firstname">First name</label>
      <input class="form-control" type="text" name="firstname" id="firstname" v-model="value.firstName">
    </div>
    <div class="form-group">
      <label for="lastname">Last name</label>
      <input type="text" class="form-control" name="lastname" id="lastname" v-model="value.lastName">
    </div>
  </form>
</template>

<script>
export default {
  props: ['value'],
  methods: {
    emit () {
      this.$emit('input', this.value)
    }
  }
}
</script>
