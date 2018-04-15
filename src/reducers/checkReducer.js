import * as types from '../actions/actionTypes';

const initialState = {
  checks: [],
  check: {},
  isFetching: false,
  error: '',
};

const checkReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case types.LOADING_CHECK:
      return {
        ...state,
        check: {},
        isFetching: true,
      };
    case types.LOAD_CHECK_SUCCESS:
      return {
        ...state,
        isFetching: false,
        check: action.check,
      };
    case types.LOAD_CHECK_FAILURE:
      return {
        ...state,
        isFetching: false,
        check: {},
        error: action.error,
      };

    case types.LOADING_CHECKS:
      return {
        ...state,
        checks: [],
        isFetching: true,
      };
    case types.LOAD_CHECKS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        checks: action.checks,
      };
    case types.LOAD_CHECKS_FAILURE:
      return {
        ...state,
        isFetching: false,
        checks: [],
        error: action.error,
      };

    default:
      return state;
  }
};

export default checkReducer;
