import { types } from './actions';

const INITIAL_STATE = { all: [] };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.FETCH_LIST:
      return { ...state, all: action.payload.data };
    default:
      return state;
  }
}
