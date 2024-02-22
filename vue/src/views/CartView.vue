<template>
  <main>
    <header></header>
    <ShoppingCart v-for="cartListing in vinylInfo" :cartListing="cartListing" />
    <!--     <div v-for="cartListing in vinylInfo">
      <div v-if="cartListing.inCart === true"></div>
    </div> -->
  </main>
</template>

<script setup>
import ShoppingCart from "@/components/ShoppingCart.vue";
import { vinylInfo } from "../listOfItems.js";
import { ref } from "vue";
const totalCost = ref([]);
</script>

<style scoped></style>
