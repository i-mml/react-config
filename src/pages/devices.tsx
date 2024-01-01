import React from 'react'
import DevicesView from '../views/devicesView'
import MobileNaviagtorLine from '../components/mobileNaviagatorLine'

const DevicesPage = () => {
    return (
        <>
            <MobileNaviagtorLine title="دستگاه‌های متصل" link='/' linkTitle='صفحه اصلی' />
            <DevicesView />
        </>
    )
}

export default DevicesPage