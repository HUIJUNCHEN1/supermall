<template>
  <div class="goods">
    <Gooditem
      v-for="(item, index) in goods"
      :key="index"
      :Goodsitem="item"
    ></Gooditem>
  </div>
</template>

<script>
import Gooditem from "./Gooditem";
export default {
  name: "goods",
  components: {
    Gooditem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  z-index: 99;
}
</style>