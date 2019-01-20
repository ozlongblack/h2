// @flow

import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';
import { List } from 'immutable';
import {
  type Either,
  Right,
} from 'monet';
import { list as listActions } from 'actions';
import { PATHS } from 'consts';
import { listService } from 'services';
import { toList } from './list.transformers';

export function* getList(): Generator<*, *, *> {
  yield put(listActions.requested());
  const result: Either<string, Object> = yield call(listService.getList);
  yield result
    .flatMap((data: Object): Either<Array<*>> => Right(data.entries))
    .flatMap((data: Array<any>): Either<List> => Right(toList(data)))
    .bimap(
      (error: string): Function => listActions.failed(error),
      (data: List): Function => listActions.completed(data),
    )
    .cata(put, put);
}

export default function* listWatcher(): Generator<*, *, *> {
  yield takeLatest(PATHS.ROOT, getList);
  yield takeLatest(listActions.FETCH, getList);
}
