import { put, takeLatest } from 'redux-saga/effects';
import * as types from '../actions/actionTypes';
import AveroAPI from '../api/AveroAPI';

function* loadTables() {
  try {
    const tables = yield AveroAPI.getAllTables();
    yield put( { type: types.LOAD_TABLES_SUCCESS, tables } );
  } catch ( e ) {
    yield put( { type: types.LOAD_TABLES_FAILURE } );
  }
}

function* tablesSaga() {
  yield takeLatest( types.LOADING_TABLES, loadTables );
}

export default tablesSaga;
