<template>
  <div id="index">
    <SectionStructure title="Apresentação">
      <p>Desenvolvedor full stack desde 2019, atuando em projetos do setor público e privado, especialista em entregar soluções completas de ponta a ponta e produtos que realmente agregam valor. Perfil autodidata e prático, sempre buscando o aprimoramento das habilidades enquanto entrega sistemas de alta qualidade que geram impacto positivo para o usuário final.</p>
      <SocialLinks />
    </SectionStructure>

    <SectionSeparator />

    <SectionStructure title="Experiências">
      <ExperienceCard v-for="(exp, index) in experiences.slice(0, 3)" :key="index"
        :company="exp.company"
        :locale="exp.locale"
        :ocupation="exp.ocupation"
        :dateRange="exp.dateRange"
        :desc="exp.desc"
        :link="exp.link"
      />

      <div v-if="seeMore">
        <ExperienceCard v-for="(exp, index) in experiences.slice(3)" :key="index"
          :company="exp.company"
          :locale="exp.locale"
          :ocupation="exp.ocupation"
          :dateRange="exp.dateRange"
          :desc="exp.desc"
          :link="exp.link"
        />
      </div>

      <div class="flex justify-center">
        <button @click="seeMore = !seeMore" class="btn btn-neutral rounded-full flex">
          <i v-if="!seeMore" class="pi pi-arrow-down"></i>
          <i v-else class="pi pi-arrow-up"></i>
        </button>
      </div>
    </SectionStructure>

    <SectionSeparator />

    <SectionStructure title="Educação">
      <div class="flex flex-col space-y-4">
        <div v-for="(edu, index) in education" :key="index">
          <p><b class="font-bold">{{ edu.institution }}</b>: {{ edu.course }}</p>
          <p class="badge badge-neutral">{{ edu.date }}</p>
        </div>
      </div>
    </SectionStructure>
  </div>
</template>

<script lang="ts" setup>
  import SectionSeparator from "./../components/SectionSeparator/index.vue";
  import SectionStructure from "./../components/SectionStructure/index.vue";
  import SocialLinks from "./../components/SocialLinks/index.vue";
  import ExperienceCard from "./../components/ExperienceCard/index.vue";

  import { ref } from "vue";

  import experiences from "./experiences";
  import education from "./education";

  const seeMore = ref<boolean>(false);
</script>
