<template>
  <div>
    <MyHeader title="购物车案例"  ></MyHeader>
    <MyGoods
      v-for="obj in list" :key="obj.id" :gObj="obj"
    ></MyGoods>
    <MyFooter :arr="list" @changeAll="allFn"></MyFooter>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyGoods from './components/MyGoods.vue'
import MyFooter from './components/MyFooter.vue'


export default {
  //组件
  components:{
    MyHeader,
    MyGoods,
    MyFooter,
   
},

//数据
data(){
  return{
    list:[]
  }
},

created(){
  this.$axios({
    method:'GET', //请求方式
    url:'/api/cart',//请求api

  }).then(res => {
    this.list = res.data.list
  })
},

methods:{
  allFn(isAll){
    //将全选框的状态关联到所有小选框
    this.list.forEach(obj => obj.goods_state = isAll)
  }
}
}
</script>

<style>

</style>