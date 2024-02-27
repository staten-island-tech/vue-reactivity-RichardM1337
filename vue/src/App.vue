<script setup>
import { RouterLink, RouterView, useRouter, useRoute } from "vue-router";
import { reactive, computed } from "vue";
AOS.init();
const router = useRouter();
const route = useRoute();
function cartPage() {
  const currentRouteName = router.currentRoute.value.path;
  return currentRouteName == "/" ? router.push("cart") : router.push("/");
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
    <transition name="slide">
      <!-- mode="out-in" prevents button from working-->
      <component :is="Component"></component>
    </transition>
  </RouterView>
  <footer>
    <button
      @click="cartPage"
      class="cartPic hover:animate-pulse fixed w-auto top-[50px] right-0 flex justify-center text-center m-0"
    >
      <img
        class="w-1/2 h-1/2"
        src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png"
      />
    </button>
  </footer>
</template>
<style lang="css">
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s, transform 0.5s ease-in-out;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-30%);
}
</style>
