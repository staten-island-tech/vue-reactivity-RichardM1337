<template>
  <div class="VinylCard">
    <img :src="Listing.img" />
    <h1>{{ Listing.name }}</h1>
    <p>{{ Listing.price }}</p>
  </div>
</template>

<script setup>
const props = defineProps(["Listing"]);
</script>

<style scoped></style>
