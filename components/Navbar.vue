<template>
  <div class="fixed top-0 left-0 right-0 z-50">
    <div class="bg-white xl:w-[1160px] xl:mx-auto">
      <div class="flex justify-between my-[24px]">
        <img
          src="~/assets/img/showeasy.png"
          class="w-[188px] h-[25px]"
          alt=""
        />
        <div class="grid grid-cols-4 gap-[32px]">
          <div class="text-orange text-[16px]">展覽攻略</div>
          <div>繁體中文</div>
          <div>TWD</div>
          <img src="~/assets/img/user.png" alt="" class="w-[28px] h-[28px]" />
        </div>
      </div>
      <div class="grid grid-cols-[96px_96px] gap-[24px] my-[13px]">
        <div>台灣展館服務</div>
        <div>國際展品運輸</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Navbar',
  data() {
    return {}
  },
}
</script>
<style scoped></style>
