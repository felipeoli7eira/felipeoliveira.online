<template>
  <nav class="py-3 flex space-x-3">
    <a v-for="(item, index) in links" :key="index" :href="item.url" target="_blank">
      <i :class="item.icon"></i>
    </a>
  </nav>
</template>

<script lang="ts" setup>
const links = [
  {
    icon: "pi pi-github",
    url: "https://github.com/felipeoli7eira",
  },
  {
    icon: "pi pi-linkedin",
    url: "https://www.linkedin.com/in/felipeoli7eira",
  },
  {
    icon: "pi pi-instagram",
    url: "https://instagram.com/oli7eirafelipe",
  },
  {
    icon: "pi pi-whatsapp",
    url: "https://wa.me/5596984157994",
  }
];
</script>

<style lang="scss" scoped>
</style>
