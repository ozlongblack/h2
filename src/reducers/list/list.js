// @flow

import { List } from 'immutable';
import { list } from 'actions';
import type { Action } from 'types/Action';
import type { ListProps } from 'types/List';

const DEFAULT_STATE: ListProps = {
  error: false,
  loading: false,
  data: List(),
};
const DEFAULT_ACTION: Action<ListProps> = {
  type: '',
  payload: DEFAULT_STATE,
};

export default (
  state: ListProps = DEFAULT_STATE,
  action: Action<Object> = DEFAULT_ACTION,
): ListProps => {
  switch (action.type) {
    case list.REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case list.COMPLETED:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case list.FAILED:
      return {
        ...state,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
}
