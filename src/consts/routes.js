// @flow

import { NOT_FOUND } from 'redux-first-router';

const NAMESPACE: string = 'ROUTER';

export const PATHS: Object = {
  ROOT: `${NAMESPACE}/ROOT`,
  PROFILE: `${NAMESPACE}/PROFILE`,
  NOT_FOUND,
};

export const routesMap: Object = {
  [PATHS.ROOT]: '/',
  [PATHS.PROFILE]: '/profile',
  [NOT_FOUND]: '/404',
};
