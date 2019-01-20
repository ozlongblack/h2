// @flow

import React, { type Element } from 'react';
import {
  addLocaleData,
  IntlProvider,
} from 'react-intl';
import en from 'react-intl/locale-data/en';
import ko from 'react-intl/locale-data/ko';
import { Router } from 'components';
import Components from 'routes';
import messages_en from 'translations/en.json';
import messages_ko from 'translations/ko.json';
import type { AppProps } from './App.props';
import 'styles/styles.scss';

addLocaleData([
  ...en,
  ...ko,
]);

const messages: Object = {
  en: messages_en,
  ko: messages_ko,
};

const App: Function = (props: AppProps): Element<*> => (
  <IntlProvider locale={props.i18n} messages={messages[props.i18n]}>
    <Router components={Components} />
  </IntlProvider>
);

export default App;
