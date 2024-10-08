import React from 'react'
import NotificationsView from '../views/notificationsView'
import MobileNaviagtorLine from '../components/mobileNaviagatorLine'

const NotificationsPage = () => {
    return (
        <>
            <MobileNaviagtorLine title="هشدار قطع اتصال" link='/' linkTitle='صفحه اصلی' />
            <NotificationsView />
        </>
    )
}

export default NotificationsPage