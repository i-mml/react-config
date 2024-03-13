import React from 'react'
import s from './style.module.scss';
import { Spinner } from 'reactstrap';

const LoadingPage = () => {
    return (
        <div className={s.loadingFallback}>
            <Spinner color="primary" />
        </div>
    )
}

export default LoadingPage