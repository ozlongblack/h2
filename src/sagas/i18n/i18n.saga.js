// @flow

import { i18n as i18nActions } from 'actions';
import {
  head,
  split,
} from 'lodash/fp';
import { Maybe } from 'monet';
import {
  put,
  select,
  takeLatest,
} from 'redux-saga/effects';
import type { Action } from 'types/Action';

export function* setI18n(): Generator<*, *, *> {
  const i18n: string = yield select((state: Object): string => state.i18n);
  const action: Action<string> = yield Maybe.fromNull(i18n ? i18n : null)
    .orElse(Maybe.Some(
      head(split('-')(navigator.language)),
    ))
    .orElse(Maybe.Some('en'))
    .flatMap((language: string): Function => i18nActions.set(language));

  yield put(action);
}

export default function* i18nWatcher(): Generator<*, *, *> {
  yield takeLatest(i18nActions.GET, setI18n);
}
