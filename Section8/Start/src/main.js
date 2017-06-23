import Vue from 'vue'
import App from './App.vue'

export class Server {
  constructor (name, id) {
    this.name = name
    this.id = id
  }
}

const servers = [
  new Server('Uno', 0),
  new Server('Dos', 2)
]

export const serverService = new Vue({
  data () {
    return {
      servers: servers
    }
  },

  methods: {
    addServer (name, id) {
      this.servers.push(new Server(name, id))
      this.$emit('serversChanged', this.servers.slice())
    },
    getServers () {
      console.log('getServers')
      return this.servers.slice()
    },
    getServer (id) {
      if (this.servers.length > id) {
        return this.servers[id]
      }
      return null
    },
    selectServer (server) {
      console.log('serviceSever.selectServer')
      this.$emit('serverSelected', server)
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
