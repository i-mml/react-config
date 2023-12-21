import React from 'react'
import s from './layout.module.scss';
import SideBarView from './components/sidebar';

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