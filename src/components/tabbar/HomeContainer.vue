<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotulist" :key="item.url">
        <img :src="item.img" alt />
      </mt-swipe-item>
    </mt-swipe>home
  </div>
</template>
<script>
export default {
  data() {
    return {
      lunbotulist: []
    };
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    getLunbotu() {
      this.$http.get("http://localhost/lunbotu/lunbotu/get").then(result => {
        console.log(result.body);
        if (result.body.code === 0) {
          // 成功了
          this.lunbotulist = result.body.message;
        } else {
          // 失败的
          Toast("加载轮播图失败。。。");
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    &:nth-child(1) {
      background-color: red;
    }
    &:nth-child(2) {
      background-color: blue;
    }
    &:nth-child(3) {
      background-color: cyan;
    }

    img {
      height: 100%;
      width: 100%;
    }
  }
}
</style>