<template>
  <div class="goodsinfo-container">

      <!-- 轮播图 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :lunbotulist="lunbotulist" :isFull="false"></swiper>
        </div>
      </div>
    </div>

    <!-- 商品购买区域 -->
    <div class="mui-card">
      <div class="mui-card-header">{{ goodsinfo.title }}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：<del>￥{{ goodsinfo.marketPrice }}</del>&nbsp;&nbsp;销售价：<span class="now_price">￥{{ goodsinfo.sellPrice }}</span>
          </p>
          <p>购买数量</p>
          <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input id="test" class="mui-input-numbox" type="number" value="5" />
					<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
				</div>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>

    <!-- 商品参数区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{ goodsinfo.id }}</p>
          <p>库存情况：{{ goodsinfo.stockQuantity }}件</p>
          <p>上架时间：{{ goodsinfo.addTime | dateFormat }}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
import swiper from "../subcomponents/swiper.vue";

export default {
  data() {
    return {
        id:this.$route.params.id,
        lunbotulist:[],
        goodsinfo:{}
    };
  },
  created() {
      this.getLunbotu();
      this.getGoodInfo()
  },
  methods: {
    getLunbotu() {
      this.$http.get("lunbotu/lunbotu/get").then(result => {
        console.log(result.body);
        if (result.body.code === 0) {
          // 成功了
          this.lunbotulist = result.body.message;
        } else {
          // 失败的
          Toast("加载轮播图失败。。。");
        }
      });
    },
    getGoodInfo(){
        this.$http.get("good/goods/getById/"+this.id).then(result =>{
            if(result.body.code===0){
                this.goodsinfo = result.body.message
            }
        })
    },
    goComment(id){
        this.$router.push({name:'goodcomment',params:{id}})
    },
    goDesc(id){
        this.$router.push({name:'gooddesc',params:{id}})
    }
  },
  components: {
    swiper
  }
};
</script>
<style lang="scss" scoped>
.goodsinfo-container {
  background-color: #eee;
  overflow: hidden;

  .now_price {
    color: red;
    font-size: 16px;
    font-weight: bold;
  }

  .mui-card-footer {
    display: block;
    button {
      margin: 15px 0;
    }
  }

  .ball {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    z-index: 99;
    top: 390px;
    left: 146px;
  }
}
</style>