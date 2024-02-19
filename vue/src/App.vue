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
      class="cartPic fixed w-max top-0 right-10 flex justify-center text-center bottom-20px m-0 bg-gray-600"
    >
      <img
        class="w-25 h-25"
        src="https://c0.klipartz.com/pngpicture/78/154/gratis-png-hombre-sonriente-empujando-carrito-de-supermercado-lleno-de-alimentos-carrito-de-compras-stock-photography-supermercado-supermercado-thumbnail.png"
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
