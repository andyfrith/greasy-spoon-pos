import { combineReducers } from 'redux';
import check from './checkReducer';
import menu from './menuReducer';
import tables from './tableReducer';
import selectedCheck from './selectedCheckReducer';
import selectedTable from './selectedTableReducer';

const reducers = combineReducers( {
  check,
  menu,
  tables,
  selectedCheck,
  selectedTable,
} );

export default reducers;
