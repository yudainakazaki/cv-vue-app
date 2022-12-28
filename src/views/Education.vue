<script setup lang="ts">
import InfoCard from '../components/InfoCard.vue';
</script>

<template>
  <div class="education">
    <InfoCard size="large" :logo="true" title="Vrije University Amsterdam"
      subtitle1="BSc in Computer Science" subtitle2="August, 2020 - present" class="education__card">
      <template #content>
        <p class="education__card__content">
          I am pursuing a bachelor's degree in Computer Science 💻 <br />
          I am interested in human computer interaction, natural language processing and software engineering.<br />
        </p>
        <p class="education__card__content">
          GPA : 8.6 / 10 (As of December, 2022)
        </p>
        <span>
          <a href="src/docs/Grades.pdf" class="link" target="_blank">→ My transcript</a>
        </span>
      </template>
      <template #logo>
        <a href="https://vu.nl/en" target="_blank">
          <img src="src/images/vu.png" style="height: 50px;" alt="logo" />
        </a>
      </template>
    </InfoCard>
    <InfoCard size="large" :logo="true" title="Keio University"
      subtitle1="BA in Economics" subtitle2="April, 2015 - March, 2019" class="education__card">
      <template #content>
        <p class="education__card__content">
          I focused on microeconomics, and I studied Applied Economics in the group of Prof. Takanobu Nakajima. <br />
        </p>
      </template>
      <template #logo>
        <a href="https://www.keio.ac.jp/en/" target="_blank">
          <img src="src/images/keio.png" style="height: 50px;" alt="logo" />
        </a>
      </template>
    </InfoCard>
    <InfoCard size="large" :logo="true" title="University of California, Riverside"
      subtitle1="Exchange" subtitle2="September, 2017 - July, 2018" class="education__card">
      <template #content>
        <p class="education__card__content">
          I studied computer science, business, math, etc.
        </p>
      </template>
      <template #logo>
        <a href="https://www.keio.ac.jp/en/" target="_blank">
          <img src="src/images/ucr.png" style="height: 50px;" alt="logo" />
        </a>
      </template>
    </InfoCard>
  </div>
</template>

<style lang="scss" scoped>
.education {
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
