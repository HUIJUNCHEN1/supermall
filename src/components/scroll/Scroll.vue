<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot name="nr"></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      observeDOM: this.observeDOM,
      click: true,
      observeImage: this.observeImage,
    });
    console.log(this.scroll);
  },
};
</script>

<style scoped>
</style>