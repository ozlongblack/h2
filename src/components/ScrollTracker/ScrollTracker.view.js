// @flow

import React, { type Element } from 'react';
import {
  animated,
  useSpring,
} from 'react-spring/hooks';

const ScrollTracker: Function = (props): Element<*> => {
  const style: any = useSpring({
    width: `${props.position}%`
  });

  return (
    <div className="scroll-tracker">
      <animated.div
        className="scroll-tracker__gauge"
        style={style}
      />
    </div>
  )
};

export default ScrollTracker;
