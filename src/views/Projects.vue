<script setup lang="ts">
import ItemCard from '../components/ItemCard.vue';

</script>

<template>
  <div class="projects">
    <ItemCard 
      class="projects__card" 
      title="yudainakazaki.com"
      description="Yudai Nakazaki's website where you are right now. This is a single page application developed with Vue.js and TypeScript."
      thumbnail="src/images/yudainakazakicom.png"
      code="https://github.com/yudainakazaki/cv-vue-app" 
      demo="https://yudainakazaki.com/" 
    />
    <ItemCard 
      class="projects__card" 
      title="Word Distance Studio API"
      description="This API built with Django takes two words of parameters and returns the similarity between two words based on the technology called word2vec."
      thumbnail="./src/images/word2vec.png"
      code="https://github.com/yudainakazaki/word2vec-api"
      demo="https://www.youtube.com/watch?v=L6PlV-EJ2o4&t=4s"
    />
    <ItemCard 
      class="projects__card" 
      title="Word Distance Studio App"
      description="This React app calls the Word Distance Studio Api with two words and returns the similarity between the given two words."
      thumbnail="./src/images/worddistancestudio.png"
      code="https://github.com/yudainakazaki/word2vec-app"
      demo="https://www.youtube.com/watch?v=L6PlV-EJ2o4&t=4s"
    />
    <ItemCard 
      class="projects__card" 
      title="Math Exercise App"
      description="This React app allows users to practice simple math calculations with problems which are randomly produced."
      thumbnail="../images/mathexercise.png"
      code="https://github.com/yudainakazaki/math-exercise-app"
      demo="https://yudainakazaki.github.io/math-exercise-app/"
    />
  </div>
</template>

<style lang="scss" scoped>
.projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  min-height: calc(100vh - 180px);

  &__card {
    margin: $spacing-6;
  }
}
</style>