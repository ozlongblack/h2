// @flow

import React from 'react';
import renderer from 'react-test-renderer';
import LoadingView from './Loading.view';

it('renders correctly', () => {
  const tree: JSON = renderer
    .create(<LoadingView />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
