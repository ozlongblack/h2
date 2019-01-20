// @flow

import React, { type Element } from 'react';
import { PATHS } from 'consts';
import { lazyContainer } from 'utils';

const Components: { [string]: Function } = {
  [PATHS.ROOT]: (): Element<*> => {
    const Home: Function = lazyContainer('Home/Home');
    return <Home />;
  },
  [PATHS.PROFILE]: (): Element<*> => {
    const Profile: Function = lazyContainer('Profile/Profile');
    return <Profile />;
  },
  [PATHS.NOT_FOUND]: (): Element<*> => {
    const NotFound: Function = lazyContainer('NotFound/NotFound');
    return <NotFound />;
  },
};

export default Components;
