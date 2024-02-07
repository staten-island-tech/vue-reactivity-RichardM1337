<script setup>
import VinylCard from "../components/VinylCard.vue";
const vinylInfo = [
  {
    name: "UTOPIA",
    img: "https://m.media-amazon.com/images/I/41ZO3L5IIXL._UF1000,1000_QL80_.jpg",
    price: "$27.99",
  },
];
</script>

<template>
  <main>
    <VinylCard v-for="Item in vinylInfo" :key="Item.name" :Item="Item" />
  </main>
</template>
