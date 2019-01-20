// @flow

import type { Action } from 'types/Action';

const NAMESPACE: string = 'I18N';

const GET: string = `${NAMESPACE}/GET`;
const get: Function = (): Action<*> => ({
  type: GET,
});

const SET: string = `${NAMESPACE}/SET`;
const set: Function = (payload: string): Action<*> => ({
  type: SET,
  payload,
});

export default ({
  GET,
  get,
  SET,
  set,
});
