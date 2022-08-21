<template>
  <!-- 底部 -->
  <div class="my-footer">
    <!-- 全选 -->
    <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="footerCheck" v-model="isAll">
      <label class="custom-control-label" for="footerCheck">全选</label>
    </div>
    <!-- 合计 -->
    <div>
      <span>合计:</span>
      <span class="price">¥ {{allPrice}}</span>
    </div>
    <!-- 按钮 -->
    <button type="button" class="footer-btn btn btn-primary">结算 ( {{allPrice}} )</button>
  </div>
</template>

<script>
export default {
  props:{
    arr:Array
  },

  computed:{
    //全选状态
    isAll:{
        set(val){
            this.$emit('changeAll',val)
        },
        get(){
            //返回所有小选框的状态，全true则返回true,否则返回false
            return this.arr.every(obj => obj.goods_state ===true)
        }

    },

    //总价
    allPrice(){
        return this.arr.reduce((sum,obj) => {
            if(obj.goods_state){//如果有数量，才累加
                sum+= obj.goods_count * obj.goods_price
            }
            return sum
        },0)
    }
  }
}
</script>

<style lang="less" scoped>
.my-footer {
  position: fixed;
  z-index: 2;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background: #fff;

  .price {
    color: red;
    font-weight: bold;
    font-size: 15px;
  }
  .footer-btn {
    min-width: 80px;
    height: 30px;
    line-height: 30px;
    border-radius: 25px;
    padding: 0;
  }
}
</style>