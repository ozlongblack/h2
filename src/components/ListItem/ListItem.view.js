// @flow

import React, { type Element } from 'react';
import { injectIntl } from 'react-intl';
import type { ListItemProps } from './ListItem.props';

const ListItem: Function = injectIntl((props: ListItemProps): Element<*> => (
  <div>
    <div>
      <span>{props.intl.formatDate(new Date())}</span>
      <span>{props.category}</span>
    </div>
    <div>{props.description}</div>
  </div>
));

export default ListItem;
