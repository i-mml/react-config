import React from 'react'
import CreateCompnayView from '../views/createCompanyView'
import MobileNaviagtorLine from '../components/mobileNaviagatorLine'

const CreateCompnayPage = () => {
    return (
        <>
            <MobileNaviagtorLine title="ایجاد شرکت" link='/' linkTitle='صفحه اصلی' />
            <CreateCompnayView />
        </>
    )
}

export default CreateCompnayPage