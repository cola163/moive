import Vue from 'vue'
import VueRouter from 'vue-router'

//导入需要使用的组件


//导入需要的路由模块
import commonRoutes from "./modules/common";
import filmsRoutes from "./modules/films";
import cinemasRoutes from "./modules/cinemas";
import centerRoutes from "./modules/center";
import cityRoutes from "./modules/city";

Vue.use(VueRouter)

const routes = [
  //理由：请求地址与响应资源的对应关系
  //实现步骤
  //a.创建地址对应的组件，组件暂时不考虑布局等因素，输出不同内容即可
  //b.导入组件
  //c.书写路由规则（不拆分）
  //d.拆分成模块化的形式
  //   通用模块、电影模块、影院模块、城市模块、个人中心模块


  //路由重定向 展开路由模块
  ...commonRoutes,

  //电影模块路由
  ...filmsRoutes,

  // 电影院模块
  ...cinemasRoutes,

  //我的模块
  ...centerRoutes,

  //城市
  ...cityRoutes


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
