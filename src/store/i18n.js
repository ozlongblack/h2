// @flow

import { i18n as i18nActions } from 'actions';

export default function i18n(store: Object) {
  store.dispatch(i18nActions.get());
}
