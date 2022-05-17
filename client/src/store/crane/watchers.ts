import { SagaIterator } from 'redux-saga';
import { all, call } from 'redux-saga/effects';

import { watchGetCrans } from './getCranes';

export function* watchCranes(): SagaIterator<void> {
  yield all([call(watchGetCrans)]);
}
