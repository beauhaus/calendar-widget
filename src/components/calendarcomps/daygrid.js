import React from 'react'
import moment from 'moment'
import PrevMonthBuffer from './prevmonthbuffer'
import SingleDay from './singleday'

import daygridStyles from './daygrid.module.scss';

const DayGrid = ({ daysInMonth, selectedDate }) => {
    const firstDay = moment(selectedDate).startOf("month"); //String

    return (
        <div className={daygridStyles.container}>
            <PrevMonthBuffer firstDay={firstDay} selectedDate={selectedDate} />

            {daysInMonth.map((data,idx) => (
                <SingleDay key={data.thisDay.fullDateStr} thisDay={data.thisDay}/>
            ))}
        </div>

    )
}

export default DayGrid