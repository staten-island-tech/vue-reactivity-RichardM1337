<template>
  <div>
    <img :src="Listing.img" />
    <h1>{{ Listing.name }}</h1>
    <p>{{ Listing.price }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  Listing: Object,
});
/* export default {
  setup() {
    return {};
  },
}; */
</script>

<style lang="scss" scoped></style>
