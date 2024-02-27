<template>
  <main>
    <header></header>
    <div class="flex items-center justify-evenly flex-wrap m-1- w-auto h-auto">
      <ShoppingCart
        v-for="cartListing in vinylInfo"
        :cartListing="cartListing"
      />
    </div>
    <!--     <div v-for="cartListing in vinylInfo">
      <div v-if="cartListing.inCart === true"></div>
    </div> -->
    <h1 class="text-4xl text-center">total cost: {{ totalCost }}</h1>
  </main>
</template>

<script setup>
import ShoppingCart from "@/components/ShoppingCart.vue";
import { vinylInfo } from "../listOfItems.js";
let totalCost = 0; // let necessary
for (let i = 0; i < Object.keys(vinylInfo).length; i++) {
  if (vinylInfo[i].inCart == true) {
    let noTyDollaSign = vinylInfo[i].price.slice(1); // takes out cash sign
    totalCost += Number(noTyDollaSign); // converts to number and adds
    totalCost = Math.round(totalCost * 100) / 100;
  }
}
</script>

<style scoped></style>
