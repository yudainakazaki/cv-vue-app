<script setup lang="ts">
import InfoCard from '../components/InfoCard.vue';
import grades from '../docs/Grades.pdf'

const onGradesClick = () => {
  window.open(grades);
}
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
          <a :onclick="onGradesClick" class="link" target="_blank">→ My transcript</a>
        </span>
      </template>
      <template #logo>
        <a href="https://vu.nl/en" target="_blank">
          <img src="../../public/images/vu.png" style="height: 50px;" alt="logo" />
        </a>
      </template>
    </InfoCard>
    <InfoCard size="large" :logo="true" title="Keio University"
      subtitle1="BA in Economics" class="education__card">
      <template #content>
        <p class="education__card__content">
          I focused on microeconomics, and I studied Applied Economics in the group of Prof. Takanobu Nakajima. <br />
        </p>
      </template>
      <template #logo>
        <a href="https://www.keio.ac.jp/en/" target="_blank">
          <img src="../../public/images/keio.png" style="height: 50px;" alt="logo" />
        </a>
      </template>
    </InfoCard>
    <InfoCard size="large" :logo="true" title="University of California, Riverside"
      subtitle1="Exchange" class="education__card">
      <template #content>
        <p class="education__card__content">
          I studied computer science, business, math, etc as an exchange student.
        </p>
      </template>
      <template #logo>
        <a href="https://www.ucr.edu/" target="_blank">
          <img src="../../public/images/ucr.png" style="height: 50px;" alt="logo" />
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
