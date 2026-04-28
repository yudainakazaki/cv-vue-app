<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
defineProps<{
  label: string;
}>();
</script>

<template>
  <div class="chip">
    {{ label }}
  </div>
</template>

<style lang="scss" scoped>
.chip {
  display: inline-flex;
  align-items: center;
  border-radius: 0.375rem;
  border: 1px solid;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  font-family: $font-main;
  transition: colors 0.2s;
  background-color: #1c1c1c;
  color: white;
  border-color: transparent;
}
</style>
