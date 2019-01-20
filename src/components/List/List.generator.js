// @flow

import type { ComponentType } from 'react';
import { connect } from 'react-redux';
import { list } from 'actions';

const mapStateToProps: Function = (state: Object): Object => ({
  list: state.list,
});

const mapDispatchToProps: Function = (dispatch: Function): Object => ({
  fetchList: () => {
    dispatch(list.fetch());
  },
});

export default function generator(
  BaseComponent: ComponentType<*>,
): Function {
  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(BaseComponent);
}
