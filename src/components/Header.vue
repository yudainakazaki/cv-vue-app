<script lang="ts" setup>
import router from "../router";
import { onMounted, ref } from "vue";
import { listSocialMedia } from "../data/listSocialMedia";
import SocialMedia from "./SocialMedia.vue";

const routes = router.options.routes;

const mobile = ref(window.innerWidth <= 976);
const mobileNav = ref(false);
const windowWidth = ref(window.innerWidth);

const toggleMobileNav = () => {
	mobileNav.value = !mobileNav.value;
	if (mobileNav.value) document.body.style.overflowY = 'hidden';
	else document.body.style.overflowY = 'visible';
}

const checkScreenWidth = () => {
	windowWidth.value = window.innerWidth;
	if (windowWidth.value <= 976) {
		mobile.value = true;
	} else {
		mobile.value = false;
		mobileNav.value = false;
	}
	return
}

const scrollToTop = () => {
	window.scrollTo(0, 0);
}

onMounted(() => {
	window.addEventListener("resize", checkScreenWidth);
	checkScreenWidth;
})
</script>

<template>
	<header class="header">
		<div v-show="!mobile" class="header__nav">
			<nav v-for="(item, i) in routes" :key="i" class="header__nav__item">
				<RouterLink :to="{ path: item.path }" class="header__nav__item__label link" :title="item.name"
					@click="scrollToTop">
					{{ item.name }}
				</RouterLink>
			</nav>
			<label class="header__nav__item">
				<a href="https://flowcv.com/resume/a0uwwj2sc9" target="_blank" class="header__nav__item__label link"
					title="CV">CV</a>
			</label>
		</div>
		<Transition name="fade" mode="out-in">
			<div v-show="mobileNav" class="nav-wrapper" @touchmove.prevent>
				<div class="mobile-nav" @click="toggleMobileNav">
					<nav v-for="(item, i) in routes" :key="i" class="mobile-nav__item">
						<RouterLink :to="{ path: item.path }" class="mobile-nav__item__label" :title="item.name"
							@click="scrollToTop">
							{{ item.name }}
						</RouterLink>
					</nav>
					<div class="mobile-nav__item">
						<a
							href="https://flowcv.com/resume/a0uwwj2sc9" 
							target="_blank"
							class="mobile-nav__item__label"
							title="CV"
						>CV</a>
					</div>
					<div class="chick-container">
						<a href="https://m.youtube.com/watch?v=v7BY5m2wYx4" class="chick">🐣</a>
					</div>
				</div>
			</div>
		</Transition>
		<div class="header__social-media">
			<SocialMedia :list-social-media="listSocialMedia" />
		</div>
		<div class="menu-icon">
			<span v-show="mobile" @click="toggleMobileNav" class="bx bx-chevrons-left menu-icon__icon"
				:class="{ 'menu-icon__icon--active': mobileNav }"></span>
		</div>
	</header>
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
		margin: 0 $spacing-6 0 auto;
	}

	.menu-icon {
		background-color: black;

		&__icon {
			font-size: 64px;
			width: 90px;
			height: 90px;
			cursor: pointer;
			color: white;
			text-align: center;
			line-height: 90px;
			transition: 0.6s ease all;

			&--active {
				transform: rotate(180deg);
			}
		}
	}
}

.nav-wrapper {
	height: calc(100vh - 90px);
	width: 100%;
	top: 90px;
	position: fixed;
	overflow-y: scroll;
}

.mobile-nav {
	display: block;
	min-height: 100%;
	background-color: black;
	padding: $spacing-10 $spacing-10 72px $spacing-10;

	&__item {
		margin-bottom: $spacing-4;
		position: relative;
		font-family: $font-main;
		cursor: pointer;
		
		&:last-child {
			margin-bottom: 0;
		}

		&__label {
			color: white;
			text-decoration: none;
			display: block;
			font-size: 24px;
			font-family: $font-main;
			font-weight: 500;

			&.router-link-active:after {
				content: '';
				position: absolute;
				width: 100%;
				height: 1.5px;
				transform: scaleX(1);
				transform-origin: bottom left;
				bottom: 0;
				left: 0;
				background-color: white;
			}
		}

		&:after {
			content: '';
			position: absolute;
			width: 100%;
			transform: scaleX(0);
			height: 1.5px;
			bottom: 0;
			left: 0;
			background-color: white;
			transform-origin: bottom right;
			transition: transform 0.3s ease-out;
		}

		&:hover:after {
			transform: scaleX(1);
			transform-origin: bottom left;
			transition: transform .3s ease-out;
		}

	}
}

.chick-container {
	display: flex;
	justify-content: center;

	.chick {
		font-size: 96px;
		text-decoration: none;
	}
}

.fade-enter-to,
.fade-leave-from {
	transform: translate(0, 0);
	transition: transform 0.3s;
}

.fade-enter-from,
.fade-leave-to {
	transform: translate(100%, 0);
	transition: transform 0.3s;
}

@media (min-width: 976px) {}
</style>