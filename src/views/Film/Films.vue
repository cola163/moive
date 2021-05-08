<template>
  <!-- 视图部分 -->
  <div>
    <Header></Header>
    <router-view></router-view>
  </div>
</template>


<script>
//导入Header组件
import Header from "@/components/Nav/Header";
//逻辑部分
export default {
  //注册组件
  components: {
    Header,
  },
};
</script>


<style lang="scss" scoped>
/* 样式部分 */
</style>