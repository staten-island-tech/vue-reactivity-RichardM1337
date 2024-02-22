<template>
  <main>
    <header>
      <div
        class="black-bg bg-black h-screen w-screen align-center flex justify-center"
      >
        <h1 class="heading text-white text-center m-auto text-4xl">VINYLS</h1>
      </div>
    </header>
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
import { vinylInfo } from "../listOfItems.js";
// const listRef = ref(1); // allows for constant updates
// VinylCard asks for just name and we supply name. VinylCard uses name "Listing" (iterable through array) to set all the values of Listing(this time object iterable)
</script>
