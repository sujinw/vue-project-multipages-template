import * as types from './mutation-types'

const mutations = {
  [types.MUTATION_TYPES](state, payload) {
    state.stateName = payload
  }
}

export default mutations
