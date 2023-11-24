<template>
  <div>
    <Navbar></Navbar>
    <div class="w-[10px] h-[1000px] bg-orange"></div>
    <Footer></Footer>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Index',
  data() {
    return {}
  },
  components: {
    Navbar,
    Footer,
  },
}
</script>
