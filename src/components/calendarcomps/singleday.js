import React from 'react'
import { Link } from 'gatsby'
import singleDayStyles from './singleday.module.scss';
import dayhook from '../../hooks/day-hook'

const SingleDay = ({ thisDay }) => {
    // console.log("thisDay: ", thisDay)
    const daysevents = dayhook(thisDay.fullDateStr);

    return (
        <div className={singleDayStyles.container}>
            <span>{thisDay.dayStr}</span>
            <ul>
                {daysevents.map((item, idx) => (
                    <li key={idx}>
                        <Link to={`/events/${item.event.slug}`}>{item.event.title}</Link>
                    </li>                    
                ))}
            </ul>
        </div>

    )
}

export default SingleDay