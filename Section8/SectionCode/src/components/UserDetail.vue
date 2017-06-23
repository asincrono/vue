<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{ reverse() }}</p>
    <button class="btn btn-warning" @click="resetName">Reset name</button>
    <button class="btn btn-warning" @click="resetFn()">Reset function name</button>
  </div>
</template>

<script>
export default {
  // Will recive props
  props: {
    name: {
      type: [String, Array],
      required: true
    },
    resetFn: Function
  },

  methods: {
    reverse () {
      return this.name.split('').reverse().join('')
    },
    resetName () {
      this.name = 'empty name'
      this.$emit('name-changed', this.name)
    }
  }

}
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
