<template>
  <div v-if="cartListing.inCart === true" class="container">
    <img class="w-[50px] l-[50px]" :src="cartListing.img" />
    <h1>{{ cartListing.name }}</h1>
    <p>{{ cartListing.price }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  cartListing: Object,
});
</script>

<style scoped></style>
