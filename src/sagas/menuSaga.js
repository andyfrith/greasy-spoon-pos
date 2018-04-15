import { put, takeEvery } from 'redux-saga/effects';
import * as types from '../actions/actionTypes';
import AveroAPI from '../api/AveroAPI';

function* loadMenu() {
  try {
    const menu = yield AveroAPI.getMenu();
    yield put( { type: types.LOAD_MENU_SUCCESS, menu } );
  } catch ( e ) {
    yield put( { type: types.LOAD_MENU_FAILURE } );
  }
}

function* menuSaga() {
  yield takeEvery( types.LOADING_MENU, loadMenu );
}

export default menuSaga;
