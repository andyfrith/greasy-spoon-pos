import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import menuSaga from './sagas/menuSaga';
import tablesSaga from './sagas/tablesSaga';
import checkSaga from './sagas/checkSaga';
import reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const middlewares = [];
  middlewares.push( sagaMiddleware );

  if ( process.env.NODE_ENV === 'development' ) {
    // eslint-disable-next-line global-require
    // const logger = createLogger( {
    //   predicate: ( getState, action ) => action.type === 'SELECT_TABLE',
    // } );

    const logger = createLogger( {
      // level: 'error',
    } );

    middlewares.push( logger );
  }

  const store = createStore( reducers, {}, applyMiddleware( ...middlewares ) );
  sagaMiddleware.run( checkSaga );
  sagaMiddleware.run( tablesSaga );
  sagaMiddleware.run( menuSaga );
  return store;
};

export default configureStore;
