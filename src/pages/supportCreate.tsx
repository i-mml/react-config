import React from 'react'
import SupportCreateView from '../views/supportCreateView'
import MobileNaviagtorLine from '../components/mobileNaviagatorLine'

const SupportCreatePage = () => {
    return (
        <>
            <MobileNaviagtorLine title="ارسال تیکت" link='/support' linkTitle='پشتیبانی' />
            <SupportCreateView />
        </>
    )
}

export default SupportCreatePage