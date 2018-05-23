import axios from 'axios'
import MD5 from 'md5'

import { BAIDU_TRANSLATE_API } from '../static/js/common/api'
import { BAIDU_TRANSLATE_CONFIG } from '../static/js/common/config'
import jsonp from '../static/js/utils/jsonp'

export const state = () => ({
  // 翻译结果
  translateResult: ''
})

export const getters = {

  /**
   * 翻译结果
   */
  translateResult(state){
    return state.translateResult
  }

}

export const mutations = {

  /**
   * 更新翻译结果
   */
  updateTranslateResult(state, payload) {
    state.translateResult = payload
  }

} 

export const actions = {

  /**
   * 获取翻译后的结果
   */
  getTranslateResult({ commit }, data){
    const sign = MD5(BAIDU_TRANSLATE_CONFIG.APPID + data.query + BAIDU_TRANSLATE_CONFIG.SALT + BAIDU_TRANSLATE_CONFIG.KEY)
    const queryData = {
      q: data.query,
      appid: BAIDU_TRANSLATE_CONFIG.APPID,
      salt: BAIDU_TRANSLATE_CONFIG.SALT,
      from: data.from,
      to: data.to,
      sign: sign
    }
    return new Promise((resolve, reject) => {
      jsonp(BAIDU_TRANSLATE_API, queryData).then((res) => {
        const translateResult = res.trans_result[0].dst
        commit("updateTranslateResult", translateResult)
        resolve(translateResult)
      }).catch((error) => {
        reject(error)
      })
    })
  }

}


