import React, { useContext } from 'react'
import { AuthContext } from '../api/context';

const HomeView = () => {
    const auth = useContext(AuthContext);

    console.log('auth', auth?.value)
    return (
        <div>HomeView</div>
    )
}

export default HomeView