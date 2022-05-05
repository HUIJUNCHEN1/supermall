<template>
  <el-carousel indicator-position="outside" style="height: 350px">
    <el-carousel-item v-for="item in topImages" :key="item">
      <img :src="topImages" alt="" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "Detailswiper",
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>