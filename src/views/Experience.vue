<script setup lang="ts">
import InfoCard from '../components/InfoCard.vue';

</script>

<template>
  <div class="experience">
    <InfoCard
      size="large"
      :logo="true"
      title="Software Engineer Internship"
      subtitle1="Payaut"
      subtitle2="September, 2022 - February, 2023"
      class="experience__card"
    >
      <template #content>
        <p class="experience__card__content">
          I work for the merchant experience team which is in charge of all the endpoints development, frontend development, product design, etc.
          I especially worked on the frontend development of the merchant dashboard.
        </p>
        <p class="experience__card__content">Tech stack: Vue, TypeScript, Gitlab</p>
      </template>
      <template #logo>
        <a href="https://payaut.com/" target="_blank">
          <img src="../assets/images/payaut.jpeg" style="height: 50px;" alt="logo" />
        </a>
      </template>
    </InfoCard>
    <InfoCard
      size="large"
      :logo="true"
      title="Software Engineer Internship"
      subtitle1="Fast Retailing"
      subtitle2="August, 2022 - September, 2023"
      class="experience__card"
    >
      <template #content>
        <p class="experience__card__content">
          I was a part of the frontend development team which makes single page applications of EC sites for all the brands such as UNIQLO and GU. 
          I was in charge of debugging and adding new features for the single page application.
        </p>
        <p class="experience__card__content">Tech stack: React, Redux, TypeScript, Github</p>
      </template>
      <template #logo>
        <a href="https://www.fastretailing.com/eng/" target="_blank">
          <img src="../assets/images/fr.png" style="height: 50px;" alt="logo" />
        </a>
      </template>
    </InfoCard>
    <InfoCard
      size="large"
      :logo="true"
      title="BizOps Internship"
      subtitle1="HR Force"
      subtitle2="February, 2020 - September, 2020"
      class="experience__card"
    >
      <template #content>
        <p class="experience__card__content">
          I worked on the management and Configuration of CRM on Salesforce, 
          retrieving data from the World Wide Web for business development, 
          data analytics on the relationship between specific Japanese words and CVR of the job openings on the owned media, etc.
        </p>
        <p class="experience__card__content">Tech stack: Salesforce, Python, Pandas, word2vec, selenium, bs4</p>
      </template>
      <template #logo>
        <a href="https://www.hr-force.co.jp/" target="_blank">
          <img src="../assets/images/hrforce.jpeg" style="height: 50px;" alt="logo" />
        </a>
      </template>
    </InfoCard>
  </div>
</template>
<style lang="scss" scoped>
.experience {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__card {
    margin: $spacing-6;

    &__content {
      font-size: $font-small;
      font-family: $font-main;
      line-height: 1.5;
    }
  }
}
</style>