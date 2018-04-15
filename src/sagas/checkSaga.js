import { put, takeLatest } from 'redux-saga/effects';
import _ from 'lodash';
import * as types from '../actions/actionTypes';
import AveroAPI from '../api/AveroAPI';

function* loadChecks() {
  try {
    const checks = yield AveroAPI.getChecks();
    yield put( {
      type: types.LOAD_CHECKS_SUCCESS,
      checks: _.filter( checks, { closed: true } ),
    } );
  } catch ( e ) {
    yield put( { type: types.LOAD_CHECKS_FAILURE } );
  }
}

function* createNewCheck( action ) {
  try {
    const check = yield AveroAPI.createNewCheck( action.tableId );
    if ( !check ) {
      yield put( { type: types.CREATE_NEW_CHECK_FAILURE } );
      return;
    }

    yield put( { type: types.CREATE_NEW_CHECK_SUCCESS, check } );
  } catch ( e ) {
    yield put( { type: types.CREATE_NEW_CHECK_FAILURE } );
  }
}

function* loadCheck( action ) {
  try {
    // console.log( 'loadCheck action', action );
    // return;
    const check = yield AveroAPI.getCheck( action.check.id );

    if ( !check ) {
      yield put( { type: types.LOAD_CHECK_FAILURE } );
    }

    yield put( { type: types.LOAD_CHECK_SUCCESS, check } ); // check: check[ 0 ]
  } catch ( e ) {
    yield put( { type: types.LOAD_CHECK_FAILURE } );
  }
}

function* closeCheck( action ) {
  try {
    const check = yield AveroAPI.closeCheck( action.check );

    if ( !check ) {
      yield put( { type: types.CLOSE_CHECK_FAILURE } );
    }

    yield put( { type: types.CLOSE_CHECK_SUCCESS, check } ); // check: check[ 0 ]
  } catch ( e ) {
    yield put( { type: types.CLOSE_CHECK_FAILURE } );
  }
}

function* loadTableCheck( action ) {
  try {
    const checks = yield AveroAPI.getChecks();
    const check = _.find( checks, { tableId: action.table.id, closed: false } );

    // console.log( 'check', check );
    // return;

    if ( !check ) {
      yield put( { type: types.LOAD_TABLE_CHECK_NOT_FOUND } );
      return;
    }
    yield put( {
      type: types.LOAD_TABLE_CHECK_SUCCESS,
      check,
    } );
  } catch ( e ) {
    yield put( { type: types.LOAD_TABLE_CHECK_FAILURE } );
  }
}

function* addCheckItem( action ) {
  try {
    yield AveroAPI.addCheckItem( action.check, action.itemId );
    yield put( { type: types.ADD_CHECK_ITEM_SUCCESS, check: action.check } );
  } catch ( e ) {
    yield put( { type: types.ADD_CHECK_ITEM_FAILURE } );
  }
}

function* voidCheckItem( action ) {
  try {
    yield AveroAPI.voidCheckItem( action.check, action.orderedItemId );
    yield put( { type: types.VOID_CHECK_ITEM_SUCCESS, check: action.check } );
  } catch ( e ) {
    yield put( { type: types.VOID_CHECK_ITEM_FAILURE } );
  }
}

function* checkSaga() {
  yield takeLatest( types.LOADING_CHECKS, loadChecks );
  yield takeLatest( types.LOADING_CHECK, loadCheck );
  yield takeLatest( types.SELECT_TABLE, loadTableCheck );
  yield takeLatest( types.LOAD_TABLE_CHECK_SUCCESS, loadCheck );
  yield takeLatest( types.CREATE_NEW_CHECK, createNewCheck );
  yield takeLatest( types.CREATE_NEW_CHECK_SUCCESS, loadCheck );
  yield takeLatest( types.ADD_CHECK_ITEM, addCheckItem );
  yield takeLatest( types.ADD_CHECK_ITEM_SUCCESS, loadCheck );
  yield takeLatest( types.VOID_CHECK_ITEM, voidCheckItem );
  yield takeLatest( types.VOID_CHECK_ITEM_SUCCESS, loadCheck );
  yield takeLatest( types.CLOSE_CHECK, closeCheck );
  yield takeLatest( types.CLOSE_CHECK_SUCCESS, loadCheck );
}

export default checkSaga;
