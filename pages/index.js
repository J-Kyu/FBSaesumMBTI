import React, {useEffect} from 'react';
import AppLayout from '../components/AppLayout';
import Test from '../components/Test';

const Home = () => {

    return (
        <>
           <AppLayout>
                <Test/>
            </AppLayout>
        </>
    );
};

export default Home;