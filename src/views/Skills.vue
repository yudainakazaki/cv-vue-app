<script setup lang="ts">
import InfoCard from '../components/InfoCard.vue';
import { skills } from '../data/contents/skills';
</script>
<template>
  <div class="skills">
    <InfoCard
      v-for="(skill, index) in skills"
      :key="index"
      size="medium"
      :title="skill.title"
      :logo="true"
      :fix-height="true"
      class="skills__card"
    >
      <template #content>
        <div v-html="skill.content" class="skills__card__content"></div>
      </template>
      <template #logo>
        <img :src="skill.logoPath" style="height: 30px;" alt="logo" />
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
  margin-top: $spacing-8;
  padding-bottom: 56px;
  margin-bottom: $spacing-6;
  gap: $spacing-6;

  &__card {
    &__content {
      font-size: $font-medium;
      font-family: $font-main;
      line-height: 1.5;
    }
  }
}
</style>