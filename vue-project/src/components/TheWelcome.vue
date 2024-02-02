<!-- install vue language features && vscode snippets -->
<!-- consider tailwind-->
<template>
  <div>
    <h1 v-if="answer">correct</h1>
    <h2 v-else>incorrect</h2>
    <h2 v-for="animal in animals" :key="animal">{{ animal }}</h2>
  </div>
</template>

<script setup>
const answer = true;
const animals = ["Ape", "Baboon", "Elk"];
</script>
<style scoped></style>
