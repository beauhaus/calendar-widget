import React from 'react'
import calv5Styles from './calv5.module.scss';
import Queries from '../queries'
import DayV5 from './dayv5'

const CalendarV5 = () => {

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
          <DayV5 />
          <g className={calv5Styles.arrowRt} >
            <svg width="5%" viewBox="0 0 100 100">
              <polygon fill="#af3708" points="0,0 100,0 100,100" />
            </svg>
          </g>
          <g className={calv5Styles.arrowLt}>
            <svg width="4.5%" viewBox="0 0 100 100">
            <polygon fill="#af3708" points="0,0 0,100 100,100" />
            </svg>
          </g>
        </svg>
        {/* <Queries /> */}
      </div>
    </div>
  )
}



export default CalendarV5;
