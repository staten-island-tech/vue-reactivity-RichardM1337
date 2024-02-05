<template>
  <div>
    <h2>{{ Destination.name }}</h2>
    <img :src="Destination.img" alt="" />
    <h3>{{ clicked }}</h3>
    <button @click="increment">Click Me</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  Destination: Object,
});

// clicker logic
const clicked = ref(0); //start variable at 0 and update constantly
function increment() {
  clicked.value++;
}
</script>

<style scoped>
/* scoped makes sure only elements here are referred */
img {
  width: 300px;
  height: 350px;
  object-fit: cover;
}
</style>
