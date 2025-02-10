<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<template>
  <Navbar/>
  <div class="content">
    <RouterView />
  </div>
  <Footer/>
</template>

<style>

</style>
