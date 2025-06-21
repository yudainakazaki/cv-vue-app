<script setup lang="ts">
import ItemCard from '../components/ItemCard.vue';

</script>

<template>
  <div class="projects">
    <ItemCard 
      class="projects__card" 
      title="yudainakazaki.com"
      description="Yudai Nakazaki's website where you are right now. This is a single page application developed with Vue.js and TypeScript."
      code="https://github.com/yudainakazaki/cv-vue-app" 
      demo="https://yudainakazaki.com/" 
    >
      <img class="thumbnail-img" src="/images/yudainakazakicom.png" alt="thumbnail" style="width: 100%;"> 
    </ItemCard>
    <ItemCard 
      class="projects__card" 
      title="Word Distance Studio API"
      description="This API built with Django takes two words of parameters and returns the similarity between two words based on the technology called word2vec."
      code="https://github.com/yudainakazaki/word2vec-api"
      demo="https://www.youtube.com/watch?v=L6PlV-EJ2o4&t=4s"
    >
      <img class="thumbnail-img" src="/images/word2vec.png" alt="thumbnail" style="width: 100%;"> 
    </ItemCard>
    <ItemCard 
      class="projects__card" 
      title="Word Distance Studio App"
      description="This React app calls the Word Distance Studio Api with two words and returns the similarity between the given two words."
      code="https://github.com/yudainakazaki/word2vec-app"
      demo="https://www.youtube.com/watch?v=L6PlV-EJ2o4&t=4s"
    >
      <img class="thumbnail-img" src="/images/worddistancestudio.png" alt="thumbnail" style="width: 100%;"> 
    </ItemCard> 
  </div>
</template>

<style lang="scss" scoped>
.projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  min-height: calc(100vh - 180px);
  margin-top: $spacing-8;
  margin-bottom: $spacing-6;
  padding-bottom: 56px;
  gap: $spacing-6;

  .thumbnail-img {
    background-color: azure;
    transform: scale(1);
    width: 100%;
    transition: transform .3s ease-in;
    display: inline-block;
    animation: 1.5s ease-out loadImage;

    &:hover {
      transform: scale(1.1);
      transition: transform .3s ease-out;
      cursor: pointer;
    }
  }
}

@keyframes loadImage {
  0% {
      opacity: 0;
      transform: scale(1.1);
  }
  40% {
      opacity: 1;
      transform: scale(1.1);
  }
  100% {
      transform: scale(1);
  }
}
</style>