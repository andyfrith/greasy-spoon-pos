import * as types from '../actions/actionTypes';

const initialState = {
  tables: [],
  isFetching: false,
  error: '',
};

const tableReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case types.LOADING_TABLES:
      return {
        ...state,
        tables: [],
        isFetching: true,
      };
    case types.LOAD_TABLES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        tables: action.tables,
      };
    case types.LOAD_TABLES_FAILURE:
      return {
        ...state,
        isFetching: false,
        tables: [],
        error: action.error,
      };

    default:
      return state;
  }
};

export default tableReducer;
