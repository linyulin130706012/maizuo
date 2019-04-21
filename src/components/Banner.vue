<template>
  <div class="swiper-container billboards">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(banner ,index) in banners" :key="index">
        <img :src="banner.imgUrl" alt>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";

export default {
  props: {
    banners: {
      type: Array
    }
  },
  data() {
    return {
      swiper: null
    };
  },
  updated() {
    this.swiper = new Swiper(".swiper-container", {
      loop: true,
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
};
</script>

<style lang="less">
.swiper-container {
  width: 100%;
  height: 210px;
  img {
    width: 100%;
  }
  .swiper-pagination-bullet {
    background-color: #fff;
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    background-color: #f00;
  }
}
</style>