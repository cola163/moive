import Vue from 'vue'
import VueRouter from 'vue-router'

//导入需要使用的组件
import Films from "@/views/Film/Films"
import NowPlaying from "@/views/Film/NowPlaying"
import ComingSoon from "@/views/Film/ComingSoon"
import Detail from "@/views/Film/Detail"
import Cinemas from "@/views/Cinema/Cinemas"

import Center from "@/views/Center/Center"
import Login from "@/views/Center/Login"

import City from "@/views/City/City"

Vue.use(VueRouter)

const routes = [
  //理由：请求地址与响应资源的对应关系
  //实现步骤
  //a.创建地址对应的组件，组件暂时不考虑布局等因素，输出不同内容即可
  //b.导入组件
  //c.书写路由规则（不拆分）
  //d.拆分成模块化的形式
  //   通用模块、电影模块、影院模块、城市模块、个人中心模块



  //路由重定向
  {
    path: "/", redirect: "/films/nowPlaying"
  },


  //电影模块路由
  {
    path: "/films",
    component: Films,
    //指定路由
    children: [
      {
        path: "nowPlaying", component: NowPlaying
      },
      {
        path: "comingSoon", component: ComingSoon
      }
    ]

  },
  {
    path: "/film/:film_id",
    component: Detail,
  },
  // 电影院模块
  {
    path: "/cinemas",
    component: Cinemas
  },
  //我的模块
  {
    path: "/center",
    component: Center
  },
  {
    path: "/login",
    component: Login
  },

  //城市
  {
    path: "/city",
    component: City
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
