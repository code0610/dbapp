<style scoped>
  @import 'swiper/dist/css/swiper.css';
  .movie{
    height: auto;
    margin-bottom: 64px;
  }
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
  .movie-hot-item{
    padding:0px 15px 15px 15px;
  }
  .movie-top{
    width: 100%;
    height: 10px;
    background-color: #f3f2f2;
  }
  .swiper-slide{
    /*height: 50px;*/
    /*background-color: red;*/
    margin-right: 0.5rem;
  }
  .movie-poster{
    /*height: 300px;*/
    height: auto;
  }
  .movie-poster img{
    width: 100%;
  }
  .movie-poster-title{
    padding: 15px;
  }
  .movie-hotSearch-cont{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0px 5px 5px 5px;
  }
  .movie-hotSearch-cont-item{
    margin-bottom: 10px;
    height: auto;
    /*padding-bottom: 5px;*/
    /*border-bottom: solid 1px red;*/
  }
</style>

<template>
  <div class="movie">
      <div class="movie-top"></div>
      <div class="movie-hot">
          <div class="movie-hot-title">
            <h2>影院热映</h2>
            <div class="movie-hot-more"><div @click="loadingMoreHot()">更多</div><Icon size="24" type="ios-arrow-forward" /></div>
          </div>
          <div class="movie-hot-item">
            <!--<vmovie-item></vmovie-item>-->
            <div class="swiper-container">
              <div class="swiper-wrapper" >
               <!--<vmovie-item></vmovie-item>-->
                <div class="swiper-slide"><vmovie-item></vmovie-item></div>
                <div class="swiper-slide"><vmovie-item></vmovie-item></div>
                <div class="swiper-slide"><vmovie-item></vmovie-item></div>
                <div class="swiper-slide"><vmovie-item></vmovie-item></div>
                <div class="swiper-slide"><vmovie-item></vmovie-item></div>
                <div class="swiper-slide"><vmovie-item></vmovie-item></div>
                <div class="swiper-slide"><vmovie-item></vmovie-item></div>
                <div class="swiper-slide"><vmovie-item></vmovie-item></div>
              </div>
            </div>
          </div>
          <div class="movie-top" style="height: 15px;"></div>
      </div>
      <div class="movie-poster">
        <div>
          <img src="../../../static/images/banner/03.jpg" />
        </div>
        <div class="movie-poster-title">
          <h2>“借钱”，人际关系的试金石...</h2>
        </div>
        <div class="movie-top" style="height: 15px;"></div>
      </div>
    <div class="movie-hot">
      <div class="movie-hot-title">
        <h2>院线即将上映</h2>
        <div class="movie-hot-more"><div>更多</div><Icon size="24" type="ios-arrow-forward" /></div>
      </div>
      <div class="movie-hot-item">
        <!--<vmovie-item></vmovie-item>-->
        <div class="swiper-container">
          <div class="swiper-wrapper" >
            <!--<vmovie-item></vmovie-item>-->
            <div class="swiper-slide"><vmovie-item></vmovie-item></div>
            <div class="swiper-slide"><vmovie-item></vmovie-item></div>
            <div class="swiper-slide"><vmovie-item></vmovie-item></div>
            <div class="swiper-slide"><vmovie-item></vmovie-item></div>
            <div class="swiper-slide"><vmovie-item></vmovie-item></div>
            <div class="swiper-slide"><vmovie-item></vmovie-item></div>
            <div class="swiper-slide"><vmovie-item></vmovie-item></div>
            <div class="swiper-slide"><vmovie-item></vmovie-item></div>
          </div>
        </div>
      </div>
      <div class="movie-top" style="height: 15px;"></div>
    </div>
    <div class="movie-hotSearch">
      <div class="movie-hot-title">
        <h2>豆瓣热搜榜</h2>
        <div class="movie-hot-more"><div>更多</div><Icon size="24" type="ios-arrow-forward" /></div>
      </div>
      <div class="movie-hotSearch-cont">
        <div class="movie-hotSearch-cont-item"><vmovie-item></vmovie-item></div>
        <div class="movie-hotSearch-cont-item"><vmovie-item></vmovie-item></div>
        <div class="movie-hotSearch-cont-item"><vmovie-item></vmovie-item></div>
        <div class="movie-hotSearch-cont-item"><vmovie-item></vmovie-item></div>
        <div class="movie-hotSearch-cont-item"><vmovie-item></vmovie-item></div>
        <div class="movie-hotSearch-cont-item"><vmovie-item></vmovie-item></div>
        <div class="movie-hotSearch-cont-item"><vmovie-item></vmovie-item></div>
        <div class="movie-hotSearch-cont-item"><vmovie-item></vmovie-item></div>
        <div class="movie-hotSearch-cont-item"><vmovie-item></vmovie-item></div>
        <div class="movie-hotSearch-cont-item"><vmovie-item></vmovie-item></div>
        <div class="movie-hotSearch-cont-item"><vmovie-item></vmovie-item></div>
        <div class="movie-hotSearch-cont-item"><vmovie-item></vmovie-item></div>
      </div>
    </div>
  </div>

</template>

<script>
  import MovieItem from "@/components/common/MovieItem";
  import $http from "../../util/util";
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
    },
    methods:{
      loadingMoreHot:function(){
        $http.util.toRequestGet("http://wthrcdn.etouch.cn/weather_mini?city=北京",{},this.setDataForMovieHot,this)
      },
//      toRequestGet:function(url,requestData,setDatFun){
//        console.log(this);
//        this.$http.get(url,requestData)
//          .then(function(rel){
//            setDatFun(rel);//回调函数  处理数据
//          },function(){
//            alert("网络加载不给力，请重新加载..")
//          })
//      },
      setDataForMovieHot:function(rel){
        console.log(rel);
      }
    }
  }
</script>

