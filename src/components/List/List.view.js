// @flow

import React, {
  type ComponentType,
  type Element,
  lazy,
  memo,
  Suspense,
} from 'react';
import type { List } from 'immutable';
import { isEqual } from 'lodash/fp';
import { FormattedMessage } from 'react-intl';
import { type ListProps } from './List.props';

const ListItem: ComponentType<*> =
  lazy((): Promise<any> => import('../ListItem/ListItem.view'));

const renderList: Function = (list: List): Array<*> => list.map(
  (item: Object, index: number): Element<*> =>
    <Suspense key={index} fallback={<div>Loading</div>}>
      <ListItem category={item.Category} description={item.Description} />
    </Suspense>,
).toArray();

const ListComponent: Function = (props: ListProps): Element<*> => (
  <div>
    <FormattedMessage id="app.title">
      {(text: string): Element<any> => (
        <h1>{text}</h1>
      )}
    </FormattedMessage>
    <button onClick={props.fetchList}>Get list</button>
    {renderList(props.list.data)}
  </div>
);

const areEqual: Function = (prevProps: ListProps, nextProps: ListProps): boolean =>
  isEqual(prevProps.list, nextProps.list);

export default memo(ListComponent, areEqual);
