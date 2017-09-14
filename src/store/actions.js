import * as types from './mutation-types'

export const action = function ({ commit, state }, { payload }) {
  commit(types.MUTATION_TYPES, payload)
}
