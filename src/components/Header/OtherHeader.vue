<template>
  <div class="otherHeader">
      <h2 class="otherHeader-title">{{ title }}</h2>
      <!--<img class="leftImage" src="../../../static/images/ic_actionbar_search_icon.png" />-->
      <!--<img class="rightImage" src="../../../static/images/ic_chat_green.png" />-->
      <slot name="leftImage"></slot>
      <slot name="rightImage"></slot>
  </div>
</template>

<script>
  export default {
    name: "OtherHeader",
    data:function(){
      return {

      }
    },
    props:['title']
  }
</script>

<style scoped>
  .otherHeader{
    position: relative;
    height: 50px;
    width: 100%;
    background-color: #f3f1f1;
    text-align: center;
    line-height: 50px;
    border-bottom: solid 1px #e8e2e2;
  }
  .leftImage{
    position: absolute;
    right: 4rem;
    top: 13px;
    width: 1.5rem;
    height: 1.5rem;
  }
  .rightImage{
    position: absolute;
    right: 1rem;
    top: 13px;
    width: 1.5rem;
    height: 1.5rem;
  }
</style>
