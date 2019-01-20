// @flow

import {
  useEffect,
  useState,
} from 'react';
import styles from 'styles/variables.scss';

const isSticky: Function = (
  scroll: number,
  target: number = styles.navigationMd - styles.navigationSm,
): boolean => {
  return scroll > target;
};

const calcPosition: Function = (
  scroll: number,
  height: number = document.body.scrollHeight - window.innerHeight,
): number => (scroll / height) * 100 | 0;

const useScrollStatus: Function = (scroll: number = window.scrollY): Object => {
  const [stickyState, setStickyState]: [boolean, Function] = useState(isSticky(scroll));
  const [positionState, setPositionState]: [number, Function] = useState(calcPosition(scroll));

  function handleScrollChange() {
    setStickyState(isSticky(window.scrollY));
    setPositionState(calcPosition(window.scrollY));
  }

  useEffect((): Function => {
    window.addEventListener('scroll', handleScrollChange);

    return function cleanup() {
      window.removeEventListener('scroll', handleScrollChange);
    };
  }, []);

  return {
    sticky: stickyState,
    position: positionState,
  };
};

export default useScrollStatus;
