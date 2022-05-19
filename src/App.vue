<script>
import { RouterView } from "vue-router";
import Navbar from './components/layout/Navbar.vue'

export default {
  components: {
    Navbar,
    RouterView,
  }
}

</script>

<template>
  <Navbar />

  <RouterView />
</template>

<style>
</style>
