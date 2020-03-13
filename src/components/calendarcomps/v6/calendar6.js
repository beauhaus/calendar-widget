import React from 'react'
import { Link } from 'gatsby'

import BG from './bgtexture' /*import as SVG? */

import calStyles from './calendar6.module.scss';

const Calendar6 = () => (
    <div className={calStyles.cal6Container}>
        <Link to="/">
            <button className={calStyles.homebtn}>Home</button>
        </Link>

        <BG />
        <nav className={calStyles.nav}>
            <p>Navigation</p>
        </nav>
        <div className={calStyles.dayEvtWrapper}>
            {/* <section className={calStyles.evts}>
                <p>EVENTS</p>
            </section> */}
        </div>
        {/* <MonthYearDisplay/> */}
        {/* <DaysGrid/> */}
        {/* <NavBtns/> */}
        {/* <EventsList/> */}


    </div>
)

export default Calendar6;