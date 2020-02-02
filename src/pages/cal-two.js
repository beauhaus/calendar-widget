import React from 'react'
import { Link } from 'gatsby'
import caltwoStyles from './cal-two.module.scss'
import CalendarV2 from '../components/calendarcomps/calv2/calendarv2'

const CalV2 = () => (
        <div className={caltwoStyles.container}>
            <Link to="/"><button>Home</button></Link>
            <CalendarV2 />
        </div>
    )

export default CalV2;
