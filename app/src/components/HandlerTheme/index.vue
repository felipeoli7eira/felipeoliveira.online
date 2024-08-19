<template>
  <button type="button" @click="handleColorMode" class="btn btn-circle">
    <i v-if="currentColorMode === 'light'" class="pi pi-sun swap-on fill-current"></i>
    <i v-else class="pi pi-moon swap-off fill-current"></i>
  </button>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const currentColorMode = ref<"light" | "dark">("dark");

function reflectColorTheme() {
  localStorage.setItem("theme", currentColorMode.value);

  document.firstElementChild!.setAttribute(
    "data-theme",
    currentColorMode.value
  );
}

onMounted(() => {
  const localStorageValue = localStorage.theme;

  if (!localStorageValue) {
    localStorage.theme = currentColorMode.value;
  }

  currentColorMode.value = localStorageValue;

  reflectColorTheme();
});

function handleColorMode() {
  currentColorMode.value = currentColorMode.value === "dark" ? "light" : "dark";
  reflectColorTheme();
}
</script>
