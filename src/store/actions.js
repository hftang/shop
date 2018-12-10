import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART
} from './mutation-type'

import {
  reqAddress,
  reqFoodTypes,
  reqLoginOut,
  reqShopGoods,
  reqShopInfo,
  reqShopRatings,
  reqShops,
  reqUserInfo
} from '../api/index'

export default {

  async getAddress({commit, state}) {
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})
    }
  },

  async getCategorys({commit, state}) {
    const result = await reqFoodTypes()
    if (result.code === 0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, {categorys})
    }
  },

  async getShops({commit, state}) {
    const latitude = state.latitude
    const longitude = state.longitude
    const result = await reqShops(longitude, latitude)
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})
    }
  },
  //保存userinfo
  recordUsetInfo({commit}, userInfo) {
    commit(RECEIVE_USER_INFO, {userInfo})
  },
  //异步获取用户信息
  async getUseInfo({commit}) {
    const result = await reqUserInfo()
    if (result.code === 0) {
      const userInfo = result.data
      commit(RECEIVE_USER_INFO, {userInfo})
    }

  },
  //异步登出
  async logout({commit}) {
    const result = await reqLoginOut()
    if (result.code === 0) {
      commit(RESET_USER_INFO)
      console.log('action 01')
    } else {
      console.log('action 02')
    }
  },
  //----------shop------
  async getGoods({commit}, fn) {
    const result = await reqShopGoods()
    if (result.code === 0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
      fn && fn()  //回调
    }
  },

  //传入回调
  async getRatings({commit},callBack) {
    const result = await reqShopRatings()
    if (result.code === 0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})

      callBack&&callBack()
    }
  },
  async getShopInfo({commit}) {
    const result = await reqShopInfo()
    if (result.code === 0) {
      const info = result.data
      commit(RECEIVE_INFO, {info})
      console.log('22222')
    } else {
    }
  },
  updateFoodCount({commit}, {isAdd, food}) {

    if (isAdd) {
      commit(INCREMENT_FOOD_COUNT, {food})
      console.log('2222')
    } else {
      commit(DECREMENT_FOOD_COUNT, {food})
    }

  },
  clearCart({commit}) {
    commit(CLEAR_CART)
  }
}
