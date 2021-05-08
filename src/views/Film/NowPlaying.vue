<template>
  <!-- 视图部分 -->
  <div class="main">
    <!-- 不要联通van-cell一起复制过来 -->
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="——————————我是有底线的——————————"
      @load="onLoad"
    >
      <!-- 展示正在热映列表 -->
      <van-card v-for="item in list" :key="item.filmId">
        <template #desc>
          <div class="leftBox">
            <div class="label">
              观众评分：<span class="grade">{{ item.grade }}</span>
            </div>
            <div class="label">主演：{{ item.actors | parseActors }}</div>
            <div class="label">{{ item.nation }} | {{ item.runtime }}分钟</div>
          </div>
        </template>
        <template #title>
          <div class="title">{{ item.name }} <span class="item">{{item.item.name}}</span></div>
        </template>
        <template #thumb>
          <img :src="item.poster" alt="" width="66" />
        </template>
        <template #tags>
          <van-tag plain type="danger" class="buy">购票</van-tag>
        </template>
      </van-card>
    </van-list>
  </div>
</template>


<script>
import Vue from "vue";
import { Card, Tag, List } from "vant";

Vue.use(Card);
Vue.use(Tag);
Vue.use(List);

import uri from "@/config/uri";
// 引入axios
// import axios from "axios";
// 为了方便后续，不必再每个组件中都需要import axios,对axios进行封装
// 逻辑部分
export default {
  data() {
    return {
      //默认页码
      pageNum: 1,
      //电影列表
      list: [],
      //是否处在加载中,在每次加载完毕后都要设置为true
      loading: false,
      //是否全部请求完毕,当所有数据获取完后，需要将该值设置为true
      finished: false,
    };
  },
  methods: {
    // 触发数据加载的
    // 请注意，改onLoad方法并不是首次加载created周期中的，后续再使用onload的，而且每次都会使用onLoad
    onLoad() {
      this.$http
        .get(uri.getNowPlaying + "?pageNum=" + this.pageNum)
        .then((ret) => {
          let maxPageNum = Math.ceil(ret.data.total / 10);
          this.list = [...this.list, ...ret.data.films];
          this.loading = false;
          if (this.pageNum < maxPageNum) {
            //页码+1
            this.pageNum++;
          } else {
            //说明已经全部加载完毕
            this.finished = true;
          }
        });
    },
  },
  created() {
    // axios.get("https://api.i-lynn.cn/ip").then(ret=>{
    //     console.log(ret);
    // })
    // this.$http
    //   .get(uri.getNowPlaying + "?pageNum=" + this.pageNum)
    //   .then((ret) => {
    //     this.list = ret.data.films;
    //   });
  },
  //过滤器 处理数据格式
  filters: {
    //解析主演
    parseActors(actors) {
      //动画片可能没有演员
      let str = "";
      if (actors) {
        actors.forEach((el) => {
          str += el.name + " ";
        });
      } else {
        str = "暂无主演";
      }
      //注意长度的截取
      return str.length > 19 ? str.substr(0, 19) + "..." : str;
    },
  },
};
</script>


<style lang="scss" scoped>
/* 样式部分 */
.van-card__thumb img {
  border-radius: 0px;
}
.main {
  margin-top: 6px;
  margin-bottom: 50px;
}
.van-card__thumb {
  margin-right: 0;
}

.title {
  color: #191a1b;
  font-size: 16px;
  height: 22px;
  line-height: 22px;
  margin-top: 10px;
  margin-left: -8px;
}
.desc {
  font-size: 13px;
  color: #797d82;
}
.grade {
  color: #ffb232;
  font-size: 14px;
}
.label {
  font-size: 13px;
  margin-top: 4px;
  color: #797d82;
}
.item {
  font-size: 9px;
  color: #fff;
  background-color: #d2d6dc;
  height: 14px;
  line-height: 14px;
  padding: 0 4px;
  border-radius: 2px;
}
.buy {
  line-height: 25px;
  height: 25px;
  padding: 0 10px;
  color: #ff5f16;
  font-size: 13px;
  text-align: center;
  border-radius: 4px;
  position: absolute;
  right: -6px;
  top: 30px;
}
.leftBox {
  margin-left: -8px;
}
</style>