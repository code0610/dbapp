<template>
  <Other-header title="书影音">
    <img class="leftImage" src="../../../static/images/ic_actionbar_search_icon.png" slot="leftImage"/>
    <img class="rightImage" src="../../../static/images/ic_chat_green.png" slot="rightImage"/>
  </Other-header>

</template>

<script>
  import OtherHeader from "../Header/OtherHeader.vue";
  export default {
    name: "Book",
    data:function(){
      return {

      }
    },
    components:{
      OtherHeader:OtherHeader
    }
  }
</script>

<style>

</style>
