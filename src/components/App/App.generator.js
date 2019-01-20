// @flow

import { connect } from 'react-redux';
import typeof App from './App.view';

const mapStateToProps: Function = (state: Object): Object => ({
  i18n: state.i18n,
});

export default function generator(
  BaseComponent: App,
): Function {
  return connect(
    mapStateToProps,
  )(BaseComponent);
}
