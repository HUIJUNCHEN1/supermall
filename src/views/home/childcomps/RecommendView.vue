<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.recommend {
  display: flex;
  text-align: center;
  font-size: 12px;
  padding: 10px 10px;
  border-bottom: 5px solid #eee;
}
.recommend-item {
  flex: 25%;
  padding: 10px;
}
.recommend-item img {
  width: 100%;
  margin-bottom: 10px;
}
</style>