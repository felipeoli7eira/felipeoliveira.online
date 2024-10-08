<template>
    <header id="header" class="flex flex-col space-y-4 md:flex-row items-center justify-between p-7">
        <h1 class="font-bold text-3xl">Felipe A. Oliveira</h1>
        <nav class="space-x-5 flex items-center">
            <router-link v-for="(item, index) in menuItems" :key="index" class="" :to="item.to">{{ item.label }}</router-link>
            <HandlerTheme />
        </nav>
    </header>
</template>

<script lang="ts" setup>
    import { RouteLocationAsPathGeneric, RouteLocationAsRelativeGeneric } from "vue-router";
    import HandlerTheme from "./../HandlerTheme/index.vue";

    type MenuItem = {
        label: string,
        to: string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric,
    }

    const menuItems: MenuItem[] = [
        {
            label: 'Currículo',
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
