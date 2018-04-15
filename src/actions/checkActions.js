import * as types from './actionTypes';

export const loadCheck = check => ( {
  type: types.LOADING_CHECK,
  check,
} );

export const loadChecks = () => ( {
  type: types.LOADING_CHECKS,
} );

export const loadTableCheck = table => ( {
  type: types.LOAD_TABLE_CHECK,
  table,
} );

export const selectCheck = check => ( {
  type: types.SELECT_CHECK,
  check,
} );

export const createNewCheck = tableId => ( {
  type: types.CREATE_NEW_CHECK,
  tableId,
} );

export const addCheckItem = ( check, itemId ) => ( {
  type: types.ADD_CHECK_ITEM,
  check,
  itemId,
} );

export const voidCheckItem = ( check, orderedItemId ) => ( {
  type: types.VOID_CHECK_ITEM,
  check,
  orderedItemId,
} );

export const closeCheck = check => ( {
  type: types.CLOSE_CHECK,
  check,
} );

export default {
  loadCheck,
  loadChecks,
  loadTableCheck,
  selectCheck,
  createNewCheck,
  addCheckItem,
  voidCheckItem,
  closeCheck,
};
