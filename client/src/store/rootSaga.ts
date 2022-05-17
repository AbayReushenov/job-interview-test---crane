import { SagaIterator } from 'redux-saga';
import { all, call } from 'redux-saga/effects';
import { watchCranes } from './crane/watchers';

export function* rootSaga(): SagaIterator<void> {
  yield all([call(watchCranes)]);
}
