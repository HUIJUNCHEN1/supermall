<template>
  <div class="home">
    <div class="sas"></div>
    <Nav class="home-nav">
      <template v-slot:center>
        <div slot="center">购物街</div>
      </template>
    </Nav>
    <swiper :banner="banner"></swiper>
    <RecommendView :recommends="recommends"></RecommendView>
    <feature></feature>
    <TabbarControl
      class="tab-control"
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
    ></TabbarControl>
    <Goods :goods="goods[currentType].list"></Goods>
    <el-button type="danger" plain @click="loadmore" class="loadmore"
      >loadmore</el-button
    >
    <div class="sase"></div>
  </div>
</template>

<script>
import Nav from "../../components/nav/Nav.vue";
import RecommendView from "./childcomps/RecommendView";
import feature from "./childcomps/feature.vue";
import swiper from "../../components/swiper/swiper.vue";
import TabbarControl from "../../components/tabbarcontrol/TabbarControl.vue";
import Goods from "../../components/goods/Goods.vue";
import Scroll from "../../components/scroll/Scroll.vue";
import { gethomemulti, gethomegood } from "@/network/home.js";
export default {
  name: "home",
  components: {
    Nav,
    RecommendView,
    swiper,
    feature,
    TabbarControl,
    Goods,
    Scroll,
  },
  data() {
    return {
      // result: null,
      banner: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
    };
  },
  created() {
    this.gethomemulti();
    this.gethomegood("pop");
    this.gethomegood("new");
    this.gethomegood("sell");
  },
  methods: {
    //事件监听
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    loadmore() {
      this.gethomegood(this.currentType);
    },
    //网络请求
    gethomemulti() {
      gethomemulti().then((res) => {
        console.log(res);
        this.banner = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },
    gethomegood(type) {
      const page = this.goods[type].page + 1;
      gethomegood(type, page).then((res) => {
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
      });
    },
  },
};
</script>

<style>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
.sas {
  height: 45px;
}
.sase {
  height: 50px;
}
.tab-control {
  position: sticky;
}
.content {
  height: calc(100% - 84px);
  overflow: hidden;
}
.loadmore {
  margin-left: 41%;
}
</style>