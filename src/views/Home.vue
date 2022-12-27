<script setup lang="ts">
import { onMounted } from 'vue';

</script>

<template>
  <div class="home">
    <!-- <div class="home__tags">
      <label class="home__tags__tag"><a href="https://www.instagram.com/explore/tags/tokyo" target="_blank" class="link">#Tokyo</a></label>
      <label class="home__tags__tag">#✈︎✈︎✈︎✈︎✈︎✈︎✈︎</label>
      <label class="home__tags__tag"><a href="https://www.instagram.com/explore/tags/amsterdam" target="_blank" class="link">#Amsterdam</a></label>
    </div> -->
    <img src="../images/yudainakazaki.png" class="home__name">
    <img src="../images/top.png" alt="name" class="home__profile">
  </div>
</template>

<style lang="scss" scoped>
.home {
  position: relative;
  display: block;
  margin-left: auto;
  width: 66.8%;

  &__tags {
    position: absolute;
    bottom: $spacing-10;
    left: -40%;
    display: flex;
    flex-direction: column;

    &__tag {
      font-size: 18px;
      font-family: $font-main;
      margin: 5px;
      a {
        text-decoration: none;
        color: black;
      }
    }
  }

  &__name {
    position: absolute;
    top: 35%;
    left: -40%;
    width: 69.5%;
  }

  &__profile {
    width: 100%;
  }
}
</style>
