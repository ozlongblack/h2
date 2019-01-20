// @flow

import { all, fork } from 'redux-saga/effects';
import i18nWatcher from './i18n/i18n.saga';
import listWatcher from './list/list.saga';

export default function* rootSaga(): Generator<*, *, *> {
  yield all([
    fork(i18nWatcher),
    fork(listWatcher),
  ]);
}
