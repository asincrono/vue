<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <li class="list-group-item" v-for="server in servers" :key="server.id" @click="selectServer(server)">
        Server {{ server.name }}: {{ server.id }}
      </li>
    </ul>
  </div>
</template>

<script>
import { serverService } from '../../main.js'

export default {
  data () {
    return {
      servers: []
    }
  },

  created () {
    console.log('Servers created')
    this.servers = serverService.getServers()
    console.log(this.servers)
  },
  methods: {
    selectServer (server) {
      console.log('selectServer')
      console.log(server)
      serverService.selectServer(server)
    }
  }
}
</script>
