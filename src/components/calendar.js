import React, { useState } from 'react'
import moment from 'moment'
// import { Link } from 'gatsby'
import { monthArrayMaker } from './calendarcomps/utils/month-array-maker'
import calendarStyles from './calendar.module.scss';
import DayGrid from './calendarcomps/daygrid'
import CalNav from './calendarcomps/calnav'

const Calendar = () => {
    const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-DD'))
    // const [selectedDate, setSelectedDate] = useState(moment().format('2020-02-08'))
    
    /********* Month CONTROL ********************************/
    const incrementMonth = () => {
        let addMonth = moment(selectedDate).add(1, 'month').format("YYYY-MM-DD");
        // console.log("INC!")
        return setSelectedDate(addMonth)
    }

    const decrementMonth = () => {
        // console.log("Dec!!")
        let subtractMonth = moment(selectedDate).subtract(1, 'month').format("YYYY-MM-DD");
        return setSelectedDate(subtractMonth)
    }
    /****************************************************************/


    const daysInMonth = monthArrayMaker(selectedDate)

    return (
        <div className={calendarStyles.container}>
            <CalNav
            decMonth={decrementMonth}
            incMonth={incrementMonth}
            selectedDate={selectedDate}
            />
            <DayGrid
            daysInMonth={daysInMonth}
            selectedDate={selectedDate}
            />
            {/* <Preview previewDate={previewDate} /> */}

        </div>
    )
}

export default Calendar;
