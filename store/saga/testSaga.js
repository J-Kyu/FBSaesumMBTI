import { all, delay, fork, put, takeLatest, call } from 'redux-saga/effects';

import {
    INCREMENT_REQUEST,
    DECREMENT_REQUEST,
    INCREMENT_COUNT,
    DECREMENT_COUNT
} from "../modules/testState";


//Request Room Info
function IncrementCountAPI(){

}


function* IncrementCountRequest(action) {
  try {
    console.log('saga Increment Count Request');

    // const result = yield call(IncrementCountAPI);
    yield delay(2000);

    yield put({
        type: INCREMENT_COUNT,
        data: 1,
      });

  } catch (err) {
    console.error(err);
  }
}


function* DecrementCountRequest(action) {
    try {
      console.log('saga Decrement Count Request');
  
      // const result = yield call(IncrementCountAPI);
      yield delay(2000);

      yield put({
          type: DECREMENT_COUNT,
          data: 1,
        });
  
    } catch (err) {
      console.error(err);
    }
  }


function* watchEnterIncrementCount() {
    yield takeLatest(INCREMENT_REQUEST, IncrementCountRequest);
}


function* watchEnterDecrementCount() {
    yield takeLatest(DECREMENT_REQUEST, DecrementCountRequest);
}



export default function* testSaga() {
    yield all([
      fork(watchEnterIncrementCount),
      fork(watchEnterDecrementCount),

    ]);
  }