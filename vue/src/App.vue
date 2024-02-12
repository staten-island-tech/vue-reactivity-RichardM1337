<script setup>
import { RouterLink, RouterView } from "vue-router";
AOS.init();
</script>

<template>
  <header>
    <div
      class="displayBox"
      data-aos="zoom-in"
      data-aos-anchor-placement="top-center"
    >
      <h1 class="text-black">Animated element using zoom-in.</h1>
    </div>

    <!-- <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->
  </header>

  <RouterView />
</template>
