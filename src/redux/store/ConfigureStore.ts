import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers/reduser';
import sagaWatcher from '../saga/SagaWatcher';


const sagaMiddleware = createSagaMiddleware();

export default function() {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(sagaMiddleware),
    )
  );

  sagaMiddleware.run(sagaWatcher);

  return store;
}