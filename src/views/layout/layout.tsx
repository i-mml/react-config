import React from 'react'
import SideBarView from '../sideBarView'
import s from './layout.module.scss';

const Layout = ({ children }: any) => {
    return (
        <div className={s.layout}>
            <SideBarView />
            <div className={s.contents}>
                {children}
            </div>
        </div>
    )
}

export default Layout