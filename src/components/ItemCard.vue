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
                <slot />
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
    box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
    position: relative;
    display: flex;
    flex-direction: column; 
    
    &__thumbnail {
        height: $width-3;
        overflow: hidden;
        border-radius: $spacing-3;
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

</style>