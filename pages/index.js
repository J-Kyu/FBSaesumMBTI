import React, {useEffect} from 'react';
import AppLayout from '../components/AppLayout';
import { useSelector } from 'react-redux';
import Test from '../components/Test';

import UserComponent from '@/components/User';
import QuestionComponet from '@/components/Question';
import AnswerOption from '@/components/AnswerOption';
import {
    CONTENT_TYPE_USER,
    CONTENT_TYPE_LETTER,
    CONTENT_TYPE_SURVEY,
    CONTENT_TYPE_QUESTION,
    CONTENT_TYPE_ANSWER,
    CONTENT_TYPE_RESULT,
    CONTENT_TYPE_PROS,
    CONTENT_TYPE_SITUATION,
    CONTENT_TYPE_CONS,
    CONTENT_TYPE_TIP,
    CONTENT_TYPE_HASHTAG,
  }
  from 'store/modules/contentState'
import SurveyComponent from '@/components/Survey';



const Home = () => {

    return (
        <>
            <AppLayout>
                <ContentComponent/>
            </AppLayout>
        </>
    );
};


const ContentComponent = () => {

    const contentState = useSelector(state => state.contentState);


    switch(contentState.contentType){
        case CONTENT_TYPE_USER:  {
            return (
                <>
                    <UserComponent/>
                </>
            )
        }
        case CONTENT_TYPE_LETTER:  {
            return (
                <>
                    <UserComponent/>
                </>
            )
        }
        case CONTENT_TYPE_SURVEY:  {
            return (
                <>
                    <SurveyComponent/>
                </>
            )
        }
        case CONTENT_TYPE_QUESTION:  {
            return (
                <>
                    <QuestionComponet/>
                </>
            )
        }
        case CONTENT_TYPE_ANSWER:  {
            return (
                <>
                    <AnswerOption/>
                </>
            )
        }
        case CONTENT_TYPE_RESULT:  {
            return (
                <>
                    <UserComponent/>
                </>
            )
        }
        case CONTENT_TYPE_PROS:  {
            return (
                <>
                    <UserComponent/>
                </>
            )
            break;
        }
        case CONTENT_TYPE_SITUATION: {
            return (
                <>
                    <UserComponent/>
                </>
            )
        }
        case CONTENT_TYPE_CONS:  {
            return (
                <>
                    <UserComponent/>
                </>
            )
        }
        case CONTENT_TYPE_TIP:  {
            return (
                <>
                    <UserComponent/>
                </>
            )
        }
        case CONTENT_TYPE_HASHTAG:  {
            return (
                <>
                    <UserComponent/>
                </>
            )
        }


        default:{
            return (
                <>
                    <Test/>
                </>
            )
        }
    }

}



export default Home;