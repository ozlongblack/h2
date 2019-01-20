// @flow

import type { Action } from 'types/Action';

const link: Function = (
  nextRoute: string,
  payload: *,
): Action<Object> => ({
  type: nextRoute,
  payload,
});

export default {
  link,
};
