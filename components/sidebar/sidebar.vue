<template>
  <aside class="app-sidebar">
    <!-- 顶部信息 -->
    <div class="app-shop-overview">
      <div class="app-shop-overview__logo" style="background-image: url(https://img.yzcdn.cn/upload_files/2017/12/29/Fh3CdqKVK6P-EzXaBuONGvgrUY3W.png?imageView2/2/w/80/h/80/q/90/format/webp);"></div>
      <div class="app-shop-overview__container">
        <div class="app-shop-overview__shopname">Ben</div>
        <div>
          <div style="display: inline;">
            <div class="app-shop-overview__label">未认证</div>
          </div>
          <div style="display: inline;">
            <div class="app-shop-overview__label">工具网站</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 侧边栏 -->
    <ul class="app-sidebar__container">
      <li v-for="(item, index) in sideBarArray" :key="index">
        <a href="/manage" ><div class="app-sidebar__icon" :class="'app-sidebar__icon--' + item.icon"></div>{{ item.name }}</a>
      </li>
    </ul>

    <!-- 用户信息 -->
    <div class="app-userinfo">
      <div class="app-userinfo__avatar"></div>
      <div class="app-userinfo__phone">15217681427</div>
    </div>
  </aside>
</template>


<script>

  import sidebar from './sidebar.js'

  export default {
    data(){
      return {
        sideBarArray: []
      }
    },
    created(){
      this.renderSideBar()
    },
    methods: {
      // 渲染侧边栏
      renderSideBar(){
        this.sideBarArray = sidebar
      }
    }
  }
</script>

<style lang="scss" scoped>
  // 信息
  .app-shop-overview {
    margin: 25px 15px 0;
  }
  .app-shop-overview__logo {
    position: absolute;
    top: 25px;
    left: 15px;
    width: 40px;
    height: 40px;
    border-radius: 2px;
    background-size: cover;
    background-position: 50%;
  }
  .app-shop-overview__container {
    position: relative;
    padding-left: 50px;
    padding-bottom: 16px;
    border-bottom: 1px solid #eee;
  }
  .app-shop-overview__shopname {
    font-size: 14px;
    line-height: 14px;
    height: 14px;
    color: #333;
    font-weight: 700;
    margin-bottom: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .app-shop-overview__label {
    display: inline-block;
    font-size: 12px;
    line-height: 12px;
    color: #fff;
    border-radius: 1px;
    padding: 2px;
    background: #ccc;
    margin-right: 5px;
  }

  // 侧边栏
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
  .app-sidebar__icon--goods {
    background-position: 0 -24px;
  }
  .app-sidebar__icon--order {
    background-position: 0 -48px;
  }
  .app-sidebar__icon--statcenter {
    background-position: 0 -73px;
  }
  .app-sidebar__icon--scrm {
    background-position: 0 -97px;
  }
  .app-sidebar__icon--shop {
    background-position: 0 -120px;
  }
  .app-sidebar__icon--asset {
    background-position: 0 -144px;
  }
  .app-sidebar__icon--plugin {
    background-position: 0 -168px;
  }
  .app-sidebar__icon--profile {
    background-position: 0 -192px;
  }

  // 用户信息
  .app-userinfo {
    position: fixed;
    padding: 16px 0;
    border-top: 1px solid #eee;
    margin: 0 15px;
    bottom: 0;
    width: 170px;
    background: #fff;
    cursor: pointer;
  }
  .app-userinfo__avatar {
    position: absolute;
    top: 16px;
    left: 15px;
    width: 18px;
    height: 18px;
    background: url(https://img.yzcdn.cn/public_files/2017/04/01/64a5b3fd10d3d11d726a09d07a5d9aca.png) no-repeat;
    background-position: 0 -175px;
  }
  @media not all, only screen and (-webkit-min-device-pixel-ratio: 1.5), not all, not all{
    .app-userinfo__avatar {
      background-image: url(https://img.yzcdn.cn/public_files/2017/04/01/c7e68db7abb4b3f9f06feda233f0b5d0.png);
      background-size: 18px 193px;
    }
  }
  .app-userinfo__phone {
    color: #555;
    font-size: 14px;
    line-height: 18px;
    margin-left: 50px;
  }
</style>

