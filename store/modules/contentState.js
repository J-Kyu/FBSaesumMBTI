import { createSlice } from '@reduxjs/toolkit';


export const CONTENT_TYPE_USER = 'contentState/CONTENT_TYPE_USER';
//LETTER
export const CONTENT_TYPE_LETTER = 'contentState/CONTENT_TYPE_LETTER';

//SURVEY
export const CONTENT_TYPE_SURVEY = 'contentState/CONTENT_TYPE_SURVEY';
export const CONTENT_TYPE_QUESTION = 'contentState/CONTENT_TYPE_QUESTION';
export const CONTENT_TYPE_ANSWER = 'contentState/CONTENT_TYPE_ANSWER';

//RESULT
export const CONTENT_TYPE_RESULT = 'contentState/CONTENT_TYPE_RESULT';
export const CONTENT_TYPE_PROS = 'contentState/CONTENT_TYPE_PROS';
export const CONTENT_TYPE_SITUATION = 'contentState/CONTENT_TYPE_SITUATION';
export const CONTENT_TYPE_CONS = 'contentState/CONTENT_TYPE_CONS';
export const CONTENT_TYPE_TIP = 'contentState/CONTENT_TYPE_TIP';
export const CONTENT_TYPE_HASHTAG = 'contentState/CONTENT_TYPE_HASHTAG';

//RESULT RECORD
export const CONTENT_TYPE_RESULT_RECORD = 'contentState/CONTENT_TYPE_RESULT_RECORD';


const initialState = {
    contentType: CONTENT_TYPE_USER
};


const contentSlice = createSlice({
    name: 'contentState',
    initialState,
    reducers: {
        CONTENT_TYPE_USER: (state,action) =>  {state.contentType = CONTENT_TYPE_USER;},
        CONTENT_TYPE_LETTER: (state,action) =>  {state.contentType = CONTENT_TYPE_LETTER;},

        CONTENT_TYPE_SURVEY: (state,action) =>  {state.contentType = CONTENT_TYPE_SURVEY;},
        CONTENT_TYPE_QUESTION: (state,action) =>  {state.contentType = CONTENT_TYPE_QUESTION;},
        CONTENT_TYPE_ANSWER: (state,action) =>  {state.contentType = CONTENT_TYPE_ANSWER; },

        CONTENT_TYPE_RESULT: (state,action) =>  {state.contentType = CONTENT_TYPE_RESULT;},
        CONTENT_TYPE_PROS: (state,action) =>  {state.contentType = CONTENT_TYPE_PROS;},
        CONTENT_TYPE_SITUATION: (state,action) =>  {state.contentType = CONTENT_TYPE_SITUATION;},
        CONTENT_TYPE_CONS: (state,action) =>  {state.contentType = CONTENT_TYPE_CONS;},
        CONTENT_TYPE_TIP: (state,action) =>  {state.contentType = CONTENT_TYPE_TIP;},
        CONTENT_TYPE_HASHTAG: (state,action) =>  {state.contentType = CONTENT_TYPE_HASHTAG;},

        CONTENT_TYPE_RESULT_RECORD: (state,action) =>  {state.contentType = CONTENT_TYPE_RESULT_RECORD;},
    },
});

function Test(state, action){
    state.contentType = CONTENT_TYPE_USER;
    console.log("This is Test");
}



export default contentSlice.reducer; // 리듀서;