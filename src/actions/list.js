// @flow

import type { Action } from 'types/Action';

const NAMESPACE: string = 'LIST';

const FETCH: string = `${NAMESPACE}/FETCH`;
const fetch: Function = (payload: *): Action<*> => ({
  type: FETCH,
  payload,
});

const REQUESTED: string = `${NAMESPACE}/REQUESTED`;
const requested: Function = (payload: *): Action<*> => ({
  type: REQUESTED,
  payload,
});

const COMPLETED: string = `${NAMESPACE}/COMPLETED`;
const completed: Function = (payload: *): Action<*> => ({
  type: COMPLETED,
  payload,
});

const FAILED: string = `${NAMESPACE}/FAILED`;
const failed: Function = (payload: *): Action<*> => ({
  type: FAILED,
  payload,
});

export default {
  FETCH,
  fetch,
  REQUESTED,
  requested,
  COMPLETED,
  completed,
  FAILED,
  failed,
};
