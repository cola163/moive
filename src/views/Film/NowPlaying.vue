<template>
    <!-- 视图部分 -->
    <div>正在热映</div>
</template>


<script>
// 引入axios
// import axios from "axios";
// 为了方便后续，不必再每个组件中都需要import axios,对axios进行封装
// 逻辑部分
export default {
    created(){
        // axios.get("https://api.i-lynn.cn/ip").then(ret=>{
        //     console.log(ret);
        // })
        this.$http.get("https://api.i-lynn.cn/ip").then(ret=>{
            console.log(ret);
        })
    }
}
</script>


<style lang="scss" scoped>
/* 样式部分 */
</style>