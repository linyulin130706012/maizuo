<template>
  <div>
    <h1>我是详情页</h1>
    <ul>
      <li>影片ID:{{filmInfo.filmId}}</li>
      <li>影片ID:{{filmInfo.name}}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "detail",
  data() {
    return {
      filmInfo: {}
    };
  },

  watch: {
    $route() {
      this.getFilmInfo();
    }
  },

  methods: {
    /**
     * 获取电影信息
     */
    getFilmInfo() {
      var url =
        "https://m.maizuo.com/gateway?filmId=" +
        this.$route.params.filmId +
        "&k=334105";
      axios
        .get(url, {
          headers: {
            "X-Client-Info":
              '{"a":"3000","ch":"1002","v":"5.0.4","e":"15546493441941325218476"}',
            "X-Host": "mall.film-ticket.film.info"
          }
        })
        .then(res => {
          var data = res.data;
          if (data.status == 0) {
            this.filmInfo = data.data.film;
          } else {
            alert(data.msg);
          }
        });
    }
  },

  created() {
    this.getFilmInfo();
  },

  // beforeRouteUpdate(to, from, next) {
  //   this.getFilmInfo();
  //   next();
  // }
};
</script>

<style lang="less">
</style>
