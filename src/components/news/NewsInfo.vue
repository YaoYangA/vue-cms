<template>
    <div class="newsinfo-container">
        <!-- 大标题 -->
        <div class="title">{{newsinfo.title}}</div>
        <!-- 子标题 -->
        <p class="subtitle">
            <span>发表时间：{{newsinfo.addTime | dateFormat}}</span>
            <span>点击：{{newsinfo.click}}次</span>
        </p>

        <hr>

        <!-- 内容区域 -->
        <div class="content" v-html="newsinfo.digest"></div>

        <!-- 评论区 -->
    </div>
</template>
<script>
export default {
    data(){
        return {
            id:this.$route.params.id,
            newsinfo:{}
        }
    },
    created(){
        this.getNewsInfo()
    },
    methods:{
        getNewsInfo(){
            this.$http.get('news/news/get/'+this.id).then(result=>{
                if(result.body.code === 0){
                    this.newsinfo = result.body.message
                }else{
                    Toast("获取新闻详情失败！")
                }
            })
        }
    }
}
</script>
<style lang="scss">
.newsinfo-container {
  padding: 0 4px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .subtitle {
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
  .content {
    img {
      width: 100%;
    }
  }
}
</style>