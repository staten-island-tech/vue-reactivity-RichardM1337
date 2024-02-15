<script setup>
import { RouterLink, RouterView, useRouter, useRoute } from "vue-router";
import { reactive, computed } from "vue";
AOS.init();
const router = useRouter();
const route = useRoute();
function cartPage() {
  const currentRouteName = router.currentRoute.value.path;
  return currentRouteName == "/" ? router.push("/cart") : router.push("/");
}
// computed only changes on dependencies -- so less getter acccess
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
  <footer>
    <button
      class="flex justify-center text-center sticky left-1/2 bottom-20px m-0 translate-x-1/2 translate-y-1/2"
      @click="cartPage"
    >
      ^^^
    </button>
  </footer>
</template>
