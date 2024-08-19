<script setup lang="ts">
  import { RouterView } from "vue-router";

  import Header from "./components/Header/index.vue";
  import SectionSeparator from "./components/SectionSeparator/index.vue";
  import Footer from "./components/Footer/index.vue";
  import ImageHeader from "./components/ImageHeader/index.vue";
</script>

<template>
  <div class="max-w-screen-md mx-auto px-5 md:px-0">
    <ImageHeader />

    <Header />
    <SectionSeparator />

    <RouterView />

    <SectionSeparator />
    <Footer />
  </div>
</template>
