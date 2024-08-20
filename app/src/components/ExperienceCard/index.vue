<template>
    <div class="mb-5">
        <nav>
          <a :href="props.link" target="_blank" class="font-bold cursor-pointer underline decoration-dashed underline-offset-4">{{ props.company }}</a>, {{ props.locale }}: <span class="badge badge-ghost">{{ props.ocupation }}</span>
        </nav>

        <p class="mb-1 flex items-center space-x-3 mt-2">
          <i class="pi pi-calendar"></i> <span>{{ props.dateRange }}</span>
        </p>

        <p class="text-justify mt-2">{{ props.desc }}</p>
    </div>
</template>

<script setup lang="ts">
    type Props = {
        company: string;
        locale: string;
        ocupation: string;
        dateRange: string;
        desc: string;
        link: string;
    }
    const props = defineProps<Props>()
</script>

<style lang="scss" scoped>

</style>
