/**
 * Created by Mr.xu on 2018/8/30.
 */
var dbutil = {
  toRequestGet:function(url,requestData,setDatFun,that){
    console.log(this);
    that.$http.get(url,requestData)
      .then(function(rel){
        setDatFun(rel);//回调函数  处理数据
      },function(){
        alert("网络加载不给力，请重新加载..")
      })
  }
}

export  default {
  util:dbutil
}


