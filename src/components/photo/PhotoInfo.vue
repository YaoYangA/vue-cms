<template>
  <div class="photoinfo-container">
    <h3>{{ photoinfo.name }}</h3>
    <p class="subtitle">
      <span>发表时间：{{ photoinfo.addTime | dateFormat }}</span>
      <span>点击：{{ photoinfo.click }}次</span>
    </p>

    <hr />

    <!-- 缩略图区域 -->
    <div class="thumbs">
      <vue-preview :slides="list"></vue-preview>
    </div>

    <!-- 图片内容区域 -->
    <div class="content" v-html="photoinfo.digest"></div>

    <!-- 放置一个现成的 评论子组件 -->
    <cmt-box :id="id"></cmt-box>
  </div>
</template>
<script>
import comment from "../../components/subcomponents/comment.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      photoinfo: {},
      list: []
    };
  },
  created() {
    this.getPhotoInfo();
  },
  methods: {
    getPhotoInfo() {
      this.$http.get("photo/photo/getById/" + this.id).then(result => {
        if (result.body.code === 0) {
          this.photoinfo = result.body.message;
          this.list = result.body.message.detail.split(",");

          let array = new Array();
          this.list.forEach(item => {
            let el = {
              msrc: item,
              w: 600,
              h: 400
            };
            array.push(el);
          });
          this.list = array;
        }
      });
    }
  },
  components: {
    "cmt-box": comment
  }
};
</script>
<style lang="less" scoped>
.photoinfo-container {
  padding: 3px;
  h3 {
    color: #26a2ff;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }

  .content {
    font-size: 13px;
    line-height: 30px;
  }

  .thumbs {
    display: flex;
    my-gallery{
        display: flex;
        flex-wrap: wrap;
        figure{
            margin: 10px;
            box-shadow: 0 0 10px #cccccc;
            img{
                width: 100px;
                vertical-align: middle;
            }
        }
    }
  }
  .thumbs >div{
      width: 100%;
  }
}
</style>