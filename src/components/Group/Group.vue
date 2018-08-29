<template>
  <vother-header title="小组">
    <img class="leftImage" src="../../../static/images/ic_actionbar_search_icon.png" slot="leftImage"/>
    <img class="rightImage" src="../../../static/images/ic_chat_green.png" slot="rightImage"/>
  </vother-header>

</template>

<script>
  import OtherHeader from '../Header/OtherHeader.vue';
  export default {
    name: "Group",
    data:function(){
      return {

      }
    },
    components:{
      votherHeader:OtherHeader
    }
  }
</script>

<style>

</style>
