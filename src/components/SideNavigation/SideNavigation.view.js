// @flow

import React, { type Element } from 'react';
import type { SideNavigationProps } from './SideNavigation.props';

const SideNavigation: Function = (props: SideNavigationProps): Element<*> => {
  return (
    <section
      className={`sideNavigation sideNavigation--${props.show ? 'open' : 'closed'}`}>
      <div className="sideNavigation__header">
        <button
          className="sideNavigation__close"
          onClick={props.close}
        >
          <i className="icon ion-md-close" />
        </button>
      </div>

    </section>
  );
};

export default SideNavigation;
