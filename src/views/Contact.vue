<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Container from "../components/Container.vue";

const copyText = (text: string) => {
  navigator.clipboard.writeText(text);
  alert("Copied!");
};
</script>

<template>
  <Container>
    <div class="contact">
      <h2 class="contact__msg">Message me via Linkedin or email.</h2>
      <div class="contact__links">
        <a
          href="https://www.linkedin.com/in/yudainakazaki/"
          target="_blank"
          title="linkedin"
        >
          <span class="contact__links__link bx bxl-linkedin"></span>
        </a>
        <span
          class="contact__links__link bx bxl-gmail"
          title="Copy udainakazaki@gmail.com"
          aria-label="udainakazaki@gmail.com"
          @click="copyText('udainakazaki@gmail.com')"
        ></span>
      </div>
    </div>
  </Container>
</template>

<style lang="scss" scoped>
.contact {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 180px);
  justify-content: center;
  align-items: center;

  &__msg {
    font-family: $font-main;
    font-size: $font-medium;
  }

  &__links {
    display: flex;
    justify-content: center;

    &__link {
      margin: $spacing-5;
      color: black;
      font-size: 2.5rem;
      transform: scale(1);
      transition: transform 0.3s ease-out;
      position: relative;

      &:hover {
        opacity: 0.6;
        transition: 0.6s;
        cursor: pointer;
      }

      &:active {
        transform: scale(0.9);
        transition: transform 0.3s ease-out;
      }
    }
  }
}
</style>
