import s from '../financialManagment.module.scss';

const RemainDate = ({ remainDay = 0, wholePeriod = 0 }: { remainDay: number, wholePeriod: number }) => {
    // const calculatedWdth = `${(wholePeriod - remainDay) / wholePeriod * 100}`
    const calculatedWdth = `${remainDay / wholePeriod * 100}`

    return (
        <div className={s.remainBox} style={{
            background: `radial-gradient(closest-side, white 80%, transparent 80% 100%),conic-gradient(#003F80 ${calculatedWdth}%, #e7e7e7 0)`
        }}>
            <div className={s.remainDayContent}>
                <div className={s.remainDayCount}>{remainDay}</div>
                <div className={s.remainDayText}>روز مانده</div>
            </div>
        </div>
    )
}

export default RemainDate