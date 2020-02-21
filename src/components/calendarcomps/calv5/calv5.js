import React , {useState}  from 'react'
import calv5Styles from './calv5.module.scss';
import Queries from '../queries'
import DayV5 from './dayv5'
import calv5Nav from './calv5nav'
import CalV5Nav from './calv5nav';
import moment from 'moment'
import {  filledArray } from '../utils/date-utils'
import {  monthArrayMaker } from '../utils/month-array-maker'



const CalendarV5 = () => {
  const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-DD'))

    /********* Month CONTROL ********************************/
    const incrementMonth = () => {
      let addMonth = moment(selectedDate).add(1, 'month').format("YYYY-MM-DD");
      console.log("INC!")
      // return setSelectedDate(addMonth)
  }

  const decrementMonth = () => {
      console.log("Dec!!")
      let subtractMonth = moment(selectedDate).subtract(1, 'month').format("YYYY-MM-DD");
      // return setSelectedDate(subtractMonth)
  }
  /****************************************************************/
      var testDate = "2020-08-22";

      const gridArray = filledArray(testDate)
      console.log("gridArr is array?: ", gridArray.length)
      // gridArray.map(elem => console.log("elem: ", elem))
      // const gridArray2 = monthArrayMaker(testDate)
      // console.log("mAm: ", gridArray2)
            
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
          <DayV5 gridArray={gridArray}/>
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
