<script setup lang="ts">
import { RouterView } from "vue-router";
import 'boxicons';
import Header from "./components/Header.vue";
</script>

<template>
  <div>
    <Header />
    <RouterView />
    <footer>
      <div class="footer">
        <label class="footer__label">
          ©︎yudainakazaki.com
          <a 
            href="https://www.youtube.com/watch?v=v7BY5m2wYx4" 
            class="no-text-decoration" 
            target="_blank"
            title="smile">🐤</a>
        </label>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  opacity: 0.9;

  &__label {
    margin: auto 0;
    font-family: $font-main;
    font-weight: 600;
    padding: $spacing-6 0;
  }
}

@media (min-width: 976px) {}

@keyframes border_animation {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
</style>
