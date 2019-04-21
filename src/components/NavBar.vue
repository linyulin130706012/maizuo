<template>
  <ul class="nav-bar">
    <li class="films" v-for="(tab,index) in tabs" :key="index">
      <router-link :to="tab.href" active-class="active">
        <i :class="['iconfont',tab.icon]"></i>
        <span>{{tab.name}}</span>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array
    }
  }
};
</script>

<style lang="less">
@import "../styles/common/mixins.less";
// nav-bar
.nav-bar {
  .border-1-top;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  padding: 0;
  margin: 0;
  z-index: 100;
  background: #fff;
  list-style: none;

  li {
    width: 25%;
    text-align: center;
  }

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 49px;
    line-height: 28px;
    position: relative;
    color: #797d82;

    .iconfont {
      font-size: 22px;
    }

    span {
      font-size: 10px;
      line-height: 12px;
      word-break: keep-all;
    }

    &.active {
      color: #ff5f16;
    }
  }
}
</style>