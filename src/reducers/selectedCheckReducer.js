import * as types from '../actions/actionTypes';

const selectedCheckReducer = ( state = {}, action ) => {
  switch ( action.type ) {
    case types.SELECT_CHECK:
      return action.check;
    case types.LOAD_TABLE_CHECK_SUCCESS:
      return action.check;
    case types.LOAD_CHECK_SUCCESS:
      return action.check;
    case types.LOAD_TABLE_CHECK_NOT_FOUND:
      return {};
    default:
      return state;
  }
};

export default selectedCheckReducer;
