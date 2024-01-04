import React from 'react'
import MobileNaviagtorLine from '../components/mobileNaviagatorLine'
import CompaniesView from '../views/companiesView'
import PrimaryButton from '../components/buttons/primaryButton'
import { useNavigate } from 'react-router-dom'

const CompaniesPage = () => {
    const navigate = useNavigate()
    return (
        <>
            <MobileNaviagtorLine title="شرکت ها" hasLink={false} hasCustom customLink={
                <PrimaryButton onClick={() => navigate("/company/create")} type="button">ایجاد شرکت</PrimaryButton>
            } />
            <CompaniesView />
        </>
    )
}

export default CompaniesPage