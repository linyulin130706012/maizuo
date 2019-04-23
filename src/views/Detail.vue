<template>
  <div>
    <h1>我是详情页</h1>
  </div>
</template>

<script>
export default {
  methods: {
    get() {
      // alert(this.$route.path.split("/film/")[1]);
    }
  },

  created() {
    this.get();
  }
};
</script>

<style lang="less">
</style>
