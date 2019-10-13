<template>
  <div class="goods-list">
    <div class="goods-item" v-for="item in list" :key="item.id" @click="getDetil(item.id)">
      <img :src="item.imgUrl" />
      <h1 class="title">{{item.title}}</h1>
      <div class="info">
        <p class="price">
          <span class="now">¥{{item.sellPrice}}</span>
          <span class="old">¥{{item.marketPrice}}</span>
        </p>
        <p class="sell">
            <span>热卖中</span>
            <span>剩{{item.stockQuantity}}件</span>
        </p>
      </div>
    </div>

    <mt-button type="danger" size="large" @click="loadMore">加载更多</mt-button>
  </div>
</template>
<script>
export default {
    data(){
        return{
            pageIndex:1,
            list:[]
        }
    },
    created(){
        this.getPhotoList();
    },
    methods:{
        getPhotoList(){
            this.$http.get("good/goods/get/"+this.pageIndex).then(result =>{
                if(result.body.code===0){
                    this.list = this.list.concat(result.body.message) 
                }
            })
        },
        loadMore(){
            this.pageIndex++
            this.getPhotoList()
        },
        getDetil(id){
            this.$router.push({name:'goodinfo',params:{id}})
        }
    }
};
</script>
<style lang="scss" scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;

  .goods-item {
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
    img {
      width: 100%;
    }
    .title {
      font-size: 14px;
    }

    .info {
      background-color: #eee;
      p {
        margin: 0;
        padding: 5px;
      }
      .price {
        .now {
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
        .old {
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .sell {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
      }
    }
  }
}
</style>