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
          <svg width="3%" viewBox="0 0 50 100" preserveAspectRatio="xMidYMid meet">
  <polygon  fill="transparent" points="0,100 50,50 0,0"/>
  <path fill="#555" d="M0 0v100l50-50L0 0zm8 20l30 30L8 80V20z"/>
</svg>
          </g>
          <g className={calv5Styles.arrowLt}>
          <svg  width="3%" viewBox="0 0 50 100">
  <polygon fill="transparent" points="50,100 0,50 50,0"/>
  <path fill="#555" d="M50 0v100L0 50 50 0zm-8 20L12 50l30 30V20z"/>
</svg>
          </g>
        </svg>
        {/* <Queries /> */}
      </div>
    </div>
  )
}



export default CalendarV5;
