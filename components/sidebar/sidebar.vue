<template>
  <aside class="app-sidebar">
    <ul class="app-sidebar__container">
      <li>
        <a href="#/" class="active"><div class="app-sidebar__icon app-sidebar__icon--dashboard"></div>工作台</a>
      </li>
    </ul>
  </aside>
</template>


<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  .app-sidebar{
    position: fixed;
    top: 0;
    bottom: 0;
    width: 200px;
    min-width: 200px;
    overflow-y: auto;
    border-right: 1px solid #eee;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background: #fff;
    z-index: 2;
    padding-bottom: 50px;
  }
  .app-sidebar__container {
    padding: 25px 15px;
    li {
      position: relative;
      margin-bottom: 19px;
      &:hover {
        background: #f8f8f8;
      }
    }
    a {
      display: block;
      color: #555;
      font-size: 14px;
      height: 36px;
      line-height: 36px;
      text-decoration: none;
      padding-left: 50px;
      &.active {
        background: #f8f8f8;
        border-radius: 2px;
      }
    }
  }
  .app-sidebar__icon {
    position: absolute;
    width: 24px;
    height: 24px;
    top: 6px;
    left: 15px;
    background: url(https://img.yzcdn.cn/public_files/2017/08/30/c589d973a565e25102d0fd3c0e55b5f6.png) no-repeat;
  }
  @media not all, only screen and (-webkit-min-device-pixel-ratio: 1.5), not all, not all{
    .app-sidebar__icon {
      background-image: url(https://img.yzcdn.cn/public_files/2017/08/30/0098c38681f469ecccd154a91d3bf1d0.png);
      background-size: cover;
    }
  }
  .app-sidebar__icon--dashboard {
    background-position: 0 0;
  }
</style>

