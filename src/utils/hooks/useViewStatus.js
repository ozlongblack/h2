// @flow

import {
  useEffect,
  useState,
} from 'react';
import styles from 'styles/variables.scss';

const covertBreakpoint: Function = (width: number): string => {
  if (width <= styles.breakpointSm) {
    return 'mobile';
  } else if (styles.breakpointSm < width && width <= styles.breakpointMd) {
    return 'tablet';
  } else {
    return 'desktop';
  }
};

const useViewStatus: Function = (width: number = window.innerWidth): string => {
  const [viewState, setViewState]: [string, Function] = useState(covertBreakpoint(width));

  function handleWidthChange() {
    setViewState(covertBreakpoint(window.innerWidth));
  }

  useEffect((): Function => {
    window.addEventListener('resize', handleWidthChange);

    return function cleanup() {
      window.removeEventListener('resize', handleWidthChange);
    };
  }, []);

  return viewState;
};

export default useViewStatus;
