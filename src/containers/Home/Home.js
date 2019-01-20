// @flow

import React, { type Element } from 'react';
import {
  GeneralPageLayout,
  List,
} from 'components';

const Home: Function = (): Element<*> => {
  return (
    <GeneralPageLayout>
      <List />
    </GeneralPageLayout>
  );
};

export default Home;
