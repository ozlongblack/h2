// @flow

import React from 'react';
import renderer from 'react-test-renderer';
import { IntlProvider } from 'react-intl';
import { List } from 'immutable';
import ListView from './List.view';

describe('List', () => {
  it('renders correctly', () => {
    const fixture: Object = {
      list: {
        data: List([
          {
            cateogry: 'category',
            description: 'description',
          },
        ]),
      },
    };

    const messages: Object = {
      'app.title': 'title',
    };

    const tree: JSON = renderer
      .create(<IntlProvider locale="en"
                            messages={messages}><ListView {...fixture} /></IntlProvider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

