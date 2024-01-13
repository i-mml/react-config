import React from 'react'
import PlanManagementView from '../views/planManagementView'
import MobileNaviagtorLine from '../components/mobileNaviagatorLine'

const PlanManagementPage = () => {
    return (
        <>
            <MobileNaviagtorLine title="مدیریت پلن" link='/' linkTitle='صفحه اصلی' />
            <PlanManagementView />
        </>
    )
}

export default PlanManagementPage