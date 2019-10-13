<template>
  <div class="goodsdesc-container">
    <h3>{{ info.title }}</h3>

    <hr />

    <div class="content" v-html="info.goodDesc"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      info: {} // 图文数据
    };
  },
  created() {
    this.getGoodsDesc();
  },
  methods: {
    getGoodsDesc() {
      this.$http.get("good/goods/getById/"+this.$route.params.id).then(result =>{
            if(result.body.code===0){
                this.info = result.body.message
            }
        })
    }
  }
};
</script>
<style lang="scss" scoped>
.goodsdesc-container {
  padding: 4px;
  h3 {
    font-size: 16px;
    color: #226aff;
    text-align: center;
    margin: 15px 0;
  }
  .content{
    img{
      width: 100%;
    }
  }
}
</style>