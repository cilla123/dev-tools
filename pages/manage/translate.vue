<template>
  <div>
    <topbar :pageRouterConfig="topbarRouterConfig"></topbar>    
    <div class="translate-content-region">
      <div class="action-region">
        <i-select class="select-language" v-model="fromLanguage" filterable>
            <i-option v-for="item in languageJson" :value="item.value" :key="item.value">{{ item.name }}</i-option>
        </i-select>
        <span class="exchange-mask" @click="exchangeSelectLanguage">=></span>
        <i-select class="select-language" v-model="toLanguage" filterable>
            <i-option v-for="item in languageJson" :value="item.value" :key="item.value">{{ item.name }}</i-option>
        </i-select>
        <i-button type="primary" @click="handleTranslate">翻译</i-button>
      </div>
      <div class="translate-region">
        <textarea class="translate-input" v-model="translateContent" placeholder="请输入文字"></textarea>
        <div class="output-wrap output-blank">{{ translateResult }}</div>
      </div>
    </div>
  </div>
</template>

<script>

  import Topbar from '../../components/topbar/topbar' 
  import MD5 from 'md5'
  import { mapActions, mapMutations, mapGetters } from 'vuex'
  const languageJson = require('../../static/js/utils/translate/language.json')

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
          name: "在线翻译",
          url: "/manage/translate"
        }],
        // 需要翻译的内容
        translateContent: "",
        // from语言
        fromLanguage: "zh",
        // to语言
        toLanguage: "en",
        // 语言JSON
        languageJson: languageJson
      }
    },
    computed: {
      ...mapGetters({
        translateResult: 'translate/translateResult'
      })
    },
    methods: {
      /**
       * 翻译
       */
      handleTranslate(){
        if (!this.translateContent) {
          this.$Message.error('请输入需要翻译的内容!');
          return false
        }
        this.getTranslateResult({
          query: this.translateContent,
          from: this.fromLanguage,
          to: this.toLanguage
        })
      },
      /**
       * 替换语言
       */
      exchangeSelectLanguage(){
        const selectLanguageTemp = this.fromLanguage
        this.fromLanguage = this.toLanguage
        this.toLanguage = selectLanguageTemp
      },
      ...mapActions({
        getTranslateResult: 'translate/getTranslateResult',
      })
    }
  }
</script>

<style lang="scss" scoped>
  .translate-content-region{
    padding: 20px;
  }
  .action-region{
    display: flex;
    align-items: center;
    .select-language {
      width: 180px;
      margin-right: 20px;
    }
  }
  .exchange-mask{
    margin-right: 20px;
    font-size: 20px;
    cursor: pointer;
  }
  .translate-region{
    display: flex;
    margin-top: 20px;
    .translate-input{
      flex: 1;
      height: 137px;
      padding: 10px;
      border: 1px solid #ddd;
      resize: none;
      outline: none;
      font-size: 16px;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    .output-wrap{
      flex: 1;
      background: #f0f0f0;
      height: 137px;
      font-size: 16px;
      padding: 10px;
      box-sizing: border-box;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }
</style>


