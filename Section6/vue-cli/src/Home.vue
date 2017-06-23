<template>
<div>
  <app-server-status v-for="server in 5" :key="server"></app-server-status>
</div>
</template>

<script>
import SeverStatus from './ServerStatus.vue'

export default {
  components: {
    'app-server-status': SeverStatus
  }

}
</script>
