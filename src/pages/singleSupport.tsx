import React from 'react'
import SingleSupportView from '../views/singleSupportView'
import MobileNaviagtorLine from '../components/mobileNaviagatorLine'
import { useParams } from 'react-router-dom';

const SingleSupportPage = () => {
    const { id } = useParams();

    return (
        <>
            <MobileNaviagtorLine title={`تیکت شماره ${id}`} link='/support' linkTitle='پشتیبانی' />
            <SingleSupportView />
        </>
    )
}

export default SingleSupportPage