import {
  RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_GOODS, RECEIVE_INFO, RECEIVE_RATINGS, RECEIVE_SHOPS, RECEIVE_USER_INFO,
  RESET_USER_INFO
} from './mutation-type'

export default {

  [RECEIVE_ADDRESS](state, {address}) {
    state.address = address
  },

  [RECEIVE_CATEGORYS](state, {categorys}) {
    state.categorys = categorys
    console.log('mutations--.11' + state.categorys)
  },

  [RECEIVE_SHOPS](state, {shops}) {
    state.shops = shops
  },
  [RECEIVE_USER_INFO](state, {userInfo}) {
    state.userInfo = userInfo
  },
  [RESET_USER_INFO](state) {
    state.userInfo = {}
    console.log('reset 成功')
  },
  //
  [RECEIVE_GOODS](state, {goods}) {
    state.goods = goods
  },
  [RECEIVE_RATINGS](state, {ratings}) {
    state.ratings = ratings
  },
  [RECEIVE_INFO](state, {info}) {
    state.info = info
  }

}
