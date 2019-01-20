// @flow

import React from 'react';
import { IntlProvider } from 'react-intl';
import renderer from 'react-test-renderer';
import type { ListItemProps } from './ListItem.props';
import ListItemView from './ListItem.view';

describe('ListItem', () => {
  const RealDate: * = Date;

  function mockDate (isoDate: string) {
    global.Date = class extends RealDate {
      constructor (): Date {
        return new RealDate(isoDate)
      }
    }
  }

  afterEach(() => {
    global.Date = RealDate;
  });

  it('renders correctly', () => {
    mockDate('2017-03-25T12:30:00z');

    const fixture: ListItemProps = {
      category: 'category',
      description: 'description',
      intl: {
        formatDate: jest.fn(),
      }
    };

    const tree: JSON = renderer
      .create(
        <IntlProvider locale="en">
          <ListItemView {...fixture} />
        </IntlProvider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

