<template>
  <Tabbar>
    <tabbaritem path="/home">
      <template v-slot:item-icon>
        <img slot="item-icon" src="../assets/img/tabbar/home.svg" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img
          slot="item-icon"
          src="../assets/img/tabbar/homeactive.svg"
          alt=""
        />
      </template>
      <template v-slot:item-text>
        <div>首页</div>
      </template>
    </tabbaritem>
    <tabbaritem path="/classify">
      <template v-slot:item-icon>
        <img slot="item-icon" src="../assets/img/tabbar/classify.svg" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img
          slot="item-icon"
          src="../assets/img/tabbar/classifyactiv.svg"
          alt=""
        />
      </template>
      <template v-slot:item-text>
        <div>分类</div>
      </template>
    </tabbaritem>
    <tabbaritem path="/shopping">
      <template v-slot:item-icon>
        <img slot="item-icon" src="../assets/img/tabbar/shopping.svg" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img
          slot="item-icon"
          src="../assets/img/tabbar/shoppingactive.svg"
          alt=""
        />
      </template>
      <template v-slot:item-text>
        <div>购物车</div>
      </template>
    </tabbaritem>
    <tabbaritem path="/my">
      <template v-slot:item-icon>
        <img slot="item-icon" src="../assets/img/tabbar/my.svg" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img slot="item-icon" src="../assets/img/tabbar/myactive.svg" alt="" />
      </template>
      <template v-slot:item-text>
        <div>我的</div>
      </template>
    </tabbaritem>
  </Tabbar>
</template>

<script>
import Tabbar from "../components/tabbar/Tabbar.vue";
import tabbaritem from "../components/tabbar/tabbar-item.vue";
export default {
  name: "mainbar",
  components: {
    Tabbar,
    tabbaritem,
  },
};
</script>

<style scoped>
</style>