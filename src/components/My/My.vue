<template>
  <vother-header title="我的">
    <img class="rightImage" src="../../../static/images/ic_settings.png" slot="rightImage"/>
  </vother-header>
</template>

<script>
  import OtherHeader from "../Header/OtherHeader.vue";
  export default {
    name: "My",
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
