<script setup lang="ts" >

const props = defineProps<{
    listSocialMedia?: socialMediaType[];
}>();

type socialMediaType = {
    name: string;
    url: string;
}

const processIcon = (socialMedia: string) => {
    switch (socialMedia) {
        case 'twitter':
            return 'bxl-twitter';
        case 'facebook':
            return 'bxl-facebook';
        case 'instagram':
            return 'bxl-instagram';
        case 'linkedin':
            return 'bxl-linkedin';
        case 'github':
            return 'bxl-github';
    }
}

</script>

<template>
    <div class="social-media">
        <div v-for="item in listSocialMedia" class="social-media__item" :title="item.name">
            <a :href="item.url" target="_blank" style="height: 30px;">
                <span :class="`social-media__item__icon bx ${processIcon(item.name)}`" />
            </a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.social-media {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;

    &__item {
        height: 20px;
        width: 20px;
        margin: 5px 10px;

        &__icon {
            height: 20px;
            width: 20px;
            color: black;
            font-size: 20px;

            &:hover {
                opacity: 0.6;
                transition: 0.6s;
            }
        }
    }
}
</style>
