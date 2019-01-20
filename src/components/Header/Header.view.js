// @flow

import React, {
  type Element,
  useState,
} from 'react';
import { SideNavigation } from 'components';
import logo from 'assets/images/h2lab.svg';

const Header: Function = (props): Element<*> => {
  const [show, setShow]: [boolean, Function] = useState(false);

  return (
    <nav className={`header header--${props.sticky ? 'fixed' : 'top'}`}>
      <div className="header__logo">
        <img className="header__logo__img" src={logo} />
      </div>
      <button
        className="header__btn"
        onClick={() => { setShow(true); }}
      >
        <i className="icon ion-md-menu"></i>
      </button>
      <SideNavigation
        show={show}
        close={() => { setShow(false); }}
      />
    </nav>
  );
};

export default Header;
