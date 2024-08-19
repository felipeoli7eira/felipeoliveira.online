<template>
  <div id="index">
    <SectionStructure title="Apresentação">
      <p>
        Programador full stack desde 2019, buscando as melhores práticas de
        codificação, padrões, tecnologias e arquiteturas de sistemas para não
        simplesmente ter um conhecimento generalista e conseguir entregar
        tarefas, mas ser um profissional que entrega excelentes experiências de
        ponta-a-ponta.
      </p>
      <SocialLinks />
    </SectionStructure>

    <SectionSeparator />

    <SectionStructure title="Experiências">
      <ExperienceCard
        company="Acaruiy"
        locale="Barueri SP"
        ocupation="Desenvolvedor full stack"
        dateRange="FEV 2024 - AGO 2024"
        desc="Fui responsável por projetar e implementar recursos tanto no front
          quanto no backend de aplicações feitas principalmente com React e
          Laravel (microsserviços) com a finalidade de melhorar processos do
          setor público. Desenvolvi um sistema chamado VAF, que ajudava no
          processo de fiscalização das empresas dos municípios e gerava
          indicadores e relatórios sobre o valor que elas agregam na economia."
        link="https://www.linkedin.com/company/acaruiy"
      />

      <ExperienceCard
        company="Hachi Tech"
        locale="São Paulo SP"
        ocupation="Desenvolvedor full stack"
        dateRange="ABR 2023 - NOV 2023"
        desc="Desenvolvi um sistema interno de onboarding e gestão de clientes com integração a sistemas terceiros. Fiz preparação de ambientes de desenvolvimento para novos projetos, realizei manutenção e criei novas funcionalidades em projetos existentes. Para tanto, utilizei tecnologias como VueJS, Laravel, Lumen, MariaDB, MySQL, MongoDB e Docker."
        link="#"
      />

      <ExperienceCard
        company="Alphacode IT Solutions"
        locale="Remoto"
        ocupation="Desenvolvedor full stack"
        dateRange="ABR 2023 - NOV 2023"
        desc="Desenvolvi CRM 's com HTML, CSS (Bootstrap), Javascript (JQuery), PHP (framework da empresa, PHP Orientado a Objeto, MVC), MySQL e Firebase. Desenvolvi API ’s em PHP para conexão entre aplicativos e CRM 's. Utilizei IONIC com angular, Sass e typescript no desenvolvimento mobile cross-plataform e dei suporte técnico em aplicativos e CRM 's."
        link="https://site.alphacode.com.br"
      />

      <div v-if="seeMore">
        <ExperienceCard
          company="web.art Group"
          locale="Remoto"
          ocupation="Desenvolvedor Backend"
          dateRange="FEV 2021 - MAR 2022"
          desc="Realizei suporte técnico em e-commerces. Desempenhei atividades como extração de relatórios personalizados, correção de erros de diversas naturezas no front e backend, Implementei novos layouts em sites com HTML, CSS (Bootstrap), JavaScript (Jquery), desenvolvi novas features em sistemas internos com PHP, Laravel, Lumen, Framework da empresa, MySQL e Docker."
          link="https://uappi.com.br"
        />

        <ExperienceCard
          company="Domestilar"
          locale="Macapá AP"
          ocupation="Desenvolvedor full stack"
          dateRange="FEV 2019 - JAN 2020"
          desc="Contribui para a migração de sistemas desktop Java legados para a web, construindo API ’ s e interfaces de usuário intuitivas e eficientes. Desenvolvi sistemas corporativos internos. Para tanto, utilizei tecnologias como JavaScript com JQuery e VueJS, PHP com Laravel e Lumen, CSS com Bootstrap."
          link="https://www.domestilar.com"
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
      <div class="mb-5">
        <p class="space-x-2">
          <b class="font-bold">Faculdade de Tecnologia do Amapá (META)</b>: Tecnólogo em Sistemas para Internet
        </p>
        <p class="badge badge-neutral">Conclusão em 2022</p>
      </div>

      <div>
        <p>
          <b class="font-bold">Escola estadual Algusto dos Anjos</b>: Ensino Médio
        </p>
        <p class="badge badge-neutral">Conclusão em 2015</p>
      </div>
    </SectionStructure>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const seeMore = ref<boolean>(false);

import SectionSeparator from "./../components/SectionSeparator/index.vue";
import SectionStructure from "./../components/SectionStructure/index.vue";
import SocialLinks from "./../components/SocialLinks/index.vue";
import ExperienceCard from "./../components/ExperienceCard/index.vue";
</script>
