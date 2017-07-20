import * as types from './mutation-types'

export default {
    addToCart({ commit }, product) {
        commit(types.ADD_TO_CART, {
            id: product.id
        })
    }
}