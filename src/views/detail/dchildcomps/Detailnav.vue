<template>
  <div>
    <Nav>
      <template v-slot:left>
        <div class="back" @click="backclick">
          <img src="../../../assets/img/commend/back.svg" alt="" />
        </div>
      </template>
      <template v-slot:center>
        <div class="title">
          <div
            v-for="(item, index) in titles"
            :key="index"
            class="titleitem"
            :class="{ active: index === currentindex }"
            @click="titleclick(index)"
          >
            {{ item }}
          </div>
        </div>
      </template>
    </Nav>
  </div>
</template>

<script>
import Nav from "../../../components/nav/Nav.vue";
export default {
  name: "Detailnav",
  components: {
    Nav,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentindex: 0,
    };
  },
  methods: {
    titleclick(index) {
      this.currentindex = index;
    },
    backclick() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.title {
  display: flex;
}
.titleitem {
  flex: 1;
  font-size: 13px;
}
.back img {
  height: 35px;
  width: 25px;
  margin-top: 3px;
}
.active {
  color: var(--color-tint);
}
</style>