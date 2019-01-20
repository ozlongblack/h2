// @flow

import styles from 'styles/variables.scss';

const delay: Function = (ms: number = styles.transitionDuration): Promise<number> =>
  new Promise((resolve: Function): * => setTimeout(resolve, ms));

export default delay;
