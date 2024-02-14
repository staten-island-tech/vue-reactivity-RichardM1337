<template>
  <main>
    <h1 class="heading">VINYLS</h1>
    <div
      class="cardContainer flex items-center justify-evenly flex-wrap m-1-auto"
    >
      <VinylCard
        v-for="Listing in vinylInfo"
        :key="Listing.name"
        :Listing="Listing"
      />
    </div>
  </main>
</template>
<!-- @click="function(param), create function in script"-->
<script setup>
import { ref } from "vue";
import VinylCard from "@/components/VinylCard.vue";
const vinylInfo = [
  {
    name: "UTOPIA",
    img: "https://m.media-amazon.com/images/I/41ZO3L5IIXL._UF1000,1000_QL80_.jpg",
    price: "$27.99",
  },
  {
    name: "UTOPIA",
    img: "https://m.media-amazon.com/images/I/41ZO3L5IIXL._UF1000,1000_QL80_.jpg",
    price: "$27.99",
  },
  {
    name: "UTOPIA",
    img: "https://m.media-amazon.com/images/I/41ZO3L5IIXL._UF1000,1000_QL80_.jpg",
    price: "$27.99",
  },
  {
    name: "UTOPIA",
    img: "https://m.media-amazon.com/images/I/41ZO3L5IIXL._UF1000,1000_QL80_.jpg",
    price: "$27.99",
  },
  {
    name: "UTOPIA",
    img: "https://m.media-amazon.com/images/I/41ZO3L5IIXL._UF1000,1000_QL80_.jpg",
    price: "$27.99",
  },
  {
    name: "UTOPIA",
    img: "https://m.media-amazon.com/images/I/41ZO3L5IIXL._UF1000,1000_QL80_.jpg",
    price: "$27.99",
  },
  {
    name: "UTOPIA",
    img: "https://m.media-amazon.com/images/I/41ZO3L5IIXL._UF1000,1000_QL80_.jpg",
    price: "$27.99",
  },
  {
    name: "UTOPIA",
    img: "https://m.media-amazon.com/images/I/41ZO3L5IIXL._UF1000,1000_QL80_.jpg",
    price: "$27.99",
  },
  {
    name: "UTOPIA",
    img: "https://m.media-amazon.com/images/I/41ZO3L5IIXL._UF1000,1000_QL80_.jpg",
    price: "$27.99",
  },
];
const listRef = ref(1); // allows for constant updates
// VinylCard asks for just name and we supply name. VinylCard uses name "Listing" (iterable through array) to set all the values of Listing(this time object iterable)
</script>
