// @flow

import React, { type Element } from 'react';
import Loadable from 'react-loadable';
import { Loading } from 'components';

const lazyContainer: Function = (page: string): * => Loadable({
  loader: (): Promise<*> => import(`../../containers/${page}`),
  loading: Loading,
  render: (loaded: Object, props: ?Object): Element<*> => {
    const BaseComponent: Function = loaded.default;
    return (
      <>
        <Loading />
        <BaseComponent {...props} />
      </>
    );
  },
});

export default lazyContainer;
