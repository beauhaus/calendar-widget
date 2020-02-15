import React from 'react'
import calv5Styles from './calv5.module.scss';
import Calv5 from '../components/calendarcomps/calv5/calv5'

const Calv5Page = () => (
    <div className={calv5Styles.container}>
        <Calv5 />
    </div>
)

export default Calv5Page;
