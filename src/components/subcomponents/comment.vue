<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr/>
        <textarea placeholder="请输入要bb的内容（最多吐槽120字）" maxlength="120" v-model="msg"></textarea>
        
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,i) in comments" :key="item.addTime">
                <div class="cmt-title">
                    第{{i+1}}楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：{{item.addTime | dateFormat}}
                </div>
                <div class="cmt-body">
                    {{item.content}}
                </div>
            </div>
        </div>
        <mt-button type="primary" size="large" @click="add">发表评论</mt-button>
        <mt-button type="danger" size="large" plain @click="loadMore">加载更多</mt-button>
    </div>
</template>
<script>
import {Toast} from "mint-ui"
export default {
    data(){
        return {
            pageIndex:1,
            comments:[],
            msg:""
        }
    },
    created(){
        this.getComments();
    },
    methods:{
        getComments(){
            this.$http.get('comment/comment/get/'+this.id+"?pageIndex="+this.pageIndex).then(result => {
                if(result.body.code === 0 ){
                    this.comments = this.comments.concat(result.body.message);
                }
            })
        },
        loadMore(){
            this.pageIndex ++;
            this.getComments()
        },
        add(){
            if(this.msg.length === 0){
                return Toast('评论内容不能为空')
            }

            var commentData ={
                'artid':this.id,
                'content':this.msg,
                'addTime':Date.now()
            }

            this.$http.post("comment/comment/add",commentData).then(result => {
                if(result.body.code === 0){
                    this.comments.unshift(commentData)
                }
            })

        }
    },
    props:["id"]
}
</script>
<style lang="less" scoped>
.cmt-container{
   h3{
       font-size: 18px;
   }

   textarea{
       font-size: 14px;
       height: 85px;
       margin: 0;
   }

   .cmt-list{
       margin: 5px 0;
       .cmt-item{
           font-size: 13px;
           .cmt-title{
               line-height: 30px;
               background-color: #ccc;
           }
           .cmt-body{
               line-height: 35px;
               text-indent: 2em;
           }
       }

   }
}
</style>