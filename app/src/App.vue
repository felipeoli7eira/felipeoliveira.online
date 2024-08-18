<script setup lang="ts">
  import { RouterView } from "vue-router";
  import Header from "./components/Header/index.vue";
  import Divider from "./components/Divider/index.vue";
  import Footer from "./components/Footer/index.vue";
</script>

<template>
  <div id="#app-component-root" class="max-w-screen-md mx-auto">
    <Header />
    <Divider />

    <RouterView />

    <Divider />
    <Footer />
  </div>
</template>
