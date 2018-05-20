<template>
  <div class="app">
    <div class="app-root"></div>
    <sidebar></sidebar>
    <div class="app-container">
      <nuxt />
    </div>
  </div>
</template>

<script>

  import Sidebar from '../components/sidebar/sidebar.vue'

  export default {
    components: {
      Sidebar
    }
  }
</script>


<style lang="scss" scoped>
  .app-container, .app-root {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .app-container {
    margin-left: 200px;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    min-width: 800px;
  }
  .page-dashboard {
    padding: 30px;
  }
  .page-dashboard .main {
    // padding-right: -webkit-calc(240px + 5%);
    // padding-right: -moz-calc(240px + 5%);
    // padding-right: calc(240px + 5%);
  }
</style>
