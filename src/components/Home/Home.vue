<template>
  <div class="home">
    <vhome-header></vhome-header>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="./banner/01.jpg" /></div>
        <div class="swiper-slide"><img src="./banner/02.jpg" /></div>
        <div class="swiper-slide"><img src="./banner/03.jpg"/></div>
      </div>
    </div>
    <div class="home-hot">
      <div class="home-hot-text">热点</div>
    </div>
    <div class="home-hot-lists">
      <div class="home-hot-item" v-for="item in lists">
        <div class="home-hot-item-cont">
          <div class="home-hot-item-title">
              <h2>《加勒比海盗》14年老粉给你带来所有彩蛋和深埋梗</h2>
              <div style="color: #b7b4b4;">此评论送给那些不离不弃的老粉和船长杰克.斯派罗。</div>
          </div>
          <div class="home-hot-item-img">
              <img src="./media.jpg" />
          </div>
        </div>
        <div class="home-hot-item-hr"></div>
        <div class="author">作者:女神的秋裤</div>
      </div>
    </div>
  </div>
</template>

<script>
  import HomeHeader from "../Header/HomeHeader.vue";
  import Swiper from 'swiper';
  export default {
    name: "Home",
    data:function(){
      return{
        lists:[
          1,2,3
        ]
      }
    },
    components:{
      vhomeHeader:HomeHeader
    },
    mounted:function(){
      var mySwiper = new Swiper('.swiper-container', {
        autoplay: true,//可选选项，自动滑动
      })
    }
  }
</script>

<style scoped>
  @import 'swiper/dist/css/swiper.css';
  .swiper-slide{
    width: 100%;
  }
  .swiper-slide img{
    width: 100%;
  }
  .home-hot{
    padding: 10px 15px 0px 0px;
  }
  .home-hot-text{
    color: #ea7c7c;
    border-left: solid 2px red;
    padding-left: 15px;
    font-size: 18px;
    font-weight: 700;
  }
  .home-hot-lists{
    padding-bottom: 64px;
  }
  .home-hot-item{
    padding: 15px;
    border-bottom: solid 1px #eae7e7;
  }
  .home-hot-item-cont{
    display: flex;
  }
  .home-hot-item-title{
    width: 65%;
  }
  .home-hot-item-img{
    width: 35%;
  }
  .home-hot-item-img img{
    width: 6rem;
    margin-left: 1rem;
  }
  .home-hot-item-hr{
    width: 1rem;
    height: 1px;
    background-color: #c5c4c4;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .author{
    color: #d4d1d1;
    /*padding-top: 10px;*/
  }
</style>
