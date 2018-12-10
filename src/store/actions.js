import {
  CLEAR_CART,
  DECREMENT_FOOD_COUNT,
  INCREMENT_FOOD_COUNT,
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  SEARCH_SHOPS
} from './mutation-type'

import {
  reqAddress,
  reqFoodTypes,
  reqLoginOut,
  reqSearchShop,
  reqShopGoods,
  reqShopInfo,
  reqShopRatings,
  reqShops,
  reqUserInfo
} from '../api/index'

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
    if (result.code === 0) {
      commit(RESET_USER_INFO)
      console.log('action 01')
    } else {
      console.log('action 02')
    }
  },
  //----------shop------
  async getGoods ({commit}, fn) {
    const result = await reqShopGoods()
    if (result.code === 0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
      fn && fn()  //回调
    }
  },

  //传入回调
  async getRatings ({commit}, callBack) {
    const result = await reqShopRatings()
    if (result.code === 0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})
      callBack && callBack()
    }
  },
  async getShopInfo ({commit}) {
    const result = await reqShopInfo()
    if (result.code === 0) {
      const info = result.data
      commit(RECEIVE_INFO, {info})
    } else {
    }
  },
  updateFoodCount ({commit}, {isAdd, food}) {

    if (isAdd) {
      commit(INCREMENT_FOOD_COUNT, {food})
    } else {
      commit(DECREMENT_FOOD_COUNT, {food})
    }

  },
  clearCart ({commit}) {
    commit(CLEAR_CART)
  },
  async searchShops ({commit, state}, keyword) {
    const geohash = state.latitude + ',' + state.longitude

    const result = await reqSearchShop(geohash, keyword)
    if (result.code === 0) {
      const searchShops = result.data
      console.log("成功"+searchShops)
      commit(SEARCH_SHOPS, {searchShops})
    }else {
      console.log("xx"+searchShops)
    }

  }

}
