// @flow

import { List } from 'immutable';

export const toList: Function = (data: Array<*>): List<*> => List(data);
