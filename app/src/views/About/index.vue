<template>
  <div id="about">
    <SectionStructure title="Visão profissional">
      <p class="mb-4 text-justify">
        Sou programador full stack desde 2019, atuando com as melhores práticas de
        codificação, padrões, tecnologias e arquiteturas de sistemas para não
        simplesmente ter um conhecimento generalista e conseguir entregar
        tarefas, mas ser um profissional que <strong>entrega excelentes experiências de ponta-a-ponta</strong>.
      </p>

      <p class="mb-4 text-justify">
        Não sou apaixonado por tecnologia, como você deve estar acostumado a ler em 10 de 10 perfils de profissionais de tecnologia,
        mas aprendi a gostar e adoro o que faço.
      </p>

      <p class="mb-4 text-justify">
        Possuo experiência construindo aplicações complexas com as tecnologias
        mais atuais do mercado como React, Vue, Angular, Laravel, Docker e etc,
        e tenho capacidade e expertise para aprender novas tecnologias,
        principalmente quando posso “aprender fazendo”.
      </p>

      <p class="text-justify">
        Flexível e adaptável, desempenho minhas atividades sempre com o máximo de
        cuidado com o que será entregue, pensando sempre a nível de time e
        usuário final, desde a nomeação de uma variável autodescritiva até a
        entrega concreta e refinada do produto final.
      </p>
    </SectionStructure>

    <SectionStructure title="Tecnologias">
      <p>
        Essas são as tecnologias que possuo experiências/familiariadade/domínio
        atualmente:
      </p>

      <div v-for="(item, index) in techs" :key="index" class="my-5">
        <h3 class="text-2xl">{{ item.category }}</h3>

        <div class="flex flex-wrap gap-1 mt-3">
            <p class="badge badge-ghost font-semibold" v-for="(value, valueIndex) in item.values" :key="valueIndex">{{ value }}</p>
        </div>
      </div>

      <p class="mb-4">
        Possuo vivência com SCRUM, tenho conhecimento no uso de plataformas como github, gitlab, bitbucket e azure.
        Tenho experiência e familiariadade com arquitetura de microsserviços, preparação de ambientes de desenvolvimento de novos projetos com Docker.
      </p>

      <p>Atualmente estou estudando C# com .NET</p>
    </SectionStructure>
  </div>
</template>

<script lang="ts" setup>
import SectionStructure from "./../../components/SectionStructure/index.vue";

type Techs = {
  category: string;
  values: string[];
};

const techs: Techs[] = [
  {
    category: "Linguagens de programação",
    values: ["PHP", "JavaScript", "TypeScript", "Python"],
  },
  {
    category: "Frameworks",
    values: ["React", "Vue", "Angular", "Astro", "Nuxt", "Next", "Laravel", "IONIC", "Bootstrap", "DaisyUI", "Tailwind"],
  },
  {
    category: "Bancos de dados",
    values: ["MySQL", "MariaDB", "MongoDB", "FireBase", "SQL Server"],
  },
  {
    category: "Outros",
    values: ["HTML", "CSS", "Git", "Docker / Docker Compose", "Sass", "Apache NiFi", "Kogito"],
  },
];
</script>

<style lang="scss" scoped>
</style>
