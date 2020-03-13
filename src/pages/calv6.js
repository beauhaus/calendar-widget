import React from 'react'
import calv6Styles from './calv6.module.scss';
// import Calv6 from '../components/calendarcomps/v6/calv6'
import Calendar from '../components/calendarcomps/v6/calendar6'

const Calv6Page = () => (
    <div className={calv6Styles.container}>
        <Calendar />
    </div>
)

export default Calv6Page;
