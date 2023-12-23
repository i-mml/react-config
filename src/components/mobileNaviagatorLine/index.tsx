import React, { ReactNode } from 'react'
import s from './sytle.module.scss';
import { Link } from "react-router-dom";

interface IProps {
    title: string,
    hasLink?: boolean,
    linkTitle?: string,
    link?: string,
    hasCustom?: boolean,
    customLink?: ReactNode
}

const MobileNaviagtorLine = (props: IProps) => {
    const { title, hasLink = true, linkTitle, link, hasCustom, customLink } = props
    return (
        <div className={s.mobileNavigator}>
            <div className={s.title}>
                {title || ""}
            </div>
            {
                hasCustom ?
                    customLink
                    :
                    hasLink ?
                        (
                            <Link to={link || "/"} className={s.left}>
                                <div className={s.link}>
                                    {linkTitle}
                                </div>
                                <img src='/images/icons/chevron-down.svg' alt='arrow' className={s.icon} />
                            </Link>
                        ) : null}
        </div>
    )
}

export default MobileNaviagtorLine