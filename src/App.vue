<template>
  <div id="app">
    <navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/navbar'
import { computed } from 'vue'
import { AppState } from './AppState'

export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: {
    Navbar
  }
}
</script>
<style lang="scss">
@import "./assets/_variables.scss";
@import "bootstrap";
@import "./assets/_overrides.scss";

p {
  font-family: 'Roboto', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Cormorant Garamond', serif;
}
</style>
