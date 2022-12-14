<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import router from "./router";
import 'boxicons';
import { computed, onMounted } from "vue";
import SocialMedia from "./components/SocialMedia.vue";
import { useRoute } from "vue-router";
import { listSocialMedia } from "./data/listSocialMedia";
import cv from "./docs/cv.pdf";

const routes = router.options.routes;
const route = useRoute();

const onCvClick = () => {
  window.open(cv);
}

onMounted(() => {
  console.log(route.name === 'Home');
})

</script>

<template>
  <div>
    <header class="header">
      <div class="header__nav">
        <nav v-for="(item, i) in routes" :key="i" class="header__nav__item">
          <RouterLink :to="{ path: item.path }" class="header__nav__item__label link" :title="item.name">
            {{ item.name }}
          </RouterLink>
        </nav>
        <label class="header__nav__item">
          <a 
            :onclick="onCvClick" 
            target="_blank"
            class="header__nav__item__label link" 
            title="CV"
          >CV</a>
        </label>
      </div>
      <div class="header__social-media">
        <SocialMedia :list-social-media="listSocialMedia" />
      </div>
    </header>
    <RouterView />
    <footer>
      <div :class="['footer', { 'footer--home': route.name === 'Home' }]">
        <label class="footer__label">
          ©︎yudainakazaki.com
          <a href="https://www.youtube.com/watch?v=v7BY5m2wYx4" class="no-text-decoration" target="_blank" title="smile">🐤</a>
        </label>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  background-color: white;
  opacity: .9;

  &__nav {
    display: flex;
    margin: 0 $spacing-6;
    height: 100%;

    &__item {
      margin: 0 $spacing-5;
      display: flex;
      justify-content: center;
      align-items: center;

      &__label {
        margin: auto 0;
        font-weight: 700;
        line-height: 1.5;

        &.router-link-active:after {
          content: '';
          position: absolute;
          width: 100%;
          height: 1.5px;
          transform: scaleX(1);
          transform-origin: bottom left;
          bottom: 0;
          left: 0;
          background-color: black;
        }

      }
    }
  }

  &__social-media {
    margin: 0 $spacing-6;
  }
}

.footer {
  width: 100%;
  height: 90px;
  position: relative;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;

  &--home {
    position: fixed;
  }

  &__label {
    margin: auto 0;
    font-family: $font-main;
    font-weight: 600;
  }
}

@media (min-width: 1024px) {}

@keyframes border_animation {
  0% {
    width: 0%;
  }

  100% {
    width: 100%;
  }
}
</style>
