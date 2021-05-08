<template>
  <div :class="{ sticky: isSticky }">
    <van-tabs
      @click="onClick"
      line-width="60px"
      line-height="2"
      title-active-color="#ff5f16"
      v-model="active"
      title-inactive-color="#191a1b"
    >
      <van-tab title="正在热映"></van-tab>
      <van-tab title="即将上映"></van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";
Vue.use(Tab);
Vue.use(Tabs);
export default {
  data() {
    return {
      active: 0,
      url: ["/films/nowPlaying", "/films/comingSoon"],
      //是否具备吸顶效果
      isSticky: false,
    };
  },
  methods: {
    //index 是索引 title tab的名称
    onClick(index, title) {
      this.$router.push(this.url[index]);
    },
  },
  created() {
    this.active = this.url.indexOf(this.$route.path);
  },
  //mounted周期中获取滚动条高度
  mounted() {
    addEventListener("scroll", () => {
      let scrollTop = document.documentElement.scrollTop;
      if (scrollTop >= 300) {
        //具备吸顶效果
        this.isSticky = true;
      } else {
        //不具备吸顶效果
        this.isSticky = false;
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.sticky {
  position: fixed;
  z-index: 999;
  width: 100%;
  top: 0;
}
</style>