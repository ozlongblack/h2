// @flow

import React, { type Element } from 'react';
import {
  Header,
  ScrollTracker,
} from 'components';
import { useScrollStatus } from 'utils';
import type { GeneralPageLayoutProps } from './GeneralPageLayout.props';

const GeneralPageLayout: Function = (props: GeneralPageLayoutProps): Element<*> => {
  const scrollState: Object = useScrollStatus();

  return (
    <div className="generalPageLayout">
      <ScrollTracker position={scrollState.position}/>
      <Header sticky={scrollState.sticky} />
      <section className="generalPageLayout__content">
        {props.children}
      </section>
    </div>
  );
};

export default GeneralPageLayout;
