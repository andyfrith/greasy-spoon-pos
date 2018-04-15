import * as types from '../actions/actionTypes';

const selectedTableReducer = ( state = {}, action ) => {
  switch ( action.type ) {
    case types.SELECT_TABLE:
      return action.table;
    default:
      return state;
  }
};

export default selectedTableReducer;
