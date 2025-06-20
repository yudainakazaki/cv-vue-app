<script setup lang="ts">
import InfoCard from '../components/InfoCard.vue';
import experiences from '../data/contents/experience';
</script>

<template>
  <div class="experience">
    <InfoCard
      v-for="(item, index) in experiences"
      :key="index"
      size="large"
      :logo="true"
      :title="item.title"
      :subtitle1="item.employer"
      :subtitle2="item.period"
      class="experience__card"
    >
      <template #content>
        <div v-html="item.description" class="experience__card__content"></div>
      </template>
      <template #logo>
        <a :href="item.url" target="_blank" rel="noopener noreferrer">
          <img :src="item.imagePath" style="height: 50px;" alt="logo" />
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
  margin-top: $spacing-8;
  padding-bottom: 56px;

  &__card {
    margin-bottom: $spacing-6;

    &__content {
      font-size: $font-small;
      font-family: $font-main;
      line-height: 1.5;
    }
  }
}
</style>