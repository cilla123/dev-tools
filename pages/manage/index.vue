<template>
  <div class="page-dashboard clearfix">
    <div class="main">
      <div>
        <h4 class="module-title">常用功能</h4>
        <row>
          <i-col span="6">
            <a class="wm-plugin__setting-item vertical-middle" href="/manage/timestamp"><div class="icon icon-shi">时</div><span>时间工具</span></a>
          </i-col>
          <i-col span="6">
            <a class="wm-plugin__setting-item vertical-middle" href="/manage/translate"><div class="icon icon-fanyi">译</div><span>在线翻译</span></a>
          </i-col>
          <i-col span="6">
            <a class="wm-plugin__setting-item vertical-middle" href="/manage/idcard"><div class="icon icon-shen">身</div><span>身份证校验</span></a>
          </i-col>
          <i-col span="6">
            <a class="wm-plugin__setting-item vertical-middle" href="javascript:;"><div class="icon icon-shi">时</div><span>时间戳转换</span></a>
          </i-col>
        </row>
        <!-- <row class="mt-10">
          <i-col span="6">
            <a class="wm-plugin__setting-item vertical-middle" href="/manage/timestamp"><div class="icon icon-shi">时</div><span>时间工具</span></a>
          </i-col>
          <i-col span="6">
            <a class="wm-plugin__setting-item vertical-middle" href="/manage/translate"><div class="icon icon-fanyi">译</div><span>在线翻译</span></a>
          </i-col>
          <i-col span="6">
            <a class="wm-plugin__setting-item vertical-middle" href="javascript:;"><div class="icon icon-shi">时</div><span>时间戳转换</span></a>
          </i-col>
          <i-col span="6">
            <a class="wm-plugin__setting-item vertical-middle" href="javascript:;"><div class="icon icon-shi">时</div><span>时间戳转换</span></a>
          </i-col>
        </row> -->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    head: {
      title: "工作台 - BenProduction"
    },
  }
</script>

<style lang="scss" scoped>
  .module-title {
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 10px;
  }
  .page-dashboard .main .wm-plugin__setting-item {
    overflow: hidden;
    display: block;
    margin-right: 2px;
    height: 64px;
    text-align: center;
    background-color: #f8f8f8;
    span {
      font-size: 14px;
      color: #333;
    }
  }
  .vertical-middle:before {
    content: "";
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }
  .page-dashboard .main .wm-plugin__setting-item .icon {
    display: inline-block;
    margin-right: 15px;
    width: 24px;
    height: 24px;
    border-radius: 4px;
    font-size: 12px;
    line-height: 2em;
    color: #fff;
    font-weight: 700;
    text-align: center;
    vertical-align: middle;
    &.icon-shi {
      background: #0c9;
    }
    &.icon-fanyi {
      background: #fc0;
    }
    &.icon-shen {
      background: #f44;
    }
  }
  .page-dashboard .main .wm-plugin__setting-item:hover {
    background-color: #f2f2f2;
  }
  .mt-10{
    margin-top: 3px; 
  }
</style>


