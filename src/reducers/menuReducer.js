import * as types from '../actions/actionTypes';

const initialState = {
  menu: [],
  isFetching: false,
  error: '',
};

const menuReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case types.LOADING_MENU:
      return {
        ...state,
        menu: [],
        isFetching: true,
      };
    case types.LOAD_MENU_SUCCESS:
      return {
        ...state,
        isFetching: false,
        menu: action.menu,
      };
    case types.LOAD_MENU_FAILURE:
      return {
        ...state,
        isFetching: false,
        menu: [],
        error: action.error,
      };

    default:
      return state;
  }
};

export default menuReducer;
