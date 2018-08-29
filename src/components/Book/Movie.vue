<style>
  @import 'swiper/dist/css/swiper.css';
  .movie-hot-title{
    display: flex;
    justify-content: space-between;
    padding: 15px;
    background-color: white;
  }
  .movie-hot-more{
    font-size: 16px;
    color: #42bd56;
    display: flex;
    /*font-weight: 700;*/
  }
  .movie-top{
    width: 100%;
    height: 10px;
    background-color: #f3f2f2;
  }
  .swiper-slide{
    height: 50px;
    background-color: red;
  }
</style>

<template>
  <div class="movie">
      <div class="movie-top"></div>
      <div class="movie-hot">
          <div class="movie-hot-title">
            <h2>影院热映</h2>
            <div class="movie-hot-more"><div>更多</div><Icon size="24" type="ios-arrow-forward" /></div>
          </div>
          <div class="movie-hot-item">
            <div class="swiper-container">
              <div class="swiper-wrapper" >
                <div class="swiper-slide">1</div>
                <div class="swiper-slide">2</div>
                <div class="swiper-slide">3</div>
                <div class="swiper-slide">1</div>
                <div class="swiper-slide">2</div>
                <div class="swiper-slide">3</div>
                <div class="swiper-slide">1</div>
                <div class="swiper-slide">2</div>
                <div class="swiper-slide">3</div>
              </div>
            </div>
          </div>
      </div>
  </div>

</template>

<script>
  import MovieItem from "@/components/common/MovieItem";
  import Swiper from "swiper";

  export default {
    name: "Movie",
    data:function(){
      return {
        movieItem:[1,2,3]
      }
    },
    components:{
      vmovieItem:MovieItem
    },
    mounted:function(){
      var mySwiper = new Swiper('.swiper-container',{
        slidesPerView : 3,
        slidesPerGroup : 3,
      })
    }
  }
</script>

