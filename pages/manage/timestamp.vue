<template>
  <div>
    <topbar :pageRouterConfig="topbarRouterConfig"></topbar>
    <div class="content">
      <!-- 当前时间 -->
      <div class="content-block">
        <label>现在的Unix时间戳(Unix timestamp)是：</label>
        <span class="now-timestamp">{{ nowTimeStamp }}</span>
        <i-button type="info" class="action-btn" @click="startCutdownTimeStamp">开始</i-button>
        <i-button type="info" class="action-btn" @click="stopCutdownTimeStamp">暂停</i-button>
        <i-button type="info" class="action-btn" @click="refreshCutdownTimeStamp">刷新</i-button>
      </div>
      <!-- 时间戳转北京时间 -->
      <div class="content-block">
        <label>Unix时间戳（Unix timestamp）：</label>
        <i-input class="time-input mr-10" v-model="unixTimestamp1" />
        <i-select v-model="secToMsecModel1" class="change-select mr-10">
          <i-option v-for="(item, index) in secToMsec" :key="index" :value="item.value">{{ item.label }}</i-option>
        </i-select>
        <i-button type="info" class="mr-10" @click="changeBeijingTime">转换成北京时间</i-button>
        <i-input class="time-input mr-10" v-model="beijingTime1" readonly/>        
      </div>
      <!-- 北京时间转时间戳 -->
      <div class="content-block">
        <label>北京时间（年-月-日 时:分:秒）：</label>
        <i-input class="time-input mr-10" v-model="beijingTime2" />
        <i-button type="info" class="mr-10" @click="changeUnixTimestamp">转换成Unix时间戳</i-button>
        <i-input class="time-input mr-10" v-model="unixTimestamp2" readonly/>        
        <i-select v-model="secToMsecModel2" class="change-select mr-10">
          <i-option v-for="(item, index) in secToMsec" :key="index" :value="item.value">{{ item.label }}</i-option>
        </i-select>
      </div>
    </div>
  </div>
</template>

<script>

  import Topbar from '../../components/topbar/topbar'
  import { dateFormat, getTimestamp } from 'happy-utils/date'

  export default {
    components: {
      Topbar
    },
    head: {
      title: "工作台 - BenProduction"
    },
    data(){
      return {
        // 顶部页面路由
        topbarRouterConfig: [{
          name: "Unix时间戳",
          url: "/manage/timestamp"
        }],
        // 倒计时标记位
        cutdownFlag: false,
        // 当前的时间戳
        nowTimeStamp:  Math.floor(new Date().getTime() / 1000),
        // 定期器
        currentInterval: '',
        // 秒/毫秒选择框
        secToMsecModel1: 1,
        secToMsecModel2: 1,
        secToMsecModel3: 1,
        secToMsec: [{label: "秒", value: 1}, {label: "毫秒", value: 2}],
        // unix时间戳（秒）
        unixTimestamp1: Math.floor(new Date().getTime() / 1000),
        unixTimestamp2: '',
        // 北京时间
        beijingTime1: '',
        beijingTime2: dateFormat(new Date().getTime())
      }
    },
    created(){
      this.startCutdownTimeStamp()
    },
    methods: {
      // 获取当前的时间戳
      getNowTimeStamp(){
        this.nowTimeStamp = Math.floor(new Date().getTime() / 1000)
      },
      startCutdownTimeStamp(){
        if (this.cutdownFlag) return false
        this.currentInterval = setInterval(() => {
          this.cutdownFlag = true
          this.getNowTimeStamp()
        })
      },
      // 暂停倒计时
      stopCutdownTimeStamp(){
        clearInterval(this.currentInterval)
        this.cutdownFlag = false
      },
      // 刷新倒计时
      refreshCutdownTimeStamp(){
        this.getNowTimeStamp()
      },
      // 时间戳转北京时间
      changeBeijingTime(){
        if (this.secToMsecModel1 === 1) {
          this.beijingTime1 = dateFormat(Math.floor(this.unixTimestamp1 * 1000))
        }else {
          this.beijingTime1 = dateFormat(this.unixTimestamp1)
        }
      },
      // 北京时间转时间戳
      changeUnixTimestamp(){
        if (this.secToMsecModel2 === 1) {
          this.unixTimestamp2 = Math.floor(getTimestamp(this.beijingTime2) / 1000)
        }else {
          this.unixTimestamp2 = getTimestamp(this.beijingTime2)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .content{
    padding: 15px 30px;
    box-sizing: border-box;
  }
  .content-block{
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    .time-input{
      width: 150px;
    }
    .change-select{
      width: 60px;
    }
    .now-timestamp{
      width: 120px;
      margin-right: 10px;
      padding: 5px;
      border: 1px solid #ddd;
      border-radius: 5px;
    }
    .action-btn{
      margin-right: 10px;
    }
    .mr-10{
      margin-right: 10px;
    }
  }
</style>


