<template>
  <div id="app">
    <!-- vue3keepalive的新语法 -->
    <router-view v-slot="{ Component }">
      <keep-alive exclude="Detail">
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <mainbar></mainbar>
  </div>
</template>
<script>
import mainbar from "./components/mainbar.vue";
export default {
  name: "app",
  components: {
    mainbar,
  },
};
</script>

<style>
@import "./assets/css/base.css";
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
</style>
