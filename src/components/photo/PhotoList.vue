<template>
  <div>
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            :class="['mui-control-item', item.id==0? 'mui-active':'']"
            href="#item1mobile"
            data-wid="tab-top-subpage-1.html" v-for="item in cates" :key="item.id"
          >{{item.name}}</a>
        </div>
      </div>
    </div>

    <!-- 图片列表区域 -->
    <ul class="photo-list">
      <router-link v-for="item in photolist" :key="item.id" tag="li">
        <img v-lazy="item.imgUrl">
        <div class="info">
          <h1 class="info-title">{{ item.name }}</h1>
          <div class="info-body">{{ item.digest }}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
import mui from "../../lib/mui/js/mui.min.js";
export default {
  data() {
    return {
      cates: [], //分类
      photolist:[]
    };
  },
  created() {
    this.getAllCates();
  },
  mounted() {
    // 当 组件中的DOM结构被渲染好并放到页面中后，会执行这个 钩子函数
    // 如果要操作元素了，最好在 mounted 里面，因为，这里时候的 DOM 元素 是最新的
    // 2. 初始化滑动控件
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {
    getAllCates() {
      this.$http.get("photo/photo-type/get").then(result => {
        if (result.body.code === 0) {
          let all = {
            id: 0,
            name: "全部"
          };
          result.body.message.unshift(all);
          this.cates = result.body.message;
        }
      });
    },
    getPhotoList(cateId){
        this.$http.get("/photo/photo/get/"+cateId).then(result=>{
            if(result.body.code === 0){
                this.photolist = result.body.message
            }
        })
    }
  }
};
</script>
<style lang="less" scoped>
</style>