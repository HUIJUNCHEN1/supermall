<template>
  <div class="block">
    <el-carousel height="150px">
      <el-carousel-item v-for="item in banner" :key="item">
        <h3 class="small">
          <a :href="item.link">
            <img :src="item.image" alt="" />
          </a>
        </h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "swiper",
  props: {
    banner: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.block {
  width: 100%;
  height: 15%;
  position: relative;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.block img {
  width: 100%;
}
</style>