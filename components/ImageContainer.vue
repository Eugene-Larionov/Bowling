<template>
  <a class="bg-white rounded h-full text-grey-darkest no-underline shadow-md">
    <transition name="home" mode="out-in"></transition>
    <h1 class="text-3xl p-2">{{ title }}</h1>
    <img
      v-show="isLoaded"
      class="w-full block rounded-b"
      :src="url"
      :alt="alt"
      @load="onImgLoad"
    />
    <div v-show="!isLoaded" class="w-full block rounded-b text-center">
      <loading-bar :loading="!isLoaded"> Loading... </loading-bar>
    </div>
  </a>
</template>

<script>
import LoadingBar from "~/components/LoadingBar";

export default {
  transition: {
    name: "home",
    mode: "out-in",
  },
  components: {
    LoadingBar,
  },
  props: {
    url: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: "photo",
      required: false,
    },
    title: {
      type: String,
      default: "Dog",
      required: true,
    },
  },
  data() {
    return {
      isLoaded: false,
    };
  },
  methods: {
    onImgLoad() {
      this.isLoaded = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.text-grey-darkest {
  color: #35495e;
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}
.image-container-enter-active,
.image-container-leave-active {
  transition: opacity 45s;
}
.image-container-enter,
.image-container-leave-active {
  opacity: 0;
}
</style>
