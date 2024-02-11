<template>
  <div class="VinylCard">
    <img class="w-40 l-50" :src="Listing.img" />
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
