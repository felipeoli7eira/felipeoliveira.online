<template>
    <SectionStructure title="Trabalhos">
        <div class="grid md:grid-cols-3 gap-3">
            <div v-for="(project, index) in projects" :key="index" class="p-3 rounded-md card-project shadow-sm">
                <h1 class="font-semibold text-2xl">{{ project.title }}</h1>
                <p class="text-sm text-gray-500">{{ project.desc }}</p>
                <nav class="mt-4">
                    <a
                        :href="project.link"
                        target="_blank"
                        class="wave-link cursor-pointer no-underline font-semibold">{{ project.textLink }}
                    </a>
                </nav>
            </div>
        </div>
    </SectionStructure>
</template>

<script lang="ts" setup>
    import { ref } from "vue";

    import SectionStructure from "./../../components/SectionStructure/index.vue";

    type ProjectData = {
        title: string;
        desc: string;
        link: string;
        textLink: string;
    }

    const projectsDatabase: ProjectData[] = [
        {
            title: "GreenColors",
            desc: "Landing page para a Startup GreenColors.",
            link: "https://greencolors.com.br",
            textLink: "greencolors.com.br"
        },
    ]

    const projects = ref<ProjectData[]>(projectsDatabase)
</script>

<style lang="scss" scoped>
    .card-project {
        background-color: #21272f;
    }

    html[data-theme=light] {
        .card-project {
            background-color: #f4f4f5;
        }
    }
</style>
