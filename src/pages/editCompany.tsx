import React, { useEffect, useState } from 'react'
import MobileNaviagtorLine from '../components/mobileNaviagatorLine'
import EditCompnayView from '../views/editCompanyView'
import { useParams } from 'react-router-dom';
import { getCompanyById } from '../api/services/company';
import { getPlanAll } from '../api/services/plan';


const EditCompanyPage = () => {
    const { id } = useParams();
    const [data, setData] = useState<any>(null)
    const [plan, setPlan] = useState<any>(null)


    const handleGetCompanyData = async () => {
        await getCompanyById(Number(id))?.then(res => setData(res)).catch(err => console.log(err))
        await getPlanAll(id)?.then(res => setPlan(res)).catch(err => console.log(err))
    }

    useEffect(() => {
        if (id) {
            handleGetCompanyData()
        }
    }, [id])

    return (
        <>
            <MobileNaviagtorLine title="ایجاد شرکت" link='/' linkTitle='صفحه اصلی' />
            {
                data &&
                <EditCompnayView id={id} data={data} plans={plan} />
            }
        </>
    )
}

export default EditCompanyPage