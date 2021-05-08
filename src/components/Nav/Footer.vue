<template>
  <div>
    <van-tabbar
      v-model="active"
      active-color="#ff5f16"
      inactive-color="#000"
      @change="changTab"
    >
      <van-tabbar-item>
        <van-icon
          class="iconfont icon-dianying"
          slot="icon"
          size="20"
        ></van-icon>
        <span>电影</span>
      </van-tabbar-item>
      <van-tabbar-item>
        <van-icon
          class="iconfont icon-yingyuan"
          slot="icon"
          size="20"
        ></van-icon>
        <span>影院</span>
      </van-tabbar-item>
      <van-tabbar-item>
        <van-icon class="iconfont icon-zixun" slot="icon" size="20"></van-icon>
        <span>资讯</span>
      </van-tabbar-item>
      <van-tabbar-item>
        <van-icon class="iconfont icon-wode" slot="icon" size="20"></van-icon>
        <span>我的</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import "@/assets/iconfont/iconfont.css";
import Vue from "vue";
import { Tabbar, TabbarItem, Icon } from "vant";

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Icon);

export default {
  data() {
    return {
      active: 0,
      //定义好地址数组
      url: ["/films/nowPlaying", "/cinemas", "/message", "/center"],
    };
  },
  methods: {
    //改变菜单后触发 形参是索引下标
    changTab(index) {
      this.$router.push(this.url[index]);
    },
  },
  created() {
    //获取地址栏中的路径
    let path = this.$route.path;
    let index = this.url.indexOf(path);
    this.active = index;
    //在原有的基础上增加对地址的判断，判断是否即将上映，如果active为0,否则按原计划赋值为0
    this.active = path === "/films/comingSoon" ? 0 : index;
  },
};
</script>

<style lang="scss" scoped>
</style>