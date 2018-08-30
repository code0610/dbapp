<template>
  <div id="app">
    <div><router-view></router-view></div>
    <div class="app-foot">
      <div class="app-foot-item" v-for="(item,index) in tabs" @click="onShow(index)">
        <div>
          <img v-if="!item.isShow" :src="'../static/images/'+item.icon_1+'.png'" />
          <img v-if="item.isShow" :src="'../static/images/'+item.icon_2+'.png'" />
        </div>
        <div :class="{showColor:item.isShow}">{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data:function(){
    return{
      tabs:[
        {title:"首页",icon_1:"ic_tab_home_normal",icon_2:"ic_tab_home_active",isShow:true,toUrl:"home"},
        {title:"书影音",icon_1:"ic_tab_subject_normal",icon_2:"ic_tab_subject_active",isShow:false,toUrl:"book"},
        {title:"广播",icon_1:"ic_tab_status_normal",icon_2:"ic_tab_status_active",isShow:false,toUrl:"broadcast"},
        {title:"小组",icon_1:"ic_tab_group_normal",icon_2:"ic_tab_group_active",isShow:false,toUrl:"group"},
        {title:"我的",icon_1:"ic_tab_profile_normal",icon_2:"ic_tab_profile_active",isShow:false,toUrl:"my"}
      ]
    }
  },
  methods:{
    onShow:function(index){
      for(var i = 0;i<this.tabs.length;i++){
        this.tabs[i].isShow = false;
      }
      this.tabs[index].isShow = true;
      this.$router.push(this.tabs[index].toUrl);
    }
  },
  mounted:function(){
    this.$router.push("home")
  }
}
</script>

<style>
  .app-foot{
    display: flex;
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 64px;
    background-color: #f3f1f1;
    border-top: solid 1px #d4cfcf;
    z-index: 99999;
  }
  .app-foot-item{
    display: flex;
    flex-direction: column;
    width: 25%;
    height: 64px;
    text-align: center;
    align-content: center;
    justify-content: center;
  }
  .showColor{
    color: #42bd56;
  }
  .app-foot-item img{
    width: 2rem;
  }
</style>
