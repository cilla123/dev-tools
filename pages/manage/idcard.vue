<template>
  <div>
    <topbar :pageRouterConfig="topbarRouterConfig"></topbar>   
    <div class="content">
      <div class="content-item">
        <span>身份证：</span>
        <i-input class="item-input" v-model="idCard" placeholder="请输入身份证"></i-input>
        <i-button @click="getInfo" class="item-btn">获取</i-button>
      </div>
      <div class="content-item">
        <span>所在地：</span>
        <i-input readonly class="item-input" v-model="location"></i-input>
      </div>
      <div class="content-item">
        <span>出生日期：</span>
        <i-input readonly class="item-input" v-model="birth"></i-input>
      </div>
      <div class="content-item">
        <span>性别：</span>
        <i-input readonly class="item-input" v-model="sex"></i-input>
      </div>
    </div>
  </div>
</template>

<script>

  import Topbar from '../../components/topbar/topbar'   
  import { IDCardPaser } from '../../static/js/utils/idcard/IDCardPaser'

  export default {
    head: {
      title: "工作台 - BenProduction"
    },
    components: {
      Topbar
    },
    data(){
      return {
        // 顶部页面路由
        topbarRouterConfig: [{
          name: "身份证校验",
          url: "/manage/idcard"
        }],
        // 身份证
        idCard: '',
        // 所在地
        location: '',
        // 出生日期
        birth: '',
        // 性别
        sex: ''
      }
    },
    methods: {
      getInfo(){
        const idCardPaser = new IDCardPaser();
        const info = idCardPaser.getInfo(this.idCard);
        if (!info) {
          this.$Message.error('请输入正确的身份证号码！');          
          return false
        }
        this.location = info.addr
        this.birth = info.birth
        this.sex = info.sex
      }
    }
  }
</script>

<style lang="scss" scoped>
  .content{
    padding: 20px;
  }
  .content-item{
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    span{
      width: 60px;
    }
    .item-input {
      width: 220px;
    }
    .item-btn{
      margin-left: 10px;
    }
  }
</style>


