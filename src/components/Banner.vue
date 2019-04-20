<template>
  <div class="swiper-container billboards">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(banner ,index) in banners" :key="index">
        <img :src="banner.imgUrl" alt>
      </div>
      <!-- <div class="swiper-slide">
        <img src="https://static.maizuo.com/v5/upload/831f44034b9416bf2dd579f0921f676e.jpg" alt>
      </div>
      <div class="swiper-slide">
        <img src="https://static.maizuo.com/v5/upload/6a0c5b59de9107732da8edd7a0ed7142.jpg" alt>
      </div>-->
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