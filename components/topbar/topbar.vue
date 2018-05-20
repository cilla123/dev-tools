<template>
  <div class="app-topbar">
    <div class="ben-breadcrumb ben-breadcrumb-nav" v-for="(item, index) in pageRouterConfig" :key="index">
      <a :href="item.url">{{ item.name }}</a>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      "pageRouterConfig": {
        type: Array,
        default: []
      }
    }
  }
</script>

<style lang="scss" scoped>
  .app-topbar {
    position: relative;
    height: 50px;
    background: #fff;
    border-bottom: 1px solid #eee;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .ben-breadcrumb {
    color: #333;
    font-size: 0;
    line-height: 0;
    padding: 15px 0;
  }
  .ben-breadcrumb {
    padding: 0 0 0 30px;
    line-height: 36px;
    background: #f8f8f8;
  }
  .ben-breadcrumb.ben-breadcrumb-nav {
    padding: 0;
  }
  .ben-breadcrumb.ben-breadcrumb-nav {
    background: transparent;
  }
  .app-topbar .ben-breadcrumb {
    display: inline-block;
    margin-left: 10px;
  }
  .ben-breadcrumb a, .ben-breadcrumb span {
    font-size: 14px;
    line-height: 1em;
    display: inline-block;
    vertical-align: middle;
    text-decoration: none;
  }
  .ben-breadcrumb a, .ben-breadcrumb span {
    color: #555;
    font-size: 12px;
  }
  .ben-breadcrumb.ben-breadcrumb-nav a {
    display: inline-block;
    height: 50px;
    line-height: 48px;
    padding: 0 20px;
    min-width: 0;
    border: none;
    background: transparent;
    font-size: 14px;
    color: #666;
    text-align: center;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
</style>


