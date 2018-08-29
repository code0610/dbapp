<template>
  <vother-header title="广播">
    <img class="leftImage" src="../../../static/images/ic_status_search_user.png" slot="leftImage"/>
    <img class="rightImage" src="../../../static/images/ic_chat_green.png" slot="rightImage"/>
  </vother-header>

</template>

<script>
  import OtherHeader from '../Header/OtherHeader.vue';
  export default {
    name:"Broadcast",
    data:function(){
      return {

      }
    },
    components:{
      votherHeader : OtherHeader
    }
  }
</script>

<style>

</style>
