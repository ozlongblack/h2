// @flow

import { i18n as i18nActions } from 'actions';
import {
  head,
  split,
} from 'lodash/fp';
import { Either } from 'monet';
import type {
  CallEffect,
  PutEffect,
  SelectEffect,
} from 'redux-saga';
import sagaHelper from 'redux-saga-testing';
import {
  put,
  select,
} from 'redux-saga/effects';
import type { Action } from 'types/Action';
import { setI18n } from './i18n.saga';

describe('sagas/i18n', () => {
  describe('set browser language to reducer', () => {
    const it: Function = sagaHelper(setI18n());

    it('should dispatch REQUESTED action', (result: SelectEffect<*, *>): * => {
      const effect: SelectEffect<*, *> = select((state: Object): string => state.i18n);

      expect(result.SELECT).not.toBeUndefined();
      expect(result.SELECT.args).toEqual(effect.SELECT.args);
      return null;
    });

    it('set browser lang if value is null', (result: CallEffect<*, *, *>): Either => {
      const browserLanguage: string = 'en';
      const expected: Action<string> = {
        type: 'I18N/SET',
        payload: head(split('-')(browserLanguage)),
      };

      expect(result).toEqual(expected);

      return result;
    });

    it('should dispatch COMPLETED action', (result: PutEffect<*, *>): PutEffect<*, *> => {
      const effect: PutEffect<*, *> = put(i18nActions.set('en'));

      expect(result).toEqual(effect);

      return effect;
    });

    it('should be completed', (result: typeof undefined) => {
      expect(result).toBeUndefined();
    });
  });
});
