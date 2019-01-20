// @flow

import type { ComponentType } from 'react';
import { connect } from 'react-redux';

const mapStateToProps: Function = (state: Object): Object => ({
  location: state.location,
});

export default function generator(
  BaseComponent: ComponentType<*>,
): Function {
  return connect(mapStateToProps)(BaseComponent);
}
