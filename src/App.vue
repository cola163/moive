<template>
  <div id="app">
    <router-view />
    <!-- 使用Footer组件 -->
    <Footer></Footer>
  </div>
</template>
<script>
//导入Footer组件
import Footer from "@/components/Nav/Footer";
export default {
  //注册组件
  components: {
    Footer,
  },
};
</script>

<style lang="scss">

</style>
