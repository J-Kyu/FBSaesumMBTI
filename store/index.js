import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from "next-redux-wrapper";
import createSagaMiddleware from "redux-saga";

import rootSaga from './saga';
import reducer from './modules';




const createStore = (context) => {
    const sagaMiddleware = createSagaMiddleware();

    const store =  configureStore({ 
            reducer,
            middleware: [sagaMiddleware],
            devTools: process.env.NODE_ENV !== 'production',
        });

    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
}

export const wrapper = createWrapper(createStore, {
    debug: process.env.NODE_ENV !== 'production',
});