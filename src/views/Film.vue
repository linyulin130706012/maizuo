<template>
  <div>
    <Banner :banners="bannerList"></Banner>
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import axios from "axios";

export default {
  components: {
    Banner: Banner
  },

  data() {
    return {
      bannerList: []
    };
  },

  methods: {
    //请求轮播图数据
    getBannerList() {
      axios
        .get("https://m.maizuo.com/gateway?type=2&cityId=440300&k=7347501", {
          headers: {
            "X-Client-Info":
              '{"a":"3000","ch":"1002","v":"5.0.4","e":"15546493441941325218476"}',
            "X-Host": "mall.cfg.common-banner"
          }
        })
        .then(res => {
          // console.log(res.data);
          let data = res.data;
          if (data.status == 0) {
            this.bannerList = data.data;
          } else {
            // console.log(data.msg);
          }
        });
    }
  },

  created() {
    this.getBannerList();
  }
};
</script>
