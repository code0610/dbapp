<template>
  <div class="homeHeader">
    <!--<Input prefix="ios-contact" placeholder="Enter name" style="width: 200px" />-->
    <Input suffix="md-qr-scanner" prefix="ios-search" placeholder="影视 图书 唱片 小组等" style="width: 80%;margin-top: 7px;margin-left: 1rem" size="large"/>
    <img src="../../../static/images/ic_chat_white.png" class="homeMsgImage"/>
  </div>
</template>

<script>
  export default {
    name: "HomeHeader",
    data:function(){
      return {

      }
    },


  }
</script>

<style>
  .homeHeader{
    width: 100%;
    height: 50px;
    background-color: #42bd56;
    position: relative;
  }
  .homeMsgImage{
    position: absolute;
    top: 10px;
    right: 0.6rem;
    width: 2rem;
    height: 2rem;
  }
</style>
