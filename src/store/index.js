// @flow

import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connectRoutes } from 'redux-first-router';
import {
  persistCombineReducers,
  persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import immutableTransform from 'redux-persist-transform-immutable';
import createSagaMiddleware from 'redux-saga';
import queryString from 'query-string';
import { routesMap } from 'consts';
import reducers from 'reducers';
import rootSaga from 'sagas';
import i18n from './i18n';

const isProd: boolean = process.env.NODE_ENV === 'production'

const routerConfig: string = {
  initialDispatch: false,
  querySerializer: queryString,
};

const persistConfig: Object = {
  transforms: [immutableTransform()],
  key: 'root',
  storage,
  whitelist: [
    'i18n',
  ],
};

const router: Object = connectRoutes(routesMap, routerConfig);

const combinedReducer: Function = persistCombineReducers(
  persistConfig,
  {
    ...reducers,
    location: router.reducer,
  },
);

const sagaMiddleware: Function = createSagaMiddleware();
const middlewareEnhancer: Function =
  applyMiddleware(sagaMiddleware, router.middleware);
const composedEnhancers: Function = (isProd ? compose : composeWithDevTools)(
  router.enhancer,
  middlewareEnhancer,
);

const store: Object = createStore(
  combinedReducer,
  composedEnhancers,
);

const persistor: Object = persistStore(store, null, () => {
  i18n(store);
  router.initialDispatch();
});

sagaMiddleware.run(rootSaga);

export default ({
  store,
  persistor,
});
