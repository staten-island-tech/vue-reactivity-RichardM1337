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
  <RouterView v-slot="{ Component }">
    <transition name="slide" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </RouterView>
</template>
<style lang="css">
.slide-enter-active,
.slide-leave-active {
  transition: opacity 1s, transform 1s;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-30%);
}
</style>
