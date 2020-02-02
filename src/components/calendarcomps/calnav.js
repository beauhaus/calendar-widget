import React from "react"
import moment from 'moment'

import calNavStyles from './calnav.module.scss';

const CalNav = ({ decMonth, incMonth, selectedDate }) => {

    return (
        <nav className={calNavStyles.nav}>
            <button className={calNavStyles.calNavBtn} onClick={decMonth}>
                <span>&#x2039;</span>
            </button>
            <h1>{moment(selectedDate).format("MMMM")}</h1>
            <button className={calNavStyles.calNavBtn} onClick={incMonth}>
                <span>&#x203A;</span>
            </button>
        </nav>
    )
}

export default CalNav;