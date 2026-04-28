<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  padding-left: 2rem;
  padding-right: 2rem;
  box-sizing: border-box;

  @media (min-width: 768px) {
    max-width: 624px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
