import * as types from './actionTypes';

export const loadTables = () => ( {
  type: types.LOADING_TABLES,
} );

export const selectTable = table => ( {
  type: types.SELECT_TABLE,
  table,
} );
