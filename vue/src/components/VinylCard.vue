<template>
  <div
    id="#vinyl-template"
    class="VinylCard flex-row m-1 w-1/4 h-1/4"
    data-aos="fade-left"
    data-aos-anchor-placement="center-bottom"
  >
    <img class="w-2/4 l-2/4" :src="Listing.img" />
    <h1>{{ Listing.name }}</h1>
    <p>{{ Listing.artist }}</p>
    <p>{{ Listing.price }}</p>
    <p v-if="Listing.rare == true">Rare Item!</p>
    <p v-else></p>
    <button @click="Listing.inCart = !Listing.inCart">
      <div v-if="Listing.inCart == false">Add To Cart</div>
      <div v-else>Unadd</div>
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  Listing: Object,
});
const btnText = ref("add to cart");
// defineemits are for later
</script>

<style scoped></style>
<!-- data-aos="zoom-in-up"
    data-aos-anchor-placement="bottom-bottom"-->
