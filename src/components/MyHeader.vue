<template>
  <div class="my-header" :style="{backgroundColor:bgColor,color:fontColor}">{{title}}</div>
</template>

<script>

export default {
    //头部自定义
    props:{
        title:{//标题，必须是字符串，必须传值
            type:String,
            required:true
        },
        bgColor:{//背景色，必须是字符串
            type:String,
            
        },
        fontColor:{//字体颜色，必须是字符串，默认#fff
            type:String,
            default:'#fff'
        }
    }

}
</script>

<style lang="less" scoped>
  .my-header {
    
    height: 45px;
    line-height: 45px;
    text-align: center;
    background-color: #1d7bff;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2;
  }
</style>