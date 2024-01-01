import React from 'react'
import CamerasView from '../views/camerasView'
import MobileNaviagtorLine from '../components/mobileNaviagatorLine'

const CamerasPage = () => {
    return (
        <>
            <MobileNaviagtorLine title="دوربین ها" link='/' linkTitle='صفحه اصلی' />
            <CamerasView />
        </>
    )
}

export default CamerasPage