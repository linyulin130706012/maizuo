<template>
  <div class="film-list">
    <Banner :banners="bannerList"></Banner>

    <div class="tabs-bar-wrapper" :class="{fixed:isFixedTabs}">
      <div class="tabs-bar">
        <ul class="tabs-nav">
          <li
            style="width: 50%;"
            v-for="item in filmTypes"
            :key="item.id"
            :class="{active:currentType==item.id}"
            @click="changeType(item)"
          >
            <span>{{item.name}}</span>
          </li>
          <div class="tab-ink-bar-wrapper" :style="tabInkBarStyle">
            <span class="tab-ink-bar" style="width: 56px;"></span>
          </div>
        </ul>
      </div>
    </div>

    <router-view></router-view>
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
      isFixedTabs: false,
      bannerList: [],
      filmTypes: [
        {
          id: "nowPlaying",
          name: "正在热映",
          href: "/films/nowPlaying"
        },
        {
          id: "comingSoon",
          name: "即将上映",
          href: "/films/comingSoon"
        }
      ],
      currentType: this.$route.path.split("/films/")[1]
    };
  },

  computed: {
    tabInkBarStyle() {
      let obj = {
        transform: "translate3d(0%, 0px, 0px)",
        width: "50%"
      };

      if (this.currentType == "comingSoon") {
        obj.transform = "translate3d(100%, 0px, 0px)";
      }

      return obj;
    }
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
    },
    // 滚动事件
    onScroll() {
      let scrollTop = document.documentElement.scrollTop;

      if (scrollTop >= 210) {
        this.isFixedTabs = true;
      } else {
        this.isFixedTabs = false;
      }
    },
    /**
     * 切换影片类型
     * @param {Object} item 当前需要切换的类型对象
     */
    changeType(item) {
      this.currentType = item.id;
      this.$router.push(item.href);
    }
  },

  created() {
    this.getBannerList();
  },

  activated() {
    window.addEventListener("scroll", this.onScroll);
  },

  deactivated() {
    window.removeEventListener("scroll", this.onScroll);
  }
};
</script>

<style lang="less">
@import "../styles/common/mixins.less";
.film-list {
  padding-bottom: 50px;
  .city-fixed {
    position: absolute;
    top: 18px;
    left: 7px;
    color: #fff;
    z-index: 10;
    font-size: 13px;
    background: rgba(0, 0, 0, 0.2);
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    padding: 0 5px;

    i {
      font-size: 10px;
    }
  }
}
.tabs-bar-wrapper {
  position: relative;
  z-index: 100;
  width: 100%;
  overflow-x: hidden;
  background: #fff;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  &.fixed {
    position: fixed;
    top: 0;
  }
  .tabs-bar {
    .border-1-bottom;
    height: 49px;
    display: flex;
    align-items: center;
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    transition: transform 0.2s cubic-bezier(0.35, 0, 0.25, 1);
    position: relative;

    .tabs-nav {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      position: relative;
      width: 100%;

      li {
        flex-shrink: 0;
        color: #191a1b;
        text-align: center;
        height: 16px;
        line-height: 16px;
        font-size: 14px;
        cursor: pointer;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

        &.active {
          color: #ff5f16;
        }
      }

      .tab-ink-bar-wrapper {
        position: absolute;
        margin: auto;
        top: 30px;
        left: 0;
        transform: translateZ(0);
        transition: transform 0.2s cubic-bezier(0.35, 0, 0.25, 1);

        .tab-ink-bar {
          border-bottom: 2px solid #ff5f16;
          border-radius: 20px;
          display: block;
          margin: auto;
        }
      }
    }
  }
}
</style>
