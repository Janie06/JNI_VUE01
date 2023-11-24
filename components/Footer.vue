<template>
  <div class="bg-[#f8f8f8]">
    <div class="w-[1160px] mx-auto grid grid-cols-[180px_auto] gap-[86px]">
      <img
        src="~/assets/img/showeasy_footer.png"
        class="w-[180px] h-[127px]"
        alt=""
      />
      <div class="grid grid-cols-[120px_190px_160px_200px] gap-[50px]">
        <div class="px-[24px]">
          <div class="text-orange">ShowEasy</div>
          <div v-for="(item, key) in showeasyList" :key="key">
            {{ item.name }}
          </div>
        </div>
        <div>給參展商、觀展者</div>
        <div>服務條款</div>
        <div>聯絡我們</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Navbar',
  data() {
    return {
      showeasyList: [
        {
          name: '關於我們',
          url: '',
        },
        {
          name: '媒體報導',
          url: '',
        },
      ],
    }
  },
}
</script>
<style></style>
