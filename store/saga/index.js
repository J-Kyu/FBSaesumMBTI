import { all, fork } from 'redux-saga/effects';
import testSaga from './testSaga';



//saga 함수 등록
export default function* rootSaga() {
  yield all([
    fork(testSaga),
  ]);
}