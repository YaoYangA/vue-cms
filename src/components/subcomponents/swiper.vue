<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotulist" :key="item.url">
        <img :src="item.img" alt :class="{'full':isFull}" />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
    props: ["lunbotulist","isFull"]
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
      // width: 100%;
    }
  }
}

.full {
  width: 100%;
}
</style>