<script setup lang="ts">
import InfoCard from '../components/InfoCard.vue';

</script>

<template>
  <div class="skills">
    <InfoCard
      size="medium"
      title="Programming language"
      :logo="true"
      :fix-height="true"
      class="skills__card"
    >
      <template #content>
        <p class="skills__card__content">JavaScript, TypeScript, Python, C++, C, Java, Scala, Matlab, R</p>
      </template>
      <template #logo>
        <img src="src/images/cpp.png" style="height: 30px;" alt="logo" />
      </template>
    </InfoCard>
    <InfoCard
      size="medium"
      title="Frontend development"
      :logo="true"
      :fix-height="true"
      class="skills__card"
    >
      <template #content>
        <p class="skills__card__content">HTML, CSS, Vue.js, React, Redux, Redux-Saga, Node.js</p>
      </template>
      <template #logo>
        <img src="src/images/frontend.png" style="height: 30px;" alt="logo" />
      </template>
    </InfoCard>
    <InfoCard
      size="medium"
      title="Product design"
      :logo="true"
      :fix-height="true"
      class="skills__card"
    >
      <template #content>
        <p class="skills__card__content">Figma</p>
      </template>
      <template #logo>
        <img src="src/images/figma.png" style="height: 30px;" alt="logo" />
      </template>
    </InfoCard>    
    <InfoCard
      size="medium"
      title="Backend development"
      :logo="true"
      :fix-height="true"
      class="skills__card"
    >
      <template #content>
        <p class="skills__card__content">Express.js, Django, Spring Boot</p>
      </template>
      <template #logo>
        <img src="src/images/backend.png" style="height: 30px;" alt="logo" />
      </template>
    </InfoCard>
    <InfoCard
      size="medium"
      title="CI/CD"
      :logo="true"
      :fix-height="true"
      class="skills__card"
    >
      <template #content>
        <p class="skills__card__content">Github, Gitlab, Docker</p>
      </template>
      <template #logo>
        <img src="src/images/git.png" style="height: 30px;" alt="logo" />
      </template>
    </InfoCard>
    <InfoCard
      size="medium"
      title="Testing"
      :logo="true"
      :fix-height="true"
      class="skills__card"
    >
      <template #content>
        <p class="skills__card__content">Cypress.js, Selenium</p>
      </template>
      <template #logo>
        <img src="src/images/test.png" style="height: 30px;" alt="logo" />
      </template>
    </InfoCard>
    <InfoCard
      size="medium"
      title="Database"
      :logo="true"
      :fix-height="true"
      class="skills__card"
    >
      <template #content>
        <p class="skills__card__content">SQL, BigQuery, Firebase</p>
      </template>
      <template #logo>
        <img src="src/images/database.png" style="height: 30px;" alt="logo" />
      </template>
    </InfoCard>
    <InfoCard
      size="medium"
      title="Buisiness / Data Analytics"
      :logo="true"
      :fix-height="true"
      class="skills__card"
    >
      <template #content>
        <p class="skills__card__content">Pandas, Numpy, Selenium, bs4, Salesforce.com</p>
      </template>
      <template #logo>
        <img src="src/images/data.png" style="height: 30px;" alt="logo" />
      </template>
    </InfoCard>
    <InfoCard
      size="medium"
      title="Language"
      :logo="true"
      :fix-height="true"
      class="skills__card"
    >
      <template #content>
        <p class="skills__card__content">English, Chinese, Spanish, Portuguese, Japanese</p>
      </template>
      <template #logo>
        <img src="src/images/language.png" style="height: 30px;" alt="logo" />
      </template>
    </InfoCard>
  </div>
</template>

<style lang="scss" scoped>
.skills {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  &__card {
    margin: $spacing-6;

    &__content {
      font-size: $font-medium;
      font-family: $font-main;
      line-height: 1.5;
    }
  }
}
</style>