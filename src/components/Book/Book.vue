<template>
  <div class="book">
    <Other-header title="书影音">
      <img class="leftImage" src="../../../static/images/ic_actionbar_search_icon.png" slot="leftImage"/>
      <img class="rightImage" src="../../../static/images/ic_chat_green.png" slot="rightImage"/>
    </Other-header>
    <div class="book-tab">
      <div class="book-tab-item" v-for="(item,index) in bookTab" :class="{tabactive:item.isShow}" @click="showTab(index)">
        {{ item.title }}
      </div>
    </div>
    <div class="book-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import OtherHeader from "../Header/OtherHeader.vue";
  export default {
    name: "Book",
    data:function(){
      return {
        bookTab:[
          {title:"电影",isShow:true,toUrl:"movie"},
          {title:"读书",isShow:false,toUrl:"bookItem"},
          {title:"电视",isShow:false,toUrl:"tv"},
          {title:"同城",isShow:false,toUrl:"sameCity"},
          {title:"音乐",isShow:false,toUrl:"music"}
        ]
      }
    },
    components:{
      OtherHeader:OtherHeader
    },
    methods:{
      showTab:function(index){
        for(var i = 0;i<this.bookTab.length;i++){
          this.bookTab[i].isShow = false;
        }
        this.bookTab[index].isShow = true;
        this.$router.push(this.bookTab[index].toUrl)
      }
    }
  }
</script>

<style>
  .book-tab{
    display: flex;
    width: 100%;
  }
  .book-tab-item{
    width:25%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 16px;
    border-bottom: solid 1px #d5d8d6;
  }
  .tabactive{
    color: #42bd56;
    border-bottom: solid 1px #42bd56;
  }
  .book-content{
    /*padding-top: 10px;*/
    /*background-color: #f3f2f2;*/
  }
</style>
