<template>
  <div class="detail">
    <Detailnav class="detailnav"></Detailnav>
    <!-- 轮播图 -->
    <Detailswiper :topImages="topImages"></Detailswiper>
    <!-- 商品信息 -->
    <DetailBaseInfo :goods="goods"></DetailBaseInfo>
    <!-- 商家信息 -->
    <DetailShopInfo :shop="shop"></DetailShopInfo>
  </div>
</template>

<script>
import Detailnav from "../detail/dchildcomps/Detailnav.vue";
import Detailswiper from "../detail/dchildcomps/Detailswiper.vue";
import DetailBaseInfo from "../detail/dchildcomps/DetailBaseInfo.vue";
import DetailShopInfo from "../detail/dchildcomps/DetailShopInfo.vue";
import { getDetail, Goods, Shop } from "../../network/detail";
export default {
  name: "Detail",
  components: {
    Detailnav,
    Detailswiper,
    DetailBaseInfo,
    DetailShopInfo,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    //获取详情页数据
    getDetail(this.iid).then((res) => {
      console.log(res);
      const data = res.data.result;
      this.topImages = data.itemInfo.topImages;
      //获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      this.shop = new Shop(data.shopInfo);
    });
  },
};
</script>

<style scoped>
.detailnav {
  position: relative;
  z-index: 9;
}
</style>