
<template>
  <div class="movieItem">
    <img src="../../../static/images/banner/01.jpg" class="movieItem_img"/>
    <h3 class="movieItem_title">加勒比海盗5:...</h3>
    <div><Rate allow-half v-model="valueHalf"/><span class="movieItem_ava">7.8</span></div>
  </div>

</template>

<script>
    export default{
      name:"MovieItem",
      data:function(){
        return {
          valueHalf:3.5
        }
      }
    }
</script>

<style>
  .movieItem{
    display: flex;
    flex-direction: column;
    width: 7rem;
    height: auto;
  }
  .movieItem_img{
    width: 100%;
    height: 170px;
  }
  .movieItem_title{
    margin-top: 5px;
  }
  /** 星星样式修改 **/
  .ivu-rate{
    font-size: 14px;
  }
   .ivu-rate-star{
    margin-right: 0px;
  }
  .movieItem_ava{
    color: #858585;
    font-weight: 700;
    font-size: 14px;
    margin-left: 0.4rem;
  }
</style>
