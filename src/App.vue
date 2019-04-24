<template>
  <keep-alive exclude="detail">
    <router-view></router-view>
  </keep-alive>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="less">
@import "./styles/base.less";
</style>