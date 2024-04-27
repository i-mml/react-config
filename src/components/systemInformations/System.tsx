import React from 'react'
import s from './style.module.scss';

const SystemContents = ({ item }: any) => {
    return (
        <div className={s.listItem}>
            <span>{item?.key || "-"}</span>
            <span>{item?.value || "-"}</span>
        </div>
    )
}
const SystemHeader = () => {
    return (
        <div className={s.listHeader}>
            <span>ورژن</span>
            <span>مقدار</span>
        </div>
    )
}


const HardwareContents = ({ item }: any) => {
    return (
        <div className={s.listItem}>
            <span>{item?.name || "-"}</span>
            <span>{item?.caption || "-"}</span>
            <span>{item?.class || "-"}</span>
        </div>
    )
}
const HardwareHeader = () => {
    return (
        <div className={s.listHeader}>
            <span>نام</span>
            <span>کپشن</span>
            <span>کلاس</span>
        </div>
    )
}


const SoftwareContents = ({ item }: any) => {
    return (
        <div className={s.listItem}>
            <span>{item?.name || "-"}</span>
            <span>{item?.version || "-"}</span>
        </div>
    )
}
const SoftwareHeader = () => {
    return (
        <div className={s.listHeader}>
            <span>نام</span>
            <span>ورژن</span>
        </div>
    )
}

const ProcessContents = ({ item }: any) => {
    return (
        <div className={s.listItem}>
            <span>{item?.["Process ID"] || "-"}</span>
            <span>{item?.Name || "-"}</span>
            <span>{item?.["Start Time"] || "-"}</span>
        </div>
    )
}
const ProcessHeader = () => {
    return (
        <div className={s.listHeader}>
            <span>id</span>
            <span>نام</span>
            <span>زمان شروع</span>
        </div>
    )
}


const ServiceContents = ({ item }: any) => {
    return (
        <div className={s.listItem}>
            <span>{item?.Name || "-"}</span>
            <span>{item?.Startmode || "-"}</span>
            <span>{item?.State || "-"}</span>
        </div>
    )
}
const ServiceHeader = () => {
    return (
        <div className={s.listHeader}>
            <span>نام</span>
            <span>start mode</span>
            <span>state</span>
        </div>
    )
}

const UsersContents = ({ item }: any) => {
    return (
        <div className={s.listItem}>
            <span>{item?.Domain || "-"}</span>
            <span>{item?.Name || "-"}</span>
        </div>
    )
}
const UsersHeader = () => {
    return (
        <div className={s.listHeader}>
            <span>دامنه</span>
            <span>نام</span>
        </div>
    )
}

const SystemContent = ({ data, type }: any) => {
    const systemTypeContent: any = {
        hard_ware: { title: "Hardware", value: "hard_ware", header: <HardwareHeader />, content: <>{data?.map((item: any) => <HardwareContents item={item} />)}</> },
        system: { title: "System", value: "system", header: <SystemHeader />, content: <>{data?.map((item: any) => <SystemContents item={item} />)}</> },
        users: { title: "Users", value: "users", header: <UsersHeader />, content: <>{data?.map((item: any) => <UsersContents item={item} />)}</> },
        soft_ware: { title: "Software", value: "soft_ware", header: <SoftwareHeader />, content: <>{data?.map((item: any) => <SoftwareContents item={item} />)}</> },
        service: { title: "Services", value: "services", header: <ServiceHeader />, content: <>{data?.map((item: any) => <ServiceContents item={item} />)}</> },
        process: { title: "Processes", value: "processes", header: <ProcessHeader />, content: <>{data?.map((item: any) => <ProcessContents item={item} />)}</> }
    }
    return (
        <div className={s.sensorsList}>
            {
                systemTypeContent?.[type?.value]?.header
            }
            {
                systemTypeContent?.[type?.value]?.content
            }
        </div>
    )
}

export default SystemContent