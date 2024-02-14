<script setup>
import { RouterLink, RouterView, useRouter, useRoute } from "vue-router";
AOS.init();
function cartPage() {
  router.push("/cart");
}
</script>

<template>
  <header>
    <!-- <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->
  </header>

  <RouterView />
  <transition name="fade">
    <component :is="Component" />
  </transition>
  <button @click="cartPage">^^^</button>
</template>
