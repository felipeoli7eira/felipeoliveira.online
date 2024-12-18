<template>
  <nav class="py-3 flex space-x-3">
    <a v-for="(item, index) in links" :key="index" :href="item.url" :target="item.target">
      <i :class="item.icon"></i>
    </a>
  </nav>
</template>

<script lang="ts" setup>
  const links = [
    {
      icon: "pi pi-github",
      url: "https://github.com/felipeoli7eira",
      target: "_blank"
    },
    {
      icon: "pi pi-linkedin",
      url: "https://www.linkedin.com/in/felipeoli7eira",
      target: "_blank"
    },
    {
      icon: "pi pi-instagram",
      url: "https://instagram.com/oli7eirafelipe",
      target: "_blank"
    },
    {
      icon: "pi pi-whatsapp",
      url: "https://wa.me/5596984157994",
      target: "_blank"
    },
    {
      icon: "pi pi-envelope",
      url: "mailto:me.felipeoliveira@gmail.com",
      target: "_self"
    }
    ,
    {
      icon: "pi pi-file-pdf",
      url: "https://drive.google.com/file/d/1RRs-CjNwWcyNmXfOS2iB2Rw_ecFqR1tX/view?usp=sharing",
      target: "_blank"
    }
  ];
</script>

<style lang="scss" scoped>
</style>
