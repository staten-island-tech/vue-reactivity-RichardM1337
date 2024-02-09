<template>
  <main>
    <VinylCard
      v-for="item in vinylInfo"
      :key="item.name"
      :name="item.name"
      :img="item.img"
      :price="item.price"
    />
  </main>
</template>

<script setup>
import { ref } from "vue";
import VinylCard from "@/components/VinylCard.vue";
const vinylInfo = ref([
  {
    name: "UTOPIA",
    img: "https://m.media-amazon.com/images/I/41ZO3L5IIXL._UF1000,1000_QL80_.jpg",
    price: "$27.99",
  },
]);
</script>
