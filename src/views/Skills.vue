<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Chip from "../components/Chip.vue";
import Container from "../components/Container.vue";
import { skills } from "../data/contents/skills";
</script>
<template>
  <Container>
    <section id="skills" class="skills">
      <h1>Skills</h1>
      <div class="skills__chips">
        <Chip
          v-for="(skill, index) in skills"
          :key="index"
          :label="skill.name"
        />
      </div>
    </section>
  </Container>
</template>

<style lang="scss" scoped>
h1 {
  font-size: $font-medium;
  font-family: $font-main;
}
.skills {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: $spacing-8;
  padding-bottom: 100px;
  margin-bottom: $spacing-6;
  gap: $spacing-6;

  &__header {
    margin-bottom: $spacing-3;
  }

  &__title {
    font-size: 1.25rem;
    font-weight: 700;
  }

  &__chips {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
  }
}
</style>
