import React, {useEffect, useState} from 'react';
import { Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';


import {
    INCREMENT_REQUEST,
    DECREMENT_REQUEST,
} from "../../store/modules/testState";


const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 5vh;
    background-color: wheat;
`;

const CountWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 5vh;
    font-size: 5rem;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    padding: 1vh;
    gap: 5vw
`;



const Test = () => {

    const dispatch = useDispatch();

    const testState =  useSelector( state => state.testState);

    const [count,setCount] = useState(0);

    useEffect(() => {
        setCount(testState.count);
    },[testState]);

    useEffect(() =>{
        console.log("Start~!");
    },[]);

    const IncrementCount = () => {
        dispatch({type: INCREMENT_REQUEST});
    };

    const DecrementCount = () => {
        dispatch({type: DECREMENT_REQUEST});
    };


    return (
        <>
            <Wrapper>
                <CountWrapper>
                    {count}
                </CountWrapper>

                <ButtonWrapper>
                    <Button type="primary" onClick={IncrementCount}> Increment</Button>
                    <Button type="primary" onClick={DecrementCount}> Decrement</Button>
                </ButtonWrapper>
           
            </Wrapper>
        </>
    );
};

export default Test;