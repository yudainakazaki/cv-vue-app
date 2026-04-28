<script setup lang="ts">
const props = defineProps<{
  size: string;
  logo?: boolean;
  title?: string;
  subtitle1?: string;
  subtitle2?: string;
  fixHeight?: boolean;
}>();
</script>

<template>
  <div
    :class="[
      'info-card',
      {
        'info-card--large': props.size === 'large',
        'info-card--small': props.size === 'small',
        'info-card--height-fixed': props.fixHeight,
      },
    ]"
  >
    <h1 class="info-card__title">{{ props.title }}</h1>
    <div v-if="props.logo" class="info-card__logo">
      <slot name="logo" />
    </div>
    <h2 class="info-card__subtitle">{{ props.subtitle1 }}</h2>
    <h2 class="info-card__subtitle">{{ props.subtitle2 }}</h2>
    <slot name="content" />
  </div>
</template>

<style lang="scss" scoped>
.info-card {
  width: 100%;
  height: fit-content;
  border-radius: $spacing-3;
  background-color: #f6f6f6;
  padding: $spacing-6;
  position: relative;
  box-sizing: border-box;

  &__title {
    font-family: $font-main;
    font-weight: 400;
    font-size: $font-large;
    margin-bottom: $spacing-3;
  }

  &__subtitle {
    font-family: $font-main;
    font-weight: 400;
    font-size: $font-medium;
    margin-bottom: $spacing-3;
  }

  &__logo {
    position: absolute;
    margin: $spacing-6;
    top: 0;
    right: 0;
  }

  &__content {
    font-size: $font-small;
  }

  &--small {
    width: 100%;
  }

  &--large {
    width: 100%;
  }

  &--height-fixed {
    height: $width-2;
  }
}

@media (max-width: 976px) {
  .info-card {
    width: 100%;

    &__title {
      width: 70%;
    }
  }
}
</style>
