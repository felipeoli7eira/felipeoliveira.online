<template>
    <div id="index">
        <SectionStructure title="Apresentação">
            <p>Programador full stack desde 2019, buscando as melhores práticas de codificação, padrões, tecnologias e arquiteturas de sistemas para não simplesmente ter um conhecimento generalista e conseguir entregar tarefas, mas ser um profissional que entrega excelentes experiências de ponta-a-ponta.</p>
            <SocialLinks />
        </SectionStructure>

        <Divider />

        <SectionStructure title="Experiências">
            <p>Experiencias profissionais</p>
        </SectionStructure>

        <Divider />

        <SectionStructure title="Educação">
            <p>Formação, cursos e etc...</p>
        </SectionStructure>
    </div>
</template>

<script lang="ts" setup>
    import Divider from './../components/Divider/index.vue'
    import SectionStructure from './../components/SectionStructure/index.vue'
    import SocialLinks from './../components/SocialLinks/index.vue'
</script>
