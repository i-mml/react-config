import React from 'react'
import MobileNaviagtorLine from '../components/mobileNaviagatorLine';
import RenevalServis from '../views/financialManagmentView/components/revenal-servis';

const RenevalServicePage = () => {
    return (
        <>
            <MobileNaviagtorLine title="تمدید سرویس" link='/financial-management' linkTitle='مدیریت مالی' />
            <RenevalServis />
        </>
    );
}

export default RenevalServicePage