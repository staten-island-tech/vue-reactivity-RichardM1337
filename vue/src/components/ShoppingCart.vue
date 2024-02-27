<template>
  <div
    class="box-border rounded border-2 border-black m-2"
    v-if="cartListing.inCart === true"
  >
    <img
      class="w-[300px] h-[300px] justify-center m-5 block"
      alt="album cover"
      :src="cartListing.img"
    />
    <h1 class="text-center">{{ cartListing.name }}</h1>
    <p class="text-center">{{ cartListing.price }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  cartListing: Object,
  finalPrice: Object,
});
</script>

<style scoped></style>
