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
  DECREMENT_FOOD_COUNT
} from './mutation-type'

import Vue from 'vue'

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
  },
  [INCREMENT_FOOD_COUNT](state, {food}) {
    if (!food.count) {
      // food.count = 1
      // console.log('foot create:'+food.count)
      //给已知对象添加新的属性
      Vue.set(food, 'count', 1)
      state.cartFoods.push(food)

    } else {
      food.count++
      console.log('foot :' + food.count)
    }


  },
  [DECREMENT_FOOD_COUNT](state, {food}) {
    // if (!food.count) {
    //   food.count = 0
    // } else {
    //   if (food.count === 0) {
    //     return
    //   }
    //   food.count--
    // }

    if (food.count) {
      food.count--
      if (food.count === 0) {
        state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
      }
    }

  }

}
