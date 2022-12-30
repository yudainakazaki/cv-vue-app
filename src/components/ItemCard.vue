<script lang="ts" setup>

const props = defineProps<{
    thumbnail?: string;
    title?: string;
    description?: string;
    code?: string;
    demo?: string;
}>();
</script>

<template>
    <div class="item-card">
        <div class="item-card__thumbnail">
            <a :href="props.demo" target="_blank">
                <img class="item-card__thumbnail__img" :src="`${props.thumbnail}`" alt="thumbnail" style="width: 100%;"> 
            </a>
        </div>
        <h2 class="item-card__title">{{ props.title }}</h2>
        <p class="item-card__description">{{ props.description }}</p>
        <div class="item-card__links">
            <a :href="props.code" target="_blank" title="source code">
                <span class="item-card__links__link bx bx-code" />
            </a>
            <a :href="props.demo" target="_blank" title="demo">
                <span class="item-card__links__link bx bx-desktop" />
            </a> 
        </div>
    </div>
</template>

<style lang="scss" scoped>

.item-card {
    height: $width-6;
    width: $width-5;
    border-radius: $spacing-3;
    background-color: white;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2), 0px 5px 5px 2px rgba(0, 0, 0, 0.2);
    position: relative;
    display: flex;
    flex-direction: column; 
    
    &__thumbnail {
        height: $width-3;
        overflow: hidden;
        border-radius: $spacing-3;

        &__img {
            background-color: azure;
            transform: scale(1);
            width: 100%;
            transition: transform .3s ease-in;
            display: inline-block;
            animation: 1s ease-out loadImage;

            &:hover {
                transform: scale(1.1);
                transition: transform .3s ease-out;
                cursor: pointer;
            }
        }
    }

    &__title {
        font-family: $font-main;
        font-size: $font-medium;
        margin: 0 $spacing-5;
        font-weight: 500;
    }

    &__description {
        font-family: $font-main;
        font-size: $font-small;
        margin: $spacing-3 $spacing-5;
        font-weight: 500;
    }

    &__links {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 20%;

        &__link {
            font-size: $spacing-8;
            margin: $spacing-4;
            color: black;
            &:hover {
                opacity: 0.6;
                transition: 0.6s;
            }
        }
    }
}

@keyframes loadImage {
    0% {
        opacity: 0;
        transform: scale(1.1);
    }
    30% {
        opacity: 1;
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}

</style>