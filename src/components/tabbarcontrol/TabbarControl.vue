<template>
  <div class="Tabbarcontrol">
    <div
      v-for="(item, index) in titles"
      :key="(item, index)"
      class="tabcontrol-item"
      :class="{ active: index === currenindex }"
      @click="itemclick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabbarControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currenindex: 0,
    };
  },
  methods: {
    itemclick(index) {
      this.currenindex = index;
      this.$emit("tabClick", index);
    },
  },
};
</script>

<style scoped>
.Tabbarcontrol {
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
}
.tabcontrol-item {
  flex: 1;
}
.tabcontrol-item span {
  padding: 5px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 3px solid var(--color-tint);
}
</style>