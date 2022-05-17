import { createAction } from '@reduxjs/toolkit';
import { SagaIterator } from 'redux-saga';
import { apply, put, takeLatest } from 'redux-saga/effects';

import { api } from '../../../api';
import { actions as actionsError } from '../../error/error';
import { actions as actionsCrans } from '../cranes';

export const getCranesAsync = createAction('getCranesAsync');

function* getCranesWorker(): SagaIterator<void> {
  try {
    const cranes = yield apply(api, api.crane.get, []);
    yield put(actionsCrans.fillCranes(cranes));
  } catch (error: any) {
    yield put(
      actionsError.returnErrors({
        msg: error.response.data,
        status: error.response.status,
        id: null,
      })
    );
  }
}

export function* watchGetCrans(): SagaIterator<void> {
  yield takeLatest(getCranesAsync.type, getCranesWorker);
}
