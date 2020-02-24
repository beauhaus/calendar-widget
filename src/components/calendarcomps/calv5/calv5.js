import React, { useState } from 'react'
import calv5Styles from './calv5.module.scss';
import Queries from '../queries'
import DayV5 from './dayv5'
import CalV5Nav from './calv5nav';
import moment from 'moment'
import { monthArrayMaker } from '../utils/date-utils'



const CalendarV5 = () => {
  const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-DD'))

  /********* Month CONTROL ********************************/
  const incrementMonth = () => {
    let addMonth = moment(selectedDate).add(1, 'month').format("YYYY-MM-DD");
    return setSelectedDate(addMonth)
  }

  const decrementMonth = () => {
    let subtractMonth = moment(selectedDate).subtract(1, 'month').format("YYYY-MM-DD");
    return setSelectedDate(subtractMonth)
  }
  /****************************************************************/

  const gridArray = monthArrayMaker(selectedDate)
  // console.log("gridArr: ", gridArray[22].thisDayDate.format("D"))

  return (
    <div className={calv5Styles.calv5Container}>
      <div className={calv5Styles.calv5Subcontainer}>
        <svg className={calv5Styles.calv5ContainerSvg}
          preserveAspectRatio="none"
          viewBox="0 0 1000 550"
          width="100%">
          <filter id='roughpaper'>
            <feTurbulence type="turbulence" baseFrequency='0.34' result='noise' numOctaves="1" />
            <feDiffuseLighting in='noise' lightingColor='#fff' surfaceScale='1.2' result='light'>
              <feDistantLight azimuth='50' elevation='70' />
            </feDiffuseLighting>
            <feBlend in="SourceGraphic" mode="multiply" />
          </filter>
          <rect width="100%" height="100%" fill="#949494" filter="url(#roughpaper)" />
          <g transform="translate(518.5 0)">
            <svg viewBox="0 0 190 60" width="43.5%" height="67.25%" preserveAspectRatio="xMaxYMax meet">
              {/* <description>JAN</description>
              <path d="M105 20v20h20v20H65V0h60v20zM15 30H0v30h45c8.28 0 15-6.72 15-15s-6.72-15-15-15h15V0H15C6.72 0 0 6.72 0 15c0 8.28 6.72 15 15 15zM175 30c8.28 0 15-6.72 15-15s-6.72-15-15-15h-45v60h30V30h15z"/> */}
              {/* <description>FEB</description>
              <path  d="M190 45c0 8.28-6.72 15-15 15h-45V0h45c8.28 0 15 6.72 15 15s-6.72 15-15 15c8.28 0 15 6.72 15 15zM105 20v20h20v20H65V0h60v20zM0 0v60h20V40h20V20h20V0z"/> */}
              {/* <description>MAR</description>
              <path d="M95.05 0L125 59.95 65 60zM160 30.19L189.81 60h-59.62l-.19-.19V0h45c8.28 0 15 6.72 15 15s-6.72 15-15 15h-15v.19zM60 0v60H0V0l30 30z" /> */}

              {/* <description>APR</description>
              <path fill="#bbbb" d="M30.05 0L60 59.95 0 60zM110 30c8.28 0 15-6.72 15-15s-6.72-15-15-15H65v60h30V30h15zM160 30.19L189.81 60h-59.62l-.19-.19V0h45c8.28 0 15 6.72 15 15s-6.72 15-15 15h-15v.19z" /> */}
              {/* <description>SEP</description>
            <path d="M105 20v20h20v20H65V0h60v20zM15 30H0v30h45c8.28 0 15-6.72 15-15s-6.72-15-15-15h15V0H15C6.72 0 0 6.72 0 15c0 8.28 6.72 15 15 15zM175 30c8.28 0 15-6.72 15-15s-6.72-15-15-15h-45v60h30V30h15z"/> */}
            </svg>
          </g>
          <DayV5 gridArray={gridArray} />
          <CalV5Nav
            decMonth={decrementMonth}
            incMonth={incrementMonth}
            selectedDate={selectedDate}
          />
        </svg>
        {/* <Queries /> */}
      </div>
    </div>
  )
}



export default CalendarV5;
