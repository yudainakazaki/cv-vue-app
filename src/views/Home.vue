<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Container from "../components/Container.vue";
</script>

<template>
  <div class="home">
    <div class="home__main">
      <img src="/images/yudainakazaki.png" class="home__main__name" />
      <img src="/images/top.png" alt="name" class="home__main__profile" />
      <img
        src="/images/yudainakazaki_black.png"
        class="home__main__name-mobile"
      />
    </div>
    <Container>
      <p class="home__description">
        I am Yudai. <br />
        I am a creator, designer, software developer,comedian & native samurai.
      </p>
    </Container>
  </div>
</template>

<style lang="scss" scoped>
.home {
  min-height: calc(100vh - 180px);
  padding-bottom: 100px;

  &__main {
    position: relative;
    display: block;
    margin-left: auto;
    width: 66.8%;

    &__name {
      position: absolute;
      top: 35%;
      left: -40%;
      width: 69.5%;
      animation: 2s ease-in 0s showUp;
      transform-origin: left;
    }

    &__name-mobile {
      display: none;
    }

    &__profile {
      width: 100%;
      animation: 1s ease-out loadImage;
    }
  }

  &__description {
    font-size: $font-medium;
    font-family: $font-main;
    font-weight: 500;
    margin: $spacing-13 0;
    line-height: 2;
  }
}

@media (max-width: 976px) {
  .home {
    &__main {
      display: flex;
      flex-direction: column;
      width: 100%;

      &__name {
        display: none;
      }

      &__name-mobile {
        margin: $spacing-9 auto;
        display: block;
        position: relative;
        width: 70%;
        animation: 2s ease-in 0s showUp;
        transform-origin: left;
      }

      &__profile {
        width: 100%;
        animation: 1s ease-out loadImage;
      }
    }
  }
}

@keyframes loadImage {
  0% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes showUp {
  0% {
    opacity: 0;
  }
  45% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
