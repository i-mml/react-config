import React from 'react'
import MobileNaviagtorLine from '../components/mobileNaviagatorLine';
import RenevalServis from '../views/financialManagmentView/components/revenal-servis';
import DetailServis from '../views/financialManagmentView/components/detail-servis';

const DetailServicePage = () => {
    return (
        <>
            <MobileNaviagtorLine title="جزئیات سرویس" link='/financial-management' linkTitle='مدیریت مالی' />
            <DetailServis />
        </>
    );
}

export default DetailServicePage