<template>
  <div>
    <Navbar></Navbar>
    <Footer></Footer>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'dafault',
  data() {
    return {}
  },
  components: {
    Navbar,
    Footer,
  },
}
</script>
<style></style>
