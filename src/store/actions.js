import {RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS, RECEIVE_USER_INFO,RESET_USER_INFO} from './mutation-type'

import {reqAddress, reqFoodTypes, reqLoginOut, reqShops, reqUserInfo} from '../api/index'

export default {

  async getAddress ({commit, state}) {
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})
    }
  },

  async getCategorys ({commit, state}) {
    const result = await reqFoodTypes()
    if (result.code === 0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, {categorys})
    }
  },

  async getShops ({commit, state}) {
    const latitude = state.latitude
    const longitude = state.longitude
    const result = await reqShops(longitude, latitude)
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})
    }
  },
  //保存userinfo
  recordUsetInfo ({commit}, userInfo) {
    commit(RECEIVE_USER_INFO, {userInfo})
  },
  //异步获取用户信息
  async getUseInfo ({commit}) {
    const result = await reqUserInfo()
    if (result.code === 0) {
      const userInfo = result.data
      commit(RECEIVE_USER_INFO, {userInfo})
    }

  },
  //异步登出
  async logout ({commit}) {
    const result = await reqLoginOut()
    if(result.code===0){
      commit(RESET_USER_INFO)
      console.log('action 01')
    }else{
      console.log('action 02')
    }
  }
}
