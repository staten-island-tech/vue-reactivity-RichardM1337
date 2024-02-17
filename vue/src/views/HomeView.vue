<template>
  <main>
    <header>
      <div
        class="black-bg bg-black h-screen w-screen align-center flex justify-center"
      >
        <h1 class="heading text-white text-center m-auto text-4xl">VINYLS</h1>
      </div>
    </header>
    <div
      class="cardContainer flex items-center justify-evenly flex-wrap m-1-auto"
    >
      <VinylCard
        v-for="Listing in vinylInfo"
        :key="Listing.name"
        :Listing="Listing"
      />
    </div>
  </main>
</template>
<!-- @click="function(param), create function in script"-->
<script setup>
import { ref } from "vue";
import VinylCard from "@/components/VinylCard.vue";
const vinylInfo = [
  {
    name: "UTOPIA",
    artist: "Travis Scott",
    img: "https://m.media-amazon.com/images/I/41ZO3L5IIXL._UF1000,1000_QL80_.jpg",
    price: "$27.99",
    rare: false,
  },
  {
    name: "Dark Side of the Moon",
    artist: "Pink Floyd",
    img: "https://m.media-amazon.com/images/I/31+szRBlJyL._SY300_.jpg",
    price: "$28.97",
    rare: false,
  },
  {
    name: "Thriller",
    artist: "Michael Jackson",
    img: "https://m.media-amazon.com/images/I/51vnfQPXskL._SX300_SY300_QL70_FMwebp_.jpg",
    price: "$19.97",
    rare: false,
  },
  {
    name: "Abbey Road",
    artist: "The Beatles",
    img: "https://usastore.thebeatles.com/cdn/shop/products/abbey-road-1lp_b42fc887-7b22-4568-92cd-4298f40715f8.png?v=1661531925",
    price: "$26.50",
    rare: false,
  },
  {
    name: "Back in Black",
    artist: "AC:DC",
    img: "https://m.media-amazon.com/images/I/71s6glEqRyL._SX425_.jpg",
    price: "$25.98",
    rare: false,
  },
  {
    name: "The Wall",
    artist: "Pink Floyd",
    img: "https://m.media-amazon.com/images/I/41Etqd29z5L._SX425_.jpg",
    price: "$55.99",
    rare: true,
  },
  {
    name: "Rumours",
    artist: "Fleetwood Mac",
    img: "https://m.media-amazon.com/images/I/71HWqbh0BLL._SX425_.jpg",
    price: "$24.89",
    rare: false,
  },
  {
    name: "Led Zeppelin IV",
    artist: "Led Zeppelin",
    img: "https://m.media-amazon.com/images/I/619OnDt1yvL._SX300_SY300_QL70_FMwebp_.jpg",
    price: "$22.89",
    rare: false,
  },
  {
    name: "Pet Sounds",
    artist: "The Beach Boys",
    img: "https://m.media-amazon.com/images/I/41hjX6hfRpL._SX300_SY300_QL70_FMwebp_.jpg",
    price: "$29.96",
    rare: false,
  },
  {
    name: "A Night at the Opera",
    artist: "Queen",
    img: "https://m.media-amazon.com/images/I/41mfODvDFtL._SX300_SY300_QL70_FMwebp_.jpg",
    price: "$28.96",
    rare: false,
  },
  {
    name: "Graceland",
    artist: "Paul Simon",
    img: "https://m.media-amazon.com/images/I/71Posnz98jL._SX425_.jpg",
    price: "$24.99",
    rare: false,
  },
];
// const listRef = ref(1); // allows for constant updates
// VinylCard asks for just name and we supply name. VinylCard uses name "Listing" (iterable through array) to set all the values of Listing(this time object iterable)
</script>
