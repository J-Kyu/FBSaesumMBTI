import { combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import testState from "./testState";


const reducer = (state, action) => {

    switch(action.type){
        case HYDRATE: {
          return action.payload;
        }
        default: {
            const combinedReducer = combineReducers({
                testState
                // 여기에 추가
            });
            return combinedReducer(state, action);
        }
    }
}

export default reducer;