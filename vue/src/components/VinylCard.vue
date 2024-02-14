<template>
  <div class="VinylCard flex-row m-1 w-1/4 h-1/4">
    <img class="w-50 l-60" :src="Listing.img" />
    <h1>{{ Listing.name }}</h1>
    <p>{{ Listing.price }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  Listing: Object,
});
// defineemits are for later
</script>

<style scoped></style>
<!-- data-aos="zoom-in-up"
    data-aos-anchor-placement="bottom-bottom"-->
