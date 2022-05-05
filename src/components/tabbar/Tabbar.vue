<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tabbar",
  created() {
    //默认首页是home
    if (this.$router.path !== "/home") this.$router.replace("home");
  },
};
</script>

<style scoped>
#tab-bar {
  display: flex;
  background-color: #f2f2f2;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  /* position: sticky;
  z-index: 9; */

  box-shadow: 0 -3px 1px rgba(100, 100, 100, 0.5);
}
</style>