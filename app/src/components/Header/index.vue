<template>
    <header id="header" class="flex flex-col space-y-4 md:flex-row items-center justify-between p-7">
        <h1 class="font-bold text-3xl">Felipe A. Oliveira</h1>
        <nav class="space-x-5">
            <router-link v-for="(item, index) in primaryMenuItems" :key="index" class="" :to="item.to">{{ item.label }}</router-link>
            <!-- <button @click="changeColorTheme" type="button">
                <i class="pi pi-moon"></i>
                <i class="pi pi-sun"></i>
            </button> -->
        </nav>
    </header>
</template>

<script lang="ts" setup>
    import { RouteLocationAsPathGeneric, RouteLocationAsRelativeGeneric } from "vue-router"

    type MenuItem = {
        label: string,
        to: string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric,
    }

    const primaryMenuItems: MenuItem[] = [
        {
            label: 'Início',
            to: {
                name: 'home'
            }
        },
        {
            label: 'Trabalhos',
            to: {
                name: 'jobs'
            }
        },
        {
            label: 'Sobre',
            to: {
                name: 'about'
            }
        }
    ]

    // function changeColorTheme() {
    //     const html = document.querySelector('[data-theme]')
    //     html!.setAttribute('data-theme', html!.getAttribute('data-theme') === 'dark' ? 'light' : 'dark')
    // }

</script>

<style lang="scss" scoped>
.router-link-exact-active {
    color: rgb(var(--color-accent));
    text-decoration-line: underline;
    text-decoration-style: wavy;
    text-decoration-thickness: 2px;
    text-underline-offset: 4px;
}
</style>
