<template>
  <main>
    <header></header>
    <ShoppingCart
      v-for="cartListing in vinylInfo"
      :cartListing="cartListing"
      :finalPrice="finalPrice"
    />
    <!--     <div v-for="cartListing in vinylInfo">
      <div v-if="cartListing.inCart === true"></div>
    </div> -->
  </main>
</template>

<script setup>
import ShoppingCart from "@/components/ShoppingCart.vue";
import { vinylInfo } from "../listOfItems.js";
import { ref } from "vue";
const finalPrice = ref(0);
</script>

<style scoped></style>
