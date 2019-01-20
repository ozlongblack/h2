// @flow

import type {
  CallEffect,
  PutEffect,
} from 'redux-saga';
import {
  call,
  put,
} from 'redux-saga/effects';
import sagaHelper from 'redux-saga-testing';
import { List } from 'immutable';
import { Either } from 'monet';
import { list as listActions } from 'actions';
import typeof { listService as ListService } from 'services';
import { getList } from './list.saga';

describe('sagas/list', () => {

  let listService: ListService;

  beforeEach(() => {
    listService = {
      getList: jest.fn(),
    };
  });

  describe('fetch data on page load', () => {
    const it: Function = sagaHelper(getList());

    it('should dispatch REQUESTED action', (result: PutEffect<*, *>) => {
      const effect: PutEffect<*, *> = put(listActions.requested());

      expect(result).toEqual(effect);
    });

    it('should call listService.getList', (result: CallEffect<*, *, *>): Either => {
      const effect: CallEffect<*, *, *> = call(listService.getList);

      expect(result.CALL).not.toBeUndefined();
      expect(result.CALL.args).toEqual(effect.CALL.args);

      return Either.Right({ entries: [] });
    });

    it('should dispatch COMPLETED action', (result: PutEffect<*, *>): PutEffect<*, *> => {
      const effect: PutEffect<*, *> = put(listActions.completed(List([])));

      expect(result).toEqual(effect);

      return effect;
    });

    it('should be completed', (result: typeof undefined) => {
      expect(result).toBeUndefined();
    });
  });

  describe('should return error on failure', () => {
    const it: Function = sagaHelper(getList({}, listService));

    it('should dispatch REQUESTED action', (result: PutEffect<*, *>): PutEffect<*, *> => {
      const effect: PutEffect<*, *> = put(listActions.requested());

      expect(result).toEqual(effect);
    });

    it('should call listService.getList', (result: CallEffect<*, *, *>): Either => {
      const effect: CallEffect<*, *, *> = call(listService.getList);

      expect(result.CALL).not.toBeUndefined();
      expect(result.CALL.args).toEqual(effect.CALL.args);

      return Either.Left({ message: 'error' });
    });

    it('should dispatch FAILED action', (result: PutEffect<*, *>): PutEffect<*, *> => {
      const effect: PutEffect<*, *> = put(listActions.failed({ message: 'error' }));

      expect(result).toEqual(effect);

      return effect;
    });

    it('should be completed', (result: typeof undefined) => {
      expect(result).toBeUndefined();
    });
  });
});
