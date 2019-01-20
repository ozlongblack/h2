// @flow

import { i18n } from 'actions';
import type { Action } from 'types/Action';

const DEFAULT_STATE: * = '';
const DEFAULT_ACTION: Action<*> = {
  type: '',
  payload: DEFAULT_STATE,
};

export default (
  state: * = DEFAULT_STATE,
  action: Action<*> = DEFAULT_ACTION,
): * => {
  switch (action.type) {
    case i18n.SET:
      return action.payload;

    default:
      return state;
  }
}
