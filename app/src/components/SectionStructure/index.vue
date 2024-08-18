<template>
    <section id="section-structure" class="p-7">
        <h2 class="text-3xl font-bold mb-3 text-orange-responsive-theme">{{ props.title }}</h2>
        <slot></slot>
    </section>
</template>

<script lang="ts" setup>
    type Props = {
        title: string;
    }

    const props = defineProps<Props>()
</script>

<style lang="scss" scoped>

</style>
