import React from 'react'
import CreateBannerView from '../views/createBannerView'
import MobileNaviagtorLine from '../components/mobileNaviagatorLine'

const CreateBannerPage = () => {
    return (
        <>
            <MobileNaviagtorLine title="ایجاد بنر" link='/' linkTitle='صفحه اصلی' />
            <CreateBannerView />
        </>
    )
}

export default CreateBannerPage