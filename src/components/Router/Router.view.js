// @flow

import { NOT_FOUND } from 'redux-first-router';
import { type RouterProps } from './Router.props';

const Router: Function = (props: RouterProps): Function => (
  (props.components[props.location.type] || props.components[NOT_FOUND])()
);

export default Router;
