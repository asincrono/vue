<template>
  <div class="col-xs-12 col-sm-6">
    <p>Server Details are currently not updated</p>
    <ul v-if="server != null" class="list-group">
      <li v-for="(value, key) in server" :key="key" class="list-group-item">
        {{ key }}: {{ value }}.
      </li>
    </ul>
  </div>
</template>

<script>

import { serverService } from '../../main.js'

export default {
  data() {
    return {
      server: null
    }
  },

  created() {
    serverService.$on('serverSelected', (server) => {
      console.log('wtf!')
      this.server = server
    })
  },

  methods: {
    selectServer(id) {
      serverService.selectServer(id)
    }
  }
}
</script>
