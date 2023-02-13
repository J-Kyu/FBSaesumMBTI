import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 0
};

export const INCREMENT_REQUEST = 'testState/INCREMENT_REQUEST';
export const DECREMENT_REQUEST = 'testState/DECREMENT_REQUEST';

export const INCREMENT_COUNT = 'testState/INCREMENT_COUNT';
export const DECREMENT_COUNT = 'testState/DECREMENT_COUNT';






const testSlice = createSlice({
    name: 'testState',
    initialState,
    reducers: {
        INCREMENT_COUNT: (state, action) => {IncrementCount(state,action);},
        DECREMENT_COUNT: (state, action) => {DecrementCount(state,action);},
    },
});


//Increment
function IncrementCount(state,action){
    state.count += action.data;
}

//Decrement
function DecrementCount(state,action){
    state.count -= action.data;
}

export default testSlice.reducer; // 리듀서;